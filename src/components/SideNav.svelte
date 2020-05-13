<script>
import Education from './Education.svelte'
import Experience from './Experience.svelte'
import Interests from './Interests.svelte'

export let myNumber, items;

let show = false;

const hideMe = () => {
  show = !show;
}

console.log(myNumber);

</script>
  <main>
    {#if show}
      <nav>
        {#if myNumber === 0}
          <Education />
        {:else if myNumber === 1}
          <Experience />
        {:else if myNumber === 2}
          <Interests />
        {/if}
      </nav>
    {:else}
      <div on:click={hideMe} class='side-nav'>
        <p class='item{myNumber}'>{items}</p>
      </div>
    {/if} 
  </main>
<style>

  .side-nav {
    width: 300px;
    height: 100vh;
    margin-top: 100px;
    background-color: #1a1a1a;
    position: fixed;
    display: grid;
  }

  .item0 {
    color: #fff;
    font-family: 'Eczar', serif;
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: .1rem;
    cursor: pointer;
    margin-left: 2rem
  }
  .item1 {
    color: #fff;
    font-family: 'Eczar', serif;
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: .1rem;
    cursor: pointer;
    margin-left: 2rem
  }
  .item2 {
    color: #fff;
    font-family: 'Eczar', serif;
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: .1rem;
    cursor: pointer;
    margin-left: 2rem
  }

</style>