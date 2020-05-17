<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";

</script>


<main in:fly={{ y: 200, duration: 1500, delay: 500}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title title-eivind">This is me</h1>
  <div class='info-group'>
    <h2>My story</h2>
    <div class="display-eivind-image">
     <img class='display-image' src="img/profile-image-eivind.jpg" alt="display eivind">
    </div>
  </div>
</main>


<style>

   .main-categories {
    width: 80vw;
    margin-left: 20vw;
    margin-right: 25vw;
    justify-content: left;
  }

  .title {
    justify-self: left;
  }

  .info-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 2rem;
  }
  
  .display-eivind-image {
    grid-column:  3;
    /* grid-row: span 0 / 3; */
  }

  .display-image {
    width: 30vw;
  }

  @media (max-width: 900px) {
    .main-categories {
      width: 100vw;
      margin: 0;
      padding: 2rem;
    }
  }
  
</style>