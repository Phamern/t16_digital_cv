<script>
  import { fly } from 'svelte/transition'
</script>
<main>
  <h1 transition:fly={{y: 200, duration: 1000}}>Eivind Pham</h1>
  <div transition:fly={{y: 250, duration: 1500}} class="section-grid">
    <section class="general-info">
      <p >Date of birth: 27.06.1994</p>
      <p >
        Adress: Tollbugata 13, <br>
        Postkasse 72<br>
        0151 Oslo, Norway
       </p>
      <p >email: eivindmpham@mgail.com</p>
      <p >website: <a href='https://eivindpham.no/'>eivindpham.no</a></p>
    </section>
  </div>
</main>

<style>
  main {
    width: 100vw;
    display: grid;
    place-items: center;
  }

  h1 {
    margin-top: 15vh;
    font-size: 10rem;
  }
</style>