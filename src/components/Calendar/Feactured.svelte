<script>
  export let title = "";

  import products, {featuredStore} from "../../stores/products";
  import Product from "./CalendarItem.svelte";
  import Loading from "../Loading.svelte";
  /* $: feactured = $products.filter((item) => item.featured === true); */
</script>

{#if $featuredStore.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each $featuredStore as product (product.id)}
        <Product {product} />
      {/each}
    </div>
  </section>
{/if}
