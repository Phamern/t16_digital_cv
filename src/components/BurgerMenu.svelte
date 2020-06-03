<script>

  export let show;
  export let handleClick;
  
</script>

<div class='button' on:click='{handleClick}'>
  <div class="icon-container">
    <div class:active={!show} class="burger-icon"></div>
    <div class:active={!show} class="burger-icon"></div>
    <div class:active={!show} class="burger-icon"></div>
  </div>
</div>

<style>
  .button {
    width: auto;
    display: none;
  }

  .icon-container {
    display: grid;
    grid-template-rows: repeat(3, 10px);
    height: auto;
  }

  .burger-icon {
    width: 30px;
    height: 1px;
    background-color: #fff;
  }

  .active {
    transition: .5s;
  }

  .active:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .active:nth-child(2) {
    opacity: 0;
  }

  .active:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }

  @media (max-width: 900px) {
    .button {
      display: block;
    }
  }
</style>
