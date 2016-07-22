<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.css';
	@import '../node_modules/font-awesome/css/font-awesome.min.css';
	@import './static/css/components.min.css';
	@import './static/css/layout.min.css'
</style>

<template>
	<div class="wrapper">				
		<header class='page-header'>			
			<nav-project></nav-project>		

			<div class='container-fluid'>
				<div class='page-content'>				
					<router-view></router-view>				
				</div>
				<footer-project></footer-project>
			</div>

		</header>
	</div>	
</template>

<script>
	
import NavProject from './components/general/nav.vue'
import FooterProject from './components/general/footer.vue'


export default {

  components: {
    NavProject,
    FooterProject   
  }
}
</script>


