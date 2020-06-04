<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

</script>

<main in:fly={{ y: 100, duration: 1000}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title title-experience">Experience</h1>
  <section class="info-groups">
    {#each data.experienceHistory as experience, i}
        <div class="interaction-design">
          <h2 class="degree">{experience.job}</h2>
          <div class="grade-info">
            <p class="school">{experience.role}</p>
            <p class="year">{experience.year}</p>
            {#each experience.details as detail}
              <Details detail={detail} />
            {/each}
          </div>
        </div>
    {/each}
  </section>
</main>

<style>

  .info-groups {
    display: grid;
    grid-template-columns: repeat(3, 20vw);
    gap: 3rem;
  }

  .title {
    justify-self: left;
  }

   @media (max-width: 1200px) {
    .info-groups {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10rem;
    }
  }

   @media (max-width: 750px) {
    .info-groups {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
</style>