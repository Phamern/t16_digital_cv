<script>

import { fade } from 'svelte/transition'
import { tweened } from 'svelte/motion'

let hide = false;
let changeText = 'Show'

const show = () => {
    hide = !hide
    changeText = 'Hide'
}
const progress = tweened(0, {
  duration: 400
})

</script>

<main in:fade>
  <h1 >Experience</h1>
  <div>
   <p in:fade out:fade on:click={show}>{changeText} content</p>
    {#if hide}
      <p in:fade out:fade hide={hide}>something</p>
    {/if}
  </div>
  <progress color='green' value={$progress}></progress>
  <button on:click="{() => progress.set(100)}"></button>
</main>

<style>

progress {
  display: block;
  width: 50%;
}
  main {
    width: 100vw;
    height: 100vh;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    place-items: center;
  }

  h1 {
    font-size: 10rem;
  }

  p {
    cursor: pointer;
  }
</style>