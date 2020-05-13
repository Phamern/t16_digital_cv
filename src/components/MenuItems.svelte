<script>

import SideNav from './SideNav.svelte'

let menuItems = [
  'education',
  'experience',
  'interest',
]

</script>

<main>
<h1>Hei</h1>
  <section class='menu-items'>
  
    {#each menuItems as item, i}

      <SideNav items='{menuItems[i]}' myNumber={i} />

    {/each}

  </section>

</main>

<style>

  .menu-items {
    display: grid;
    height: 400px;
    color: white;
    font-size: 1rem;
  }

</style>