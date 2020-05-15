<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  import { data } from "../data/data.js";

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
    {#each data.experienceHistory as experience, i}
        <div class="interaction-design">
          <h2 class="degree">{experience.job}</h2>
          <div class="grade-info">
            <p class="year">{experience.year}</p>
            <p class="school">{experience.role}</p>
            <div class='show-details-group'>
              <p class='show-details' on:click={() => showDetail(i)}>{showText} details</p>
              <img class:active={show === i} class='arrow' src="../img/arrow.png" alt="arrow">
            </div>
              {#if i === show}
                {#each experience.details as detail}
                  <li transition:fade={{duration: 500}}>{detail.a}</li>
                  <li transition:fade={{duration: 500}}>{detail.b}</li>
                  <li transition:fade={{duration: 500}}>{detail.c}</li>
                  <li transition:fade={{duration: 500}}>{detail.d}</li>
                {/each}
              {/if}
          </div>
        </div>
    {/each}
  </section>
</main>


<style>
  .main-categories {
    width: 80vw;
    margin-left: 25vw;
    place-items: center;
  }

  .title-education {
    justify-self: left;
  }
  .info-groups {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
  .active {
    transform: rotate(180deg);
    transition: 1s;
  }

  .arrow {
    width: 15px;
    color: white;
    transition: .5s;
    cursor: pointer;
  }

  .show-details {
    cursor: pointer;
  }

  .show-details-group {
    height: 20px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }

  li {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1rem;
    padding: 1rem;
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