<script>
  import moment from "moment";
  import "moment/locale/es";
  import globalStore from "../../stores/globalStore";
  import { link } from "svelte-routing";
  import links from "../../constants/links";
  import LoginLink from "../LoginLink.svelte";
  import PreviusCalendar from "../Calendar/PreviusCalendar.svelte";
  import NextCalendar from "../Calendar/NextCalendar.svelte";
  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar k-grid k-flex">
  <div class="nav-section">
    <button
      class="btn-sidebar-toggle"
      on:click={() => {
        openSidebar('sidebar', true);
      }}>
      <i class="fas fa-bars" />
    </button>
    <a href="/" use:link class="nav-logo big-logo">
      <h1 class="logo">IBSERVEIS</h1>
    </a>
    <div class="fecha">
      <div class="fecha-botones">
        <PreviusCalendar />
        <NextCalendar />
      </div>
      <div>
        {`${moment.months()[$globalStore.mes - 1]} de ${$globalStore.año}`}
      </div>
    </div>
  </div>
  <div class="nav-section">
    <LoginLink />
  </div>
</nav>
