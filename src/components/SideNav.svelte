<script>
	import { Router, Link, Route } from 'svelte-routing'
	import { fly } from 'svelte/transition'

	export let handleClick;

</script>

	<nav in:fly={{x: -300, duration: 500}} out:fly class='side-nav'>
		<div class='menu-item-wrapper'>
			<Link to='/'><p on:click={handleClick} class='menu-items'>about me</p></Link>
			<Link to='education'><p on:click={handleClick} class='menu-items'>education</p></Link>
			<Link to='experience'><p on:click={handleClick} class='menu-items'>experience</p></Link>
			<Link to='interests'><p on:click={handleClick} class='menu-items'>interests</p></Link>
		</div>
	</nav>

<style>

.side-nav {
	width: 20vw;
	height: 90vh;
	margin-top: 15vh; 
	background-color: #161616;
	position: fixed;
	display: grid;
	place-items: center;
	border-right: 1px solid #2e2e2e;
}

.menu-items {
    color: #fff;
    font-family: 'Eczar', serif;
		font-size: 2rem;
		font-weight: 400;
    letter-spacing: .1rem;
    cursor: pointer;
    margin-left: 2rem;
		margin-right: 2rem;
		text-decoration: none;
		justify-self: center;
		transition: 0.1s;
		
  }

	.menu-items:hover {
		transform: translateX(.5rem);
		text-decoration: none;
	}

@media (max-width: 1300px){
	.menu-items {
		font-size: 1.5rem;
	}
}

@media (max-width: 768px){
	.side-nav {
		width: 100vw;
		height: 100vh;
		position: fixed;
		grid-template-rows: repeat(3, 1fr);
		z-index: 10;
	}

	.menu-item-wrapper {
		display: grid;
		place-items: center;
	}

	.menu-items {
		font-size: 1.5rem;
	}
}
</style>