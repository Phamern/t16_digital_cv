<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

  let show = false;
  let showText = 'Show';

  const showDetail = (i) => {
    if( i === show) {
      show = false;

    } else {
      show = i
    }
  }
</script>


<main in:fly={{ y: 200, duration: 1500, delay: 500}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title title-education">Education</h1>

  <section class="info-groups">
    {#each data.educationHistory as education, i}
        <div class="interaction-design">
          <h2 class="degree">{education.field}</h2>
          <div class="grade-info">
            <p class="year">{education.year}</p>
            <p class="school">{education.school}</p>
                {#each education.details as detail}
                <Details detail={detail} type='education'/>
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
    padding: 0;
  }

  .title-education {
    justify-self: left;
    margin-left: 5rem;
  }

  .info-groups {
    display: grid;
    grid-template-columns: repeat(3, 22vw);
    gap: 2rem;
    margin-left: 5rem;
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
  }
  
</style>