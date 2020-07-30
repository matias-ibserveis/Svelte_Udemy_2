<script>
  import { link } from "svelte-routing";
  import SmallNavbar from "./SmallNavbar.svelte";
  import BigNavbar from "./BigNavbar.svelte";
  import globalStore from "../../stores/globalStore";
  let screenWidth;

  $: if (screenWidth > 992) {
    globalStore.toggleItem("sidebar", false);
  }

</script>

<!-- OBTENEMOS EL ANCHO DE LA VENTANA (BIND) -->
<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 992}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}
