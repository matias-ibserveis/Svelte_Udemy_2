<script>
  export let id;
  // global store
  import products from "../stores/products";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";

  import { addToCart } from "../stores/cart";
  import calendar from "../stores/calendar";
  import globalStore from "../stores/globalStore";

  $: calendario = $calendar.find((item) => item.id === id);
</script>

<svelte:head>
  <!-- <title>{!product ? 'Cargando Producto...' : product.title}</title> -->
</svelte:head>
{#if !calendario}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" use:link class="btn btn-primary">Volver atras</a>
    <div class="single-product-container">{calendario.diaHoy}</div>
  </section>
{/if}
