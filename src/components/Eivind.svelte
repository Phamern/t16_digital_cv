<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";

</script>


<main in:fly={{ y: 200, duration: 1500, delay: 100}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title title-eivind">Eivind Pham</h1>
  <div class='info-group'>
    <div class="info-text">
      <div class="mystory">
        <h2>My story</h2>
        <p>26 years old creative from Kristiansand, Norway. From birth I’ve always been curious and observant of environments and other human beings. </p>
      </div>
      <div class="mystory2">
        <h2>Keywords</h2>
        <li class='keywords'>Adaptable</li>
        <li class='keywords'>Curious</li>
        <li class='keywords'>Calm</li>
      </div>
      <div class='contact-info'>
        <h2>Contact Info</h2>
        {#each data.contactInfo as item}
          <li>{item.birth}</li>
          <li>{item.adress}</li>
          <li>{item.phone}</li>
          <li>{item.email}</li>
          <li><a href='http://www.eivindpham.no'>{item.website}</a></li>
        {/each}
      </div>
    </div>
    <div class="display-eivind-image">
      <img class='display-image' src="img/profile-image-eivind.jpg" alt="display eivind">
    </div>
  </div>
</main>


<style>

   .main-categories {
    width: 80vw;
    margin-left: 20vw;
    justify-content: left;
  }

   li {
    font-weight: 100;
    font-family: 'Roboto', monospace;
    padding: 1rem 0;
  }

  a {
    text-decoration: underline;
    color: white;
    transition: 0.2s;
    font-weight: 100;
  }
  a:hover {
    color: #2e2e2e;
  }

  .title {
    justify-self: left;
    margin-left: 5rem;
  }

  .info-group {
    display: grid;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-left: 5rem;
  }

  .keywords {
    font-family: 'Eczar', serif;
    font-size: 1.3rem;
  }
  
  .display-eivind-image {
    grid-column:  2;
    justify-content: right;
  }

  .display-image {
    width: 25vw;
  }

  @media (max-width: 900px) {
    .main-categories {
      width: 100vw;
      margin: 0;
      padding: 2rem;
    }
  }
  
</style>