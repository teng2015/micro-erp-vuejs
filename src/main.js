/*
	Importando modulos do Vue.js
*/ 
import Vue 		   from 'vue'
import VueRouter   from 'vue-router'
import VueResource from 'vue-resource'
import VueCharts   from 'vue-charts'

/*
	Importando a pagina (componentes)
*/
import App 		  from './App.vue'
import Dashboards from './components/pages/Dashboards/Dashboards.vue'
import Teste 	  from './components/pages/Teste/Teste.vue'

import CategoryIndex   	  from './components/pages/Category/Index.vue'
import CategoryAll   	  from './components/pages/Category/ListAll.vue'
import CategoryProducts   from './components/pages/Category/CategoryProducts.vue'
import CategoryFinancial  from './components/pages/Category/CategoryFinancial.vue'

/*
	Registrado os módulos 
	
	vue-route    -> utilizado para fazer rotas no browser
	vue-resource -> utilizado par afazer chamadas http (GET/POST)
*/  
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCharts);

/*
	 Criamos as rotas de nosso SPA
*/
const router = new VueRouter();
router.map({
  
  '/': {
  	name: 'Dashboards',
    component: Dashboards
  },

  '/category': {
  	name: 'List all category',
    component: CategoryIndex,    
    
    subRoutes: {
     '/all': {
        name: 'Category All',
        component: CategoryAll
      },
      '/financial': {
        name: 'Category financial',
        component: CategoryFinancial
      },
      '/products': {
        name: 'Category products',
        component: CategoryProducts
      }       
    }
  },

  '/teste': {
  	name: 'Teste',
    component: Teste
  }

});

// Rota inválida redireciona para home
router.redirect({
  '/category': '/category/all',
  '*': '/'
})

// Iniciando as rotas
router.start(App, '#app')