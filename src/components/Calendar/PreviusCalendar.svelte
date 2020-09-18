<script>
  import { onMount, afterUpdate } from "svelte";
  import globalStore from "../../stores/globalStore";
  import { rangeCalendar } from "../../stores/calendar";
  function previusCalendar() {
    if ($globalStore.mes > 1 && $globalStore.mes <= 12) {
      let mes = $globalStore.mes - 1;
      globalStore.toggleItem("mes", mes);
    } else {
      let año = $globalStore.año - 1;
      globalStore.toggleItem("mes", 12);
      globalStore.toggleItem("año", año);
    }
  }
  afterUpdate(() => {
    rangeCalendar($globalStore.año, $globalStore.mes, $globalStore.diaHoy);
  });
</script>

<button on:click={previusCalendar} class="btn-calendar">
  <i class="fas fa-chevron-circle-left" />
</button>
