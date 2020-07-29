<script>
  export let id;
  // global store
  import products from "../stores/products";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";

  import { addToCart } from "../stores/cart";

  import globalStore from "../stores/globalStore";

  $: product = $products.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!product ? 'Cargando Producto...' : product.title}</title>
</svelte:head>
{#if !product}
  <Loading />
{:else}
  <section class="single-product">

    <a href="/products" use:link class="btn btn-primary">Volver atras</a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt="" />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(id, product);
            globalStore.toggleItem('cart', true);
          }}>
          Agregar al carrito
        </button>
      </article>
    </div>
  </section>
{/if}
