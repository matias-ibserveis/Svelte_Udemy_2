<script>
  import { onMount } from "svelte";
  import moment from "moment";
  import "moment/locale/es";

  let horas = [];
  let primeraHora = moment().startOf("day");
  let ultimaHora = moment().endOf("day");

  function loopHora() {
    for (var i = primeraHora.hour(); i <= ultimaHora.hour(); i++) {
      horas = [...horas, `${i}:00`, `${i}:30`];
    }
  }
  onMount(() => {
    loopHora();
  });
</script>

<style>
  .horas {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    margin-top: 41px;
    text-align: center;
    border: 1px solid #dadce0;
  }
  .hora:nth-child(2n) {
    border-bottom: 1px solid #dadce0;
  }
</style>

<div class="horas">
  {#each horas as hora}<span class="hora">{hora}</span>{/each}
</div>
