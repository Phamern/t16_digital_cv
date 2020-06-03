<script>
	import Header from './components/Header.svelte'
	import SideNav from './components/SideNav.svelte'

	import { Router, Link, Route } from 'svelte-routing'
	import Education from './components/Education.svelte'
	import Experience from './components/Experience.svelte'
	import Interests from './components/Interests.svelte'
	import Eivind from './components/Eivind.svelte'
	import { fade } from 'svelte/transition'

	export let url = '';

	let open = false;

	let show = false;
	
	const hideMe = () => {
		if(window.innerWidth < 900) {
			open = !open
		}
	}
	
	const showNav = () => {
		show = !show
	}

	const handleClick = () => {
		hideMe()
		showNav()
	}
	
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Eczar&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet">
</svelte:head>
<Router url='{url}'>
	<Header handleClick={handleClick} show={show}/>
	{#if !open}
		<SideNav handleClick={handleClick} show={show}/>
	{/if}
	
	<div>
		<Route path='/'><Eivind /></Route>
		<Route path='education' component='{Education}' />
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
	background-color: #161616;
	color: #fff;
	overflow-x: hidden;
}

:global(.title) {
	font-family: 'Yeseva One', cursive;
	font-size: 2.5rem;
	margin-top: 20vh;
}

:global(h2) {
	font-family: 'Eczar';
	font-size: 1.5rem;
}

:global(.main-categories) {
    width: 80vw;
		margin-left: 20vw;
    display: grid;
		justify-content: left;
		padding: 5rem;
}

@media (max-width: 900px){
	:global(.main-categories) {
		width: 100vw;
		margin: 0;
		padding: 2rem;
	}
}

:global(p) {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
		font-size: 1rem;
}


</style>