<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Header from './Header.svelte'
	import Education from './Education.svelte'
	import Experience from './Experience.svelte'
	import Interests from './Interests.svelte'
	import Eivind from './Eivind.svelte'
	import { fade } from 'svelte/transition'

	export let url = "";

	// let open = false;

	// const openMenu = () => {
	// 	open = ! open
	// }

</script>

<Router url='{url}'>
	<nav in:fade class='side-nav'>
	<img class='profile-image' src="img/profil-image.jpg" alt="profile">
		<div>
			<Link to='/'><p class='menu-items'>eivind pham</p></Link>
			<Link to='education'><p class='menu-items'>education</p></Link>
			<Link to='experience'><p class='menu-items'>experience</p></Link>
			<Link to='interests'><p class='menu-items'>interests</p></Link>
		</div>
	</nav>
	<div>
		<Route path='/'><Eivind /></Route>
		<Route path='education' component='{Education}'/>
		<Route path='/experience' component='{Experience}' />
		<Route path='/interests' component='{Interests}' />
	</div>
</Router>

<style>

.side-nav {
	width: 20vw;
	height: 90vh;
	margin-top: 15vh; 
	background-color: #1a1a1a;
	position: fixed;
	display: grid;
	place-items: center;
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

	.profile-image {
		width: 200px;
		border-radius: 50%;
	}

@media (max-width: 900px){
	.side-nav {
		width: 100vw;
		height: 100vh;
		background-color: #1a1a1a;
		position: fixed;
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		place-items: center;
		z-index: 1;
		/* transform: translateX(100vh); */
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
}
</style>