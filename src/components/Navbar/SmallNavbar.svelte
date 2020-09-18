<script>
  // global store
  import { link } from "svelte-routing";

  import globalStore from "../../stores/globalStore";
  import LoginLink from "../LoginLink.svelte";
  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar k-grid k-flex">
  <button
    class="btn-sidebar-toggle"
    on:click={() => {
      openSidebar('sidebar', true);
    }}>
    <i class="fas fa-bars" />
  </button>
  <a href="/" use:link class="nav-logo">
    <h1 class="logo">IBSERVEIS</h1>
  </a>
  <div class="nav-section">
    <LoginLink />
  </div>
</nav>
