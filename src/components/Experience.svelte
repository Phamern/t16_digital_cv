<script>

import { fade } from 'svelte/transition'
  let hide = false;
  const show = () => {
    hide = !hide
  }

</script>

<main>
  <h1 >Experience</h1>
  <p on:click={show}>Show content</p>
  {#if hide}
    <p in:fade out:fade hide={hide}>something</p>
  {/if}
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  h1 {
    font-size: 10rem;
  }

  p {
    cursor: pointer;
  }
</style>