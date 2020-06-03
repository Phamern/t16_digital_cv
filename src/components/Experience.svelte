<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

</script>


<main in:fly={{ y: 200, duration: 1500, delay: 100}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title title-experience">Experience</h1>
  <section class="info-groups">
    {#each data.experienceHistory as experience, i}
        <div class="interaction-design">
          <h2 class="degree">{experience.job}</h2>
          <div class="grade-info">
            <p class="school">{experience.role}</p>
            <p class="year">{experience.year}</p>
                {#each experience.details as detail}
                  <Details detail={detail} type='experience' />
                {/each}
          </div>
        </div>
    {/each}
  </section>
</main>


<style>
  .main-categories {
    width: 80vw;
    margin-left: 20vw;
    margin-right: 20vw;
  }

  .info-groups {
    display: grid;
    grid-template-columns: repeat(3, 20vw);
    gap: 3rem;
    margin-left: 5rem;
  }

  .title-experience {
    justify-self: left;
    margin-left: 5rem;
  }

  @media (min-width: 1600px) {
  .main-categories {
    width: 80vw;
    margin-left: 15vw;
    place-items: center;
  }
  }
  @media (max-width: 1200px) {
    .info-groups {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
  @media (max-width: 900px) {
    .info-groups {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    .main-categories {
    width: 80vw;
    margin-left: 5vw;
    place-items: center;
  }
  }
</style>