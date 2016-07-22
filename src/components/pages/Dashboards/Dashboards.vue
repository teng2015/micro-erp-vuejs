<template>
  <!-- BEGIN BREADCRUMBS -->
    <div class="breadcrumbs">        
        <ol class="breadcrumb">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li class="active">Informações</li>            
        </ol>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="col-md-6">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-blue-sharp">
                            <i class="icon-speech font-green-sharp"></i>
                            <span class="caption-subject bold uppercase"> A receber</span>
                            <span class="caption-helper">Hoje</span>
                        </div>
                        <div class="actions">
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-pencil"></i> Editar </a>
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-plus"></i> Adicionar </a>                        
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="scroller" style="height: 10%" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
                           <h2 class="font-blue-sharp">R$: 3.500,00</h2>
                        </div>
                    </div>
                </div>
                <!-- END Portlet PORTLET-->
            </div>

            <div class="col-md-6">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-red-sunglo">
                            <i class="icon-speech font-red-sunglo"></i>
                            <span class="caption-subject bold uppercase"> A pagar</span>
                            <span class="caption-helper">Hoje</span>
                        </div>
                        <div class="actions">
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-pencil"></i> Editar </a>
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-plus"></i> Adicionar </a>                        
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="scroller" style="height: 10%" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
                           <h2 class="font-red-sunglo">R$: 2.500,00</h2>
                        </div>
                    </div>
                </div>
                <!-- END Portlet PORTLET-->
            </div>

            <div class="col-md-6">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-blue-sharp">
                            <i class="icon-speech font-green-sharp"></i>
                            <span class="caption-subject bold uppercase"> A receber</span>
                            <span class="caption-helper">Em atraso</span>
                        </div>
                        <div class="actions">
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-pencil"></i> Editar </a>
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-plus"></i> Adicionar </a>                        
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="scroller" style="height: 10%" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
                           <h2 class="font-blue-sharp">R$: 3.500,00</h2>
                        </div>
                    </div>
                </div>
                <!-- END Portlet PORTLET-->
            </div>

            <div class="col-md-6">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-red-sunglo">
                            <i class="icon-speech font-red-sunglo"></i>
                            <span class="caption-subject bold uppercase"> A pagar</span>
                            <span class="caption-helper">Em atraso</span>
                        </div>
                        <div class="actions">
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-pencil"></i> Editar </a>
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-plus"></i> Adicionar </a>                        
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="scroller" style="height: 10%" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
                           <h2 class="font-red-sunglo">R$: 2.500,00</h2>
                        </div>
                    </div>
                </div>
                <!-- END Portlet PORTLET-->
            </div>            
        </div>

        <div class="col-md-6">
            <div class="col-md-12">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-blue-sharp">
                            <i class="icon-speech font-green-sharp"></i>
                            <span class="caption-subject bold uppercase"> A fazer</span>
                            <span class="caption-helper">Hoje</span>
                        </div>
                        <div class="actions">                            
                            <a href="javascript:;" class="btn btn-circle btn-default btn-sm">
                                <i class="fa fa-plus"></i> Adicionar </a>                        
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="scroller" style="height: 325px; overflow: auto;">
                           <table class="table table-striped table-fixed">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th class="col-md-2">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Limpar variáveis variáveis variáveis variáveis variáveis </td>
                                        <td>
                                        	<a @click=''><i class="fa fa-trash font-red-sunglo" aria-hidden="true"></i></a>&nbsp;
                                        	<a @click=''><i class="fa fa-check font-green-sharp" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                </tbody>                               
                           </table>
                        </div>
                    </div>
                </div>
                <!-- END Portlet PORTLET-->
            </div>       
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <vue-chart
                chart-type="BarChart"
                :columns="columns"
                :rows="rows"
                :options="options"
            ></vue-chart>
        </div>
    </div>

  
</template>

<script>
    
export default {
    data: function () {
        return {
            columns: [{
                'type': 'string',
                'label': 'Ano',                
            }, {
                'type': 'number',
                'label': 'Valor'            
            }],
            rows: [
                ['Janeiro', 1000],
                ['Fevereiro', 1170],
                ['Março', 660],
                ['Abril', 1030],
                ['Maio', 2500],
                ['Junho', 1030],
                ['Julho', 0],
                ['Agosto', 1030],
                ['Setembro', 700],
                ['Outubro', 769],
                ['Novembro', 1030],
                ['Dezembro', 500]
            ],
            options: {
                title: 'Gráficos de venda',                
                hAxis: {
                    title: 'Valor',
                    minValue: '2004',
                    maxValue: '2007'                   
                },
                vAxis: {
                    title: 'Mês',
                    minValue: 0,
                    maxValue: 10200
                },
                bars: 'vertical',
                width: 900,
                height: 600,                
                curveType: 'function'
            }           
        }
    }
}    
</script>