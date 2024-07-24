const app = Vue.createApp({
    data(){
        return {
            firstName:'Nitesh',
            lastName:"Khanduja",
            picture:"https://picsum.photos/200/300",
            gender:"male"
        }
    },
    methods:{
        getUser(){
            this.firstName='Nk',
            this.lastName="kkr",
            this.picture="https://picsum.photos/200/300",
            this.gender="male"
        }
    }
})

app.mount('#app')