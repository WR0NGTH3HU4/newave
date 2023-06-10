<script lang="ts">
	import { onMount } from 'svelte';
	import NavbarCombo from './NavbarCombo.svelte';
	import ThemeBubble from './ThemeBubble.svelte';
</script>

<nav>
	<span class="cim">
		<a href="kapcsolat" class="noadeco">
			<img src="logo/logo_bolygo.png" alt="newave_logo">
		</a>
	</span>

	<a href="rolunk">Művészeink</a>
	<a href="galeria">Galéria</a>
	<a href="hirek">Hírek</a>
	<a href="kapcsolat">Kapcsolat</a>
</nav>

<style lang="scss">
	@use '../scss/nav.scss';

	:global(nav .options a) {
		color: black;
		text-decoration: none;
	}

	:global(nav .options img) {
		width: 2rem;
	}

	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-end;

		align-items: flex-start;
		padding-right: 15px;
		padding-left: 15px;
		max-height: 40px;
		color: white;
		padding: 1rem;
		gap: 1rem;

		& > * {
			cursor: pointer;
		}

		& > a, & > a:active, & > a:link, & > a:hover {
			@extend .nav_link;
		}
	}

	.cim {
		font-size: 1.3rem;
		justify-self: flex-start;
		margin-right: auto;
		font-weight: 600;

		a {
			color: white;
			text-decoration: none;
		}
	}

	img {
		height: 4rem;
	}
</style>
