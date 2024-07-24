const app = Vue.createApp({

    template:'<h1>HEllo {{firstName}}</h1>',
    
    data(){
        return {
            firstName:'Nitesh'
        }
    }
})

app.mount('#app')