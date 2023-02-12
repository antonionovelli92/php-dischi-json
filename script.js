const { createApp } = Vue;
const apiUrl = 'http://localhost:8888/php-dischi-json/api/discs/discs.php/'

createApp({
    data() {
        return {
            discs:[]
        }
    },
    methods: {
        fetchApi(endpoint, target) {
              axios.get(endpoint).then(res => { this[target]= res.data });
        }
    },
    created(){
      this.fetchApi(apiUrl, 'discs');
    }
}).mount('#app')