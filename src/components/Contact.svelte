<script>
  import { fly, fade } from "svelte/transition";
  import { data } from "../data/data.js";
  import Details from './Details.svelte'

</script>

<main in:fly={{ y: 100, duration: 1000}} out:fade={{duration: 10}} class="main-categories">
  <h1 class="title">Contact</h1>
  <section class="contact-info-wrapper">
    {#each data.contactInfo as item}
      <div>
        <h2 class="degree">birth</h2>
        <div class="grade-info">
          <p class="school">{item.birth}</p>
        </div>
      </div>
      <div>
        <h2 class="degree">address</h2>
        <div class="grade-info">
          <p class="school">{item.address}</p>
        </div>
      </div>
      <div>
        <h2 class="degree">phone number</h2>
        <div class="grade-info">
          <p class="school">{item.phone}</p>
        </div>
      </div>
      <div>
        <h2 class="degree">e-mail</h2>
        <div class="grade-info">
        <a href='mailto:{item.mail}'><p>{item.email}</p></a>
        </div>
      </div>
      <div>
        <h2 class="degree">website</h2>
        <div class="grade-info">
        <a href='http://www.eivindpham.no'><p>{item.website}</p></a>
        </div>
      </div>
      <div>
        <h2 class="degree">refrences</h2>
        <div class="grade-info">
          <p>{item.refrences}</p>
        </div>
      </div>
    {/each}
  </section>
</main>

<style>

.contact-info-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  gap: 2rem;
}

.title {
  justify-self: left;
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

@media (max-width: 1200px) {
  .contact-info-wrapper {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
  }
}

@media (max-width: 750px) {
  .contact-info-wrapper{
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
}
  
</style>