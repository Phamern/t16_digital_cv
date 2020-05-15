<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Header from './components/Header.svelte'
	import Education from './components/Education.svelte'
	import Experience from './components/Experience.svelte'
	import Interests from './components/Interests.svelte'
	import Eivind from './components/Eivind.svelte'
	import { fade } from 'svelte/transition'

	export let url = "";

</script>

<svelte:head>
		<link href="https://fonts.googleapis.com/css2?family=Eczar&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet">
</svelte:head>

<Router url='{url}'>
	<Header />
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

:global(*) {
	box-sizing: border-box;
}

:global(html, body, main, h1) {
	margin: 0;
	padding: 0;
	background-color: #1a1a1a;
	color: #fff;
}

:global(.title) {
	font-family: 'Eczar', serif;
	font-size: 2.5rem;
	margin-top: 15vh;
}

:global(h2) {
	font-family: 'Eczar';
	font-size: 1.5rem;
}

:global(.main-categories) {
    width: 100vw;
    display: grid;
		justify-content: center;
}

:global(p) {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
		font-size: 1rem;
}

.side-nav {
	width: 20vw;
	height: 100vh;
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

</style>