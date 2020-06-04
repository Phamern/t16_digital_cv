<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

</script>

<main in:fly={{ y: 100, duration: 1000}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title">Interests</h1>
  <section class="info-groups">
    {#each data.interests as interest, i}
      <div>
        <h2 class="degree">{interest.name}</h2>
        <div class="interest-info">
          <p class="school">{interest.role}</p>
          <p class="year">{interest.year}</p>
          <p class="description">{interest.description}</p>
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

.interest-info p {
  line-height: 1.5rem;
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