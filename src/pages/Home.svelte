<script>
  import FullCalendar from "svelte-fullcalendar";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import timeGridPlugin from "@fullcalendar/timegrid";
	import listPlugin from "@fullcalendar/list";
	import esLocale from '@fullcalendar/core/locales/es';
  let options = {
    locale: esLocale,
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    initialDate: "2020-09-12",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: "Hacer deberes",
        start: "2020-09-01",
      },
      {
        title: "Sesion Veterinario Plaza españa",
        start: "2020-09-07",
        end: "2020-09-09",
      },
      {
        groupId: 999,
        title: "Esto es un evento repetido",
        start: "2020-09-09T16:00:00",
      },
      {
        groupId: 999,
        title: "Esto es un evento repetido",
        start: "2020-09-16T16:00:00",
      },
      {
        title: "Conferencia",
        start: "2020-09-11",
        end: "2020-09-13",
      },
      {
        title: "Meet con Matias",
        start: "2020-09-12T10:30:00",
        end: "2020-09-12T12:30:00",
      },
      {
        title: "Lunch",
        start: "2020-09-12T12:00:00",
      },
      {
        title: "Meet con Matias",
        start: "2020-09-12T14:30:00",
      },
      {
        title: "Comprar Azucar",
        start: "2020-09-12T17:30:00",
      },
      {
        title: "Sacar al perro",
        start: "2020-09-12T20:00:00",
      },
      {
        title: "Cita medico",
        start: "2020-09-13T07:00:00",
      },
      {
        title: "Esto es un link!",
        url: "http://google.com/",
        start: "2020-09-28",
      },
    ],
  };
</script>

<FullCalendar {options} />
