<script>
  import Eventcard from "../events/eventcard.svelte";

  export let userEvents;

  let eventsByDate = userEvents.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
</script>

<div
  class="flex justify-center rounded-t-2xl pt-4 text-2xl bg-white border-b border-slate-300"
>
  <div>
    <h1 class="pb-2">Upcoming Events</h1>
    <div
      class="md:h-1.5 md:bg-gradient-to-r md:from-yellow-400 md:to-red-500"
    />
  </div>
</div>

<div class="md:h-[566px] bg-white rounded-b-2xl">
  <div class="md:h-[546px] md:overflow-y-auto">
    <div
      class="pt-4 md:pt-0 flex flex-row md:block overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll px-4 pb-4 md:rounded-b-2xl bg-white"
    >
      {#each eventsByDate as userEvent}
        <div class="md:pt-6 px-4">
          <Eventcard
            eventId={userEvent.id}
            eventImage={userEvent.image_path}
            eventTitle={userEvent.title}
            eventDate={userEvent.date}
            eventLocation={userEvent.address}
            buttonText="View"
            buttonColor="bg-green-500"
            ;
          />
        </div>
      {/each}
    </div>
  </div>
</div>
