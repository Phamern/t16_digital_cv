<script>
	import Header from './components/Header.svelte'
	import SideNav from './components/SideNav.svelte'
	import MenuItems from './components/MenuItems.svelte'
</script>

	<Header />
	<MenuItems />

<style>
:global(*) {
	box-sizing: border-box;
}

:global(html, body, main, h1) {
	margin: 0;
	padding: 0;
	background-color: #1a1a1a;
}
</style>