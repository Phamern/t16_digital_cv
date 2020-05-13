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
<Router url='{url}'>
	<Header />
	<nav in:fade class='side-nav'>
		<div>
			<Link to='/'><p class='menu-items'>eivind pham</p></Link>
			<Link to='education'><p class='menu-items'>education</p></Link>
			<Link to='experience'><p class='menu-items'>experience</p></Link>
			<Link to='interests'><p class='menu-items'>interests</p></Link>
		</div>
	</nav>
	<div class='link' >
		<Route path='education' component='{Education}' />
		<Route path='/experience' component='{Experience}' />
		<Route path='/interests' component='{Interests}' />
	</div>
</Router>

	<main>
		<h1>Eivind</h1>
	</main>

<style>

:global(*) {
	box-sizing: border-box;
}

:global(html, body, main, h1) {
	margin: 0;
	padding: 0;
	background-color: #1a1a1a;
}

.side-nav {
	width: 300px;
	height: 100vh;
	margin-top: 100px;
	background-color: #1a1a1a;
	position: fixed;
	display: grid;
	place-items: center;
}
main {
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
}
h1 {
	font-size: 10rem;
	color: white; 
}

.menu-items {
    color: #fff;
    font-family: 'Eczar', serif;
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: .1rem;
    cursor: pointer;
    margin-left: 2rem;
		margin-right: 2rem;
		text-decoration: none;
		justify-self: center;
		transition: 0.1s;
  }

	.menu-items:hover {
		margin-left: 2.5rem;
		text-decoration: none;
	}
	

</style>