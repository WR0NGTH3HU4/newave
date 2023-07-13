<script>
	import { onMount } from 'svelte';
  
	let showMenu = true;
  
	function toggleMenu() {
	  showMenu = !showMenu;
	}
  
	onMount(() => {
	  const handleResize = () => {
		if (window.innerWidth >= 768) {
		  showMenu = true;
		}
	  };
  
	  window.addEventListener('resize', handleResize);
  
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	});
  </script>
  
  <nav>
	<div class="logo">
	  <img src="logo/logo_feher.png" alt="newave_logo">
	</div>
  
	<div class="menu" class:show={showMenu}>
	  <a href="#">Híreink</a>&nbsp;
	  <a href="#">Előadóink</a>&nbsp;
	  <a href="#">Galéria</a>&nbsp;
	  <a href="#">Kapcsolatok</a>&nbsp;
	</div>
  </nav>
  
  <style>
	nav {
		display: flex;
		align-items: center;
		padding: 10px;
		background-color: #252525;
	}
  
	.logo {
	  font-weight: bold;
	  font-size: 20px;
	  display: flex;
	  align-items: center;
	}
  
	.logo img {
	  height: 4rem;
	}
  
	.menu {
	  display: flex;
	  gap: 10px;
	  float: center;
	  flex-grow: 1; /* hozzáadott sor */
	  justify-content: center; /* hozzáadott sor */
	}
  
	.menu a {
	  text-decoration: none;
	  color: white;
	  font-weight: bold;
	  font-size: 15px;
	}
  
	@media (max-width: 768px) {
	  .menu {
		gap: 5px;
	  }
  
	  .menu a {
		font-size: 12px;
	  }

	  .logo img{
		height: 3rem;
	  }
	}
  </style>
  