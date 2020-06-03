<script>
import SideNav from './SideNav.svelte'
import BurgerMenu from './BurgerMenu.svelte'

export let show;
export let handleClick;

</script>

<header>
  <img class='header-logo' src="img/logo-white.png" alt="logo">
  <h1 class='header-title'>
    Curriculum Vitae
  </h1>
  <div class='burger'>
    <BurgerMenu show={show} handleClick={handleClick} />
  </div>
</header>
<style>

header {
  display: grid;
  top: 0;
  left: 0;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  height: 15vh;
  width: 100vw;
  background-color: #161616;
  z-index: 2;
  place-items: center;
}

.header-title {
  font-family: 'Eczar', serif;
  font-weight: 400;
  letter-spacing: .5rem;
  font-size: 1.5rem;
  color: #fff;
}
.header-logo {
  height: 40px;
  margin: 2rem;
  justify-self: left;
}

@media (max-width: 900px) {

  .header-title {
    font-size: 1rem;
  }
}
</style>