<template>
     <div class="row">
        <div class="col-md-6">
            <button @click='teste("2016-07-20 10:20:30")' type="button" class="btn btn-primary">TESTAR</button>

            <table class="table">
                <thead>
                    <tr>
                        <th>NADA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{dataTeste | dataFormat "DD/MM/YYYY hh:mm:ss"}}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import Moment from 'moment'

Vue.filter('dataFormat', function(value, format){
    return Moment(value).format(format);
});

export default {   
   
    data: function(){
     return { dataTeste: '2016-10-01 10:20:44' }
   },

   methods: {
    teste(date) {
      
        console.log(date);
    }
  }
}
</script>