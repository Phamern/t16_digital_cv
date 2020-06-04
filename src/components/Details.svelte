<script>
import { fly, fade } from "svelte/transition";

let show = false;
let hideText = 'Show'

export let detail

const handleClick = () => {
  show = !show
  hideText = !show ? 'Show' : 'Hide'
}

</script>

<div class='show-details-group'>
  <p class='show-details' on:click={handleClick}>{hideText} details</p>
  <img class:active={show} on:click={handleClick} class='arrow' src="../img/arrow.png" alt="arrow">
</div>
{#if show}
  <div class="list">
    <li transition:fade={{duration: 500}}>{detail.a}</li>
    <li transition:fade={{duration: 500}}>{detail.b}</li>
    <li transition:fade={{duration: 500}}>{detail.c}</li>
    <li transition:fade={{duration: 500}}>{detail.d}</li>
    <li transition:fade={{duration: 500}}>{detail.e}</li>
    <li transition:fade={{duration: 500}}>{detail.f}</li>
  </div>
{/if}

<style>

 .active {
    transform: rotate(180deg);
  }

  .show-details-group {
    height: 20px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .show-details {
    cursor: pointer;
  }

  .arrow {
    width: 15px;
    color: white;
    transition: .5s;
    cursor: pointer;
    align-self: right;
    transition: 0.7s;
  
  }

  .list {
    margin-bottom: 3rem;
  }
 
  li {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1rem;
    padding-top: 1rem;
  }



 </style>