<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

</script>

<main in:fly={{ y: 200, duration: 1500, delay: 100}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title title-education">Education</h1>
  <section class="info-groups">
    {#each data.educationHistory as education, i}
        <div>
          <h2 class="degree">{education.field}</h2>
          <div class="grade-info">
            <p class="year">{education.year}</p>
            <p class="school">{education.school}</p>
            {#each education.details as detail}
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