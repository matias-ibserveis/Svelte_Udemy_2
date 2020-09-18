<script>
  import moment from "moment";
  import "moment/locale/es";
  import { onMount, afterUpdate } from "svelte";
  import globalStore from "../../stores/globalStore";
  import calendar, { rangeCalendar } from "../../stores/calendar";
  import products from "../../stores/defaultProducts";
  import Product from "./CalendarItem.svelte";
  import Loading from "../Loading.svelte";
  import Hora from "../Hora.svelte";

   
</script>

<style>
  .calendario {
    padding: 20px;
    display: grid;
    grid-template-columns: 60px 1fr;
  }
  .calendario__content {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0px;
  }
</style>

<div class="calendario">
  <div class="calendario__hora">
    <Hora />
  </div>
  <div class="calendario__content">
    {#each $calendar as item}
      <Product {item} />
    {:else}
      <Loading />
    {/each}
  </div>
</div>
