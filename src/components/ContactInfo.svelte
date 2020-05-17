<script>

  import { data } from '../data/data.js'

</script>
<main class='main-categories'>
  <div class='contact-info'>
    {#each data.contactInfo as item}
      <li>{item.birth}</li>
      <li>{item.adress}</li>
      <li>{item.phone}</li>
      <li>{item.email}</li>
      <li><a href='http://www.eivindpham.no'>{item.website}</a></li>
    {/each}
  </div>
</main>

<style>

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

</style>
