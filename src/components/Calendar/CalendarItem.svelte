<script>
  export let item;
  const { id, diaHoy, dia_semana, mes, año } = item;
  import globalStore from "../../stores/globalStore";
  import { link } from "svelte-routing";
</script>

<style>
  .item {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: rgb(0, 0, 0);
    transition: var(--transition);
    border-right: 1px solid #dadce0;
  }
  .item__fecha {
    background-color: #86c751;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item__evento {
    background-color: rgb(252, 252, 252);
  }
  .grid-celdas {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
  }
  .evento__celda {
    height: 42px;
    border-bottom: 1px solid #dadce0;
  }
  .evento__celda:hover {
    background-color: #dadce04b;
  }
</style>

<a
  href={`/products/${$globalStore.año}-${$globalStore.mes}-${diaHoy}`}
  use:link>
  <div class="item">
    <div class="item__fecha">
      <span>{dia_semana}</span><span>{diaHoy}</span>
    </div>
    <div class="item__evento">
      <div class="grid-celdas">
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
        <div class="evento__celda" />
      </div>
    </div>
  </div>
</a>
