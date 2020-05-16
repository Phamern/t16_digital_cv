<script>
	import Header from './components/Header.svelte'
	import SideNav from './components/SideNav.svelte'

</script>

<svelte:head>
		<link href="https://fonts.googleapis.com/css2?family=Eczar&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet">
</svelte:head>

	<Header />
	<SideNav />

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
		padding: 3rem;
}

:global(p) {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
		font-size: 1rem;
}


</style>