<script>
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";
  // featured products
  import Feactured from "../components/Products/Feactured.svelte"
</script>

<Hero>
  <a href="/products" class="btn btn-primary btn-hero" use:link>shop now</a>
</Hero>
<Feactured title="Productos Descatados"></Feactured>