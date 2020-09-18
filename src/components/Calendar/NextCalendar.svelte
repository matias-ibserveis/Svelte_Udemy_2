<script>
  import { onMount, afterUpdate } from "svelte";
  import globalStore from "../../stores/globalStore";
  import { rangeCalendar } from "../../stores/calendar";
  function nextCalendar() {
    if ($globalStore.mes >= 0 && $globalStore.mes < 12) {
      let mes = $globalStore.mes + 1;
      globalStore.toggleItem("mes", mes);
    } else {
      let año = $globalStore.año + 1;
      globalStore.toggleItem("año", año);
      globalStore.toggleItem("mes", 1);
    }
  }
  afterUpdate(() => {
    rangeCalendar($globalStore.año, $globalStore.mes, $globalStore.diaHoy);
  });
</script>

<button on:click={nextCalendar} class="btn-calendar">
  <i class="fas fa-chevron-circle-right" />
</button>
