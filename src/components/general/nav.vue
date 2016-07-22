<template>
  
  <nav role="navigation" class="navbar mega-menu">
        <div class="container-fluid">
          <div class="clearfix navbar-fixed-top">
            
            <button type="button" data-toggle="collapse" data-target=".navbar-responsive-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="toggle-icon"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span></button><a id="index" href="/#!/" class="page-logo"><img src="../../static/images/logo_ensa.png" height="201" width="647" alt="Logo" class="img-responsive"/></a>
            
            <div class="topbar-actions">
              <div class="btn-group-img btn-group">
                <button type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" class="btn btn-sm dropdown-toggle"><span>Ola, </span><img src="/upload/user/" alt=""/></button>
                <ul role="menu" class="dropdown-menu-v2">
                  <li><a href="page_user_profile_1.html"><i class="icon-user"> Minha conta</i></a></li>
                  <li class="divider"> </li>
                  <li><a href="/lock_screen"><i class="icon-lock"> Bloquear tela</i></a></li>
                  <li><a href="/export_db_system"><i class="icon-key"> Exportar banco dados</i></a></li>
                  <div class="divider"></div>
                  <li><a href="/logout"><i class="icon-logout">Sair</i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav-collapse collapse navbar-collapse navbar-responsive-collapse">
            <ul  class="nav navbar-nav">
              <li v-on:click="openTab('start')" v-bind:class="{open: isOpen.start}" class="dropdown dropdown-fw "><a href='#!/hello' class="text-uppercase"><i class="fa fa-2x fa-home"></i>Inicio</a>
              </li>
              
              <li v-on:click="openTab('cadastre')" v-bind:class="{open: isOpen.cadastre}" class="dropdown dropdown-fw ">
                <a href="javascript:;" class="text-uppercase"><i class="fa fa-2x fa-book"></i>Cadastro </a>
                <ul class="dropdown-menu dropdown-menu-fw">
                  <li class="dropdown "><a href="#!/client"><i class="icon-settings"></i> Cliente</a></li>

                  <li class="dropdown more-dropdown-sub">
                    <a href="javascript:;"><i class="icon-puzzle"> </i> Financeiro</a>
                    <ul class="dropdown-menu">
                      <li><a href="#!/category/financial">Categorias</a></li>
                      <li><a href="#!/consult_indicators_analyze_receipt">Contas a pagar</a></li>
                      <li><a href="#!/consult_indicators_analyze_receipt">Contas a receber</a></li>                      
                    </ul>
                  </li>
                  
                  <li class="dropdown "><a href="#!/supplier"><i class="icon-puzzle"></i> Fornecedor</a></li>                  
                  
                  <li class="dropdown "><a href="#!/list_input_nfe"><i class="icon-diamond"></i> NFE</a></li>                  
                  
                  <li class="dropdown more-dropdown-sub">
                    <a href="javascript:;"><i class="icon-puzzle"> </i> Produtos</a>
                    <ul class="dropdown-menu">
                      <li><a href="#!/category/products">Categorias</a></li>                      
                    </ul>
                  </li>
                </ul>
              </li>             
              
              <li v-on:click="openTab('consult')" v-bind:class="{open: isOpen.consult}"  class="dropdown dropdown-fw ">
                <a href="javascript:;" class="text-uppercase"><i class="fa fa-2x fa-search"></i>CONSULTA </a>
                <ul class="dropdown-menu dropdown-menu-fw">                  
                  <li class="dropdown "><a href="/consult_client"><i class="icon-puzzle"> </i> Cliente</a>
                  </li>
                  <li class="dropdown "><a href="/consult_supplier"><i class="icon-settings"></i> Fornecedor</a></li>
                  <li class="dropdown more-dropdown-sub">
                    <a href="javascript:;"><i class="icon-puzzle"> </i> Indicadores</a>
                    <ul class="dropdown-menu">
                      <li><a href="/consult_indicators_analyze_receipt">Análise origem recebimento               </a></li>
                      <li><a href="/consult_indicators_analyze_production">Análise origem produção</a></li>
                      <li><a href="javascript:;">Linha produção</a></li>
                      <li><a href="/consult_indicators_research_satisfation">Pesquisa e satisfação</a></li>
                      <li><a href="/consult_indicators_reclamation_sugestion">Reclamação e sugestão</a></li>
                      <li><a href="/consult_indicators_sale">Venda </a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li v-on:click="openTab('start')" class="dropdown dropdown-fw "><a href='#!/teste' class="text-uppercase"><i class="icon-home"></i>Teste</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

</template>

<script>

export default {

  data: function(){
    return {
      isOpen:{
        start: true,
        cadastre: false,        
        consult : false
      }
    }
  },

  methods: {
    openTab(tabForOpen) {
      
      for(var tab in this.isOpen){
        if(tabForOpen == tab){
          this.isOpen[tab] = true;
        }else{
          this.isOpen[tab] = false;
        }
      }
    }
  }
}
</script>