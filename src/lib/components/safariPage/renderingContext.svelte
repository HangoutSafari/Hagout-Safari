<script>
  import { Safari } from "../../../Safari/Safari";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  import { AnimalEventDispatcher } from "../../../Safari/Animals/AnimalEventDispatcher";
  import Popup from "$lib/components/safariPage/popup.svelte";

  export let availableAnimals = [];
  let renderingContext;
  const eventDispatcher = createEventDispatcher();
  const animalEventDispatcher = new AnimalEventDispatcher();

  onMount(() => {
    console.log(renderingContext);
    const safari = new Safari(
      renderingContext,
      "models/savana2.glb",
      animalEventDispatcher
    );
    safari.start();

    const lsdCheckbox = document.getElementById("lsdMode");

    lsdCheckbox.addEventListener("change", function (event) {
      safari.isLSDUpdateON = event.target.checked;
    });

    availableAnimals.forEach((animal) => {
      safari.safariGenerator.add(animal.model_id, animal.title);
    });
  });

  animalEventDispatcher.addEventListener("showAnimal", function (event) {
    console.log("animal clicked on svelte component");
    eventDispatcher("showAnimal", {
      name: event.name,
      rarity: event.rarity,
      achievedFrom: event.achievedFrom,
      image: event.image,
    });
  });
</script>

<div
  id="dimentionHelper"
  class="w-full lg:w-[90%] h-full lg:h-full border-red-400 self-center flex flex-col items-center"
>
  <canvas
    class="w-full h-full rounded-md shadow-xl"
    bind:this={renderingContext}
  />
</div>

<div>
  <input id="lsdMode" type="checkbox" class="opacity-10" />
</div>
