<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Header from './components/Header.svelte'
	import SideNav from './components/SideNav.svelte'
	import Eivind from './components/Eivind.svelte'
	import Education from './components/Education.svelte'
	import Experience from './components/Experience.svelte'
	import Interests from './components/Interests.svelte'
	import Contact from './components/Contact.svelte'
	import { fade } from 'svelte/transition'

	export let url = '';

	let open = false;
	let show = false;
	
	//Sier ifra om bredden er høyere en 770 for at åpne og lukke skal fungere kun til gitte responsive
	//størrelser og ikke på desktop
	//Åpner og lukker side menyen
	const toggleSideNav = () => {
		if(window.innerWidth < 770) {
			open = !open
		}
	}

	//Aktiverer burger menu state
	const handleBurgerAnimation = () => {
		show = !show
	}

	const handleClick = () => {
		toggleSideNav()
		handleBurgerAnimation()
	}
	
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Eczar&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet">
</svelte:head>
<Router url='{url}'>
	<Header handleClick={handleClick} show={show}/>
	{#if !open}
		<SideNav handleClick={handleClick} />
	{/if}
	<div>
		<Route path='/'><Eivind /></Route>
		<Route path='education' component='{Education}' />
		<Route path='/experience' component='{Experience}' />
		<Route path='/interests' component='{Interests}' />
		<Route path='/contact' component='{Contact}' />
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

@media (max-width: 768px){
	:global(.main-categories) {
		width: 100vw;
		margin: 0;
		padding: 2rem 3rem;
		overflow-x: hidden;
	}
}

:global(p) {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
		font-size: 1rem;
}


</style>