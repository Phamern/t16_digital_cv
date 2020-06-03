<script>

	export let burgerMenu;
  export let show;

</script>

<div class='button' on:click='{burgerMenu}'>
  <div class="icon-container">
    <div class:active={!show} class="burger-icon"></div>
    <div class:active={!show} class="burger-icon"></div>
    <div class:active={!show} class="burger-icon"></div>
  </div>
</div>

<style>
  .button {
    width: auto;
    position: absolute;
    z-index: 50;
    position: fixed;
    background-color: transparent;
    border: none;
    right: 5vw;
    margin: 2rem;
    display: none;
    user-select: none;
  }

  .icon-container {
    display: grid;
    grid-template-rows: repeat(3, 10px);
  }

  .burger-icon {
    width: 30px;
    height: 1px;
    background-color: #fff;
    transition: .6s;
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
