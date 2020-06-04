<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

</script>


<main in:fly={{ y: 200, duration: 1500, delay: 100}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title">Interests</h1>
  <section class="info-groups">
    {#each data.interests as interest, i}
        <div class="interaction-design">
          <h2 class="degree">{interest.name}</h2>
          <div class="grade-info">
            <p class="year">{interest.year}</p>
            <p class="school">{interest.role}</p>
            {#each interest.details as detail}
              <Details detail={detail} type='interests' />
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


  @media (max-width: 900px) {
    .info-groups {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
</style>