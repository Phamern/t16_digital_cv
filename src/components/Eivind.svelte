<script>
  import { fly } from 'svelte/transition'
</script>
<main class='main-categories'>
  <h1 class='title title-eivind' transition:fly={{y: 200, duration: 1000}}>Eivind Pham</h1>
  <div transition:fly={{y: 250, duration: 1500}} class="section-grid">
    <section class="info">
      <div class='general-info'>
          <p class='birthday'>27 June 1994</p>
          <p class='adresse'>
            Tollbugata 13, <br>
            Postkasse 72<br>
            0151 Oslo, Norway
          </p>
          <p class='email'>eivindmpham@gmail.com</p>
          <p class='website'><a href='https://eivindpham.no/'>eivindpham.no</a></p>
        </div>
      <div class='general-info'>
          <p >Date of birth: 27.06.1994</p>
          <p >
            Adress: Tollbugata 13, <br>
            Postkasse 72<br>
            0151 Oslo, Norway
          </p>
          <p >email: eivindmpham@gmail.com</p>
          <p >website: <a href='https://eivindpham.no/'>eivindpham.no</a></p>
        </div>
    </section>
  </div>
</main>

<style>

  .title-eivind {
    margin-top: 15vh;
    font-family: 'Eczar', serif;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem; 
    width: 80vw;
    margin-left: 25vw;
  }

  .general-info {
    display: grid;

  }
</style>