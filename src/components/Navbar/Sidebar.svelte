<script>
  import { link } from "svelte-routing";
  import links from "../../constants/links.js";
  import globalStore from "../../stores/globalStore";
  let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          closeSidebar('sidebar', false);
        }}>
        <i class="fas fa-window-close" />
      </button>
    </div>

    <a href="/" use:link>
      <img class="logo sidebar-logo" src="/assets/images/logo.svg" alt="" />
    </a>
    <ul class="sidebar-links">
      {#each links as sideLink}
        <li>
          <a
            href={sideLink.url}
            use:link
            on:click={() => {
              closeSidebar('sidebar', false);
            }}>
            {sideLink.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
