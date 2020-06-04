<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";

</script>

<main in:fly={{ y: 200, duration: 1500, delay: 100}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title">Eivind Pham</h1>
  <section class="section-wrapper">
    <div class="display-eivind-image">
      <img class='display-image' src="img/profile-image-eivind.jpg" alt="display eivind">
    </div>
    <div class='intro-text'>
    <div class="text-about-me">
      <h2>My story</h2>
      <p>26 years old creative from Kristiansand, Norway. From birth I’ve always been curious and observant of environments and other human beings. </p>
    </div>
    <div class="keywords-container">
      <h2>Keywords</h2>
      <div class="keywords-item">
        <li class='keywords'>Adaptable</li>
        <li class='keywords'>Curious</li>
        <li class='keywords'>Calm</li>
        <li class='keywords'>Creative</li>
      </div>
    </div>
    </div>
  </section>
</main>

<style>

  .section-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 5rem;
  }

  .display-eivind-image {
    grid-column:  2 / 3;
    grid-row: 1 / 2;
  }

  .display-image {
    width: 25vw;
  }

  .intro-text {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .intro-text p {
    width: 400px;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .keywords-item {
    display: grid;
    grid-template-columns: repeat(2, 15rem);
    row-gap: 2rem;
  }

  .keywords-item li{
    font-weight: 400;
    font-family: 'Roboto', monospace;
    font-size: 1.5rem;
  }


  @media (max-width: 768px) {

    .section-wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      gap: 0;
      justify-content: left;
    }

    .display-eivind-image {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      padding-top: 3rem;
      justify-content: left;
    }

    .intro-text p {
      width: 70vw;
      font-size: 1.2rem;
      font-weight: 100;
      line-height: 2rem;
  }
    .intro-text {
      grid-row: 2;
    }

    .display-image {
      width: 250px;
    }

    .keywords-item {
      grid-template-columns: repeat(2, 10rem);
      row-gap: 1rem;
      padding-bottom: 2rem;
    }

    .keywords-item li {
      font-size: 1rem;
    }

  }
  
</style>