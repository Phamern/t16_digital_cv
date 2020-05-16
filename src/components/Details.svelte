<script>
import { fly, fade } from "svelte/transition";
let show = false;
let hideText = 'Show'

export let type
export let detail


const handleClick = () => {
  show = !show
  hideText = !show ? 'Show' : 'Hide'
}

const test = event => {
  const { target } = event
  console.log(target)
}

</script>



<div class='show-details-group'>
  <p class='show-details' on:click={handleClick}>{hideText} details</p>
  <img class:active={show} on:click={handleClick} class='arrow' src="../img/arrow.png" alt="arrow">
</div>
{#if show}
  <li transition:fade={{duration: 500}}>{detail.a}</li>
  <li transition:fade={{duration: 500}}>{detail.b}</li>
  <li transition:fade={{duration: 500}}>{detail.c}</li>
  {#if type === 'education'}
    <li transition:fade={{duration: 500}}>{detail.d}</li>
  {/if}
{/if}
 <style>

 .active {
    transform: rotate(180deg);
    transition: 1s;
  }

  .arrow {
    width: 15px;
    color: white;
    transition: .5s;
    cursor: pointer;
  }
 
  li {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1rem;
    padding-top: 1rem;
  }

  .show-details {
    cursor: pointer;
  }


  .show-details-group {
    height: 20px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }


 </style>