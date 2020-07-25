<script>
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";
  // feactured products
  
</script>

<Hero>
  <a use:link href="/products" class="btn btn-prmary btn-hero">Shop now</a>
</Hero>
