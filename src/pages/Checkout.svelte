<script>
  import { onMount } from "svelte";
  import { navigate, link } from "svelte-routing";
  import user from "../stores/user";
  import cart, { cartTotal } from "../stores/cart";
  import submitOder from "../strapi/submitOrder";
  import Loading from "../components/Loading.svelte";
  import globalStore from "../stores/globalStore";
  let name = "";

  let cardElement;
  let cardErrors;
  let card;
  let stripe;
  let elements;
  $: isEmpty = !name || $globalStore.alert;

  /* $: count = 400;

  onMount(() => {
    function countSesion() {
      if (!$user.jwt) {
        count = count - 1;
        if (count < 0) {
          setTimeout(() => {
            navigate("/");
          }, count);
        } else {
          console.log("tiempo:" + count + "s");
          setTimeout(countSesion(), 1000);
        }
      }
    }
    countSesion();
  }); */
  onMount(() => {
    if (!$user.jwt) {
      navigate("/");
      return;
    }
    if ($cartTotal > 0) {
      stripe = Stripe(
        "pk_test_51HC0J7D8gqdMWVa3oi1wEUEkhW3BZtTZ8J4gzvKi6ISc0cc1GrDAJir9DJuYOWXc7TV5iPvoClarsfL2lF5libLA00cf48fLfb"
      );
      elements = stripe.elements();
      card = elements.create("card");
      card.mount(cardElement);
      card.addEventListener("change", function (event) {
        if (event.error) {
          cardErrors.textContent = event.error.message;
        } else {
          cardErrors.textContent = "";
        }
      });
    }
  });
  async function handleSubmit() {
    globalStore.toggleItem("alert", true, "Realizando pedido...");
    let response = await stripe
      .createToken(card)
      .catch((error) => console.error(error));
    const { token } = response;
    if (token) {
      const { id } = token;
      let order = await submitOder({
        name,
        total: $cartTotal,
        items: $cart,
        stripeTokenId: id,
        userToken: $user.jwt,
      });
      if (order) {
        globalStore.toggleItem(
          "alert",
          true,
          "Tu pedido se ha realizado con exito!"
        );
        cart.set([]);
        localStorage.setItem("cart", JSON.stringify([]));
        navigate("/");
        return;
      } else {
        globalStore.toggleItem("alert", true, "Ocurrio un problema", true);
      }
    }
  }
</script>

<style>
  h1,
  p {
    text-align: center;
  }
</style>

{#if $cartTotal > 0}
  <section class="form">
    <h2 class="section-title">Checkout</h2>
    <form on:submit|preventDefault={handleSubmit} class="checkout-form">
      <h3>order total: {$cartTotal}</h3>
      <div class="form-control">
        <label for="name">Tu nombre</label>
        <input type="text" name="name" bind:value={name} />
      </div>
      <div class="stripe-input">
        <div id="card-element" bind:this={cardElement} />
      </div>
      <div id="card-errors" bind:this={cardErrors} role="alert" />
      {#if isEmpty}
        <p class="form-empty">Por favor rellena bien los campos</p>
      {/if}
      <button
        type="submit"
        class="btn btn-block btn-primary"
        disabled={isEmpty}
        class:disabled={isEmpty}>
        Enviar
      </button>
    </form>

  </section>
{:else}
  <div class="checkout-empty">
    <h2>Tu carrito esta vacio</h2>
    <a href="/products" use:link class="btn btn-primary">Ir a comprar</a>
  </div>
{/if}
