<script>
  import Calendar from "../calendar/Calendar.svelte";
  let closeSidebar = globalStore.toggleItem;

  import globalStore from "../../stores/globalStore";
</script>

<style>
  /* .active {
    transform: translate3d(0px, 0, 0) !important;
  } */
  h2 {
    font-weight: normal;
    text-transform: capitalize;
    color: var(--mainWhite);
    margin-bottom: 0px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: var(--color-azul_fuerte);
    position: sticky;
    height: 100vh;
    bottom: 0;
    top: 0;
    transition: width 0.5s ease;
    width: min-content;
    z-index: 11111111111;
  }
  .sidebar__logo {
    padding: 30px 10px;
    color: white;
  }

  .sidebar__blocks {
    display: flex;
    flex-direction: column;
  }
  .sidebar__blocks__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: rgb(243, 243, 243);
  }
  /* .sidebar__blocks__item:hover {
    background-color: #3b4855;
  } */
  .sidebar__blocks__item--text {
    margin-left: 10px;
    font-size: 0.9em;
    font-weight: 500;
    width: max-content;
  }

  .sidebar__blocks__item--icon {
    font-size: 15px;
    margin-left: 5px;
    color: white;
  }

  @media screen and (max-width: 574px) {
    .sidebar {
      position: absolute;
      transform: translate3d(-256px, 0, 0);
      transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
    }
    /* .sidebar.active {
      width: 256px;
    }
    .sidebar.active .sidebar__blocks__item--text {
      opacity: 1;
    } */
  }
  @media screen and (max-width: 920px) {
    .sidebar {
      width: 68px;
    }
    .sidebar__blocks__item--text {
      opacity: 0;
    }
  }
</style>

<div class="sidebar">
  <ul class="sidebar__blocks">
    <div class="sidebar__blocks__item">
      <!-- <Calendar /> -->
    </div>
    <li class="sidebar__blocks__item">
      <span class="sidebar__blocks__item--icon">
        <i class="fas fa-user-plus" />
      </span>
      <span class="sidebar__blocks__item--text">Sidebar Item</span>
    </li>
    <li class="sidebar__blocks__item">
      <span class="sidebar__blocks__item--icon">
        <i class="fas fa-user-plus" />
      </span>
      <span class="sidebar__blocks__item--text">Sidebar Item</span>
    </li>
    <li class="sidebar__blocks__item">
      <span class="sidebar__blocks__item--icon">
        <i class="fas fa-user-plus" />
      </span>
      <span class="sidebar__blocks__item--text">Sidebar Item</span>
    </li>
    <li class="sidebar__blocks__item">
      <span class="sidebar__blocks__item--icon">
        <i class="fas fa-user-plus" />
      </span>
      <span class="sidebar__blocks__item--text">Sidebar Item</span>
    </li>
  </ul>
</div>
