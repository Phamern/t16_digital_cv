<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Header from './Header.svelte'
	import Education from './Education.svelte'
	import Experience from './Experience.svelte'
	import Interests from './Interests.svelte'
	import Eivind from './Eivind.svelte'
	import ContactInfo from './ContactInfo.svelte'
	import { fade } from 'svelte/transition'

	export let url = "";

</script>

<Router url='{url}'>
	<nav in:fade class='side-nav'>
		<div>
			<Link to='/'><p class='menu-items'>about me</p></Link>
			<Link to='education'><p class='menu-items'>education</p></Link>
			<Link to='experience'><p class='menu-items'>experience</p></Link>
			<Link to='interests'><p class='menu-items'>interests</p></Link>
			<!-- <Link to='contact'><p class='menu-items'>contact</p></Link> -->
		</div>
	</nav>
	<div>
		<Route path='/'><Eivind /></Route>
		<Route path='education' component='{Education}'/>
		<Route path='/experience' component='{Experience}' />
		<Route path='/interests' component='{Interests}' />
		<!-- <Route path='/contact' component='{ContactInfo}' /> -->
	</div>
</Router>

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
@media (max-width: 900px){
	.side-nav {
		width: 100vw;
		height: 100vh;
		position: relative;
		grid-template-rows: repeat(3, 1fr);
	}
}
</style>