<script>

import { fly } from 'svelte/transition'
import { educations } from '../data/education.js'

</script>

<main class='main-categories'>
  <h1 class='title title-education'>Education</h1>
  <section class="info-groups">
  <div transition:fly={{y:200, duration: 1500}} class="interaction-design">
    <h2 class="degree">Interaction Design</h2>
    <div class="grade-info">
      <p class="year">{$educations.year}</p>
      <p class="school">{$educations.school}</p>
      <p class="more-details">More details</p>
    </div>
  </div>
  <div transition:fly={{y:200, duration: 2500}} class="graphic-design">
    <h2 class="degree">Graphic Design</h2>
    <div class="grade-info">
      <p class="year">Aug 2018 - Jun 2020</p>
      <p class="school">Fagskolen Kristiania, Norway</p>
      <p class="more-details">More details</p>
    </div>
  </div>
  <div transition:fly={{y:200, duration: 3500}} class="fhs">
    <h2 class="degree">Graphic Design & street art</h2>
    <div class="grade-info">
      <p class="year">Sept 2013 - Jun 2014</p>
      <p class="school">Skjeberg folkehøyskole, Norway</p>
      <p class="more-details">More details</p>
    </div>
  </div>
  </section>
  
</main>

<style>

.main-categories {
  height: 70vh;
  width: 80vw;
  margin-left: 15vw;
  place-items: center;
}
.info-groups {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
}

@media (max-width: 900px) {
  .info-groups {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
}

</style>