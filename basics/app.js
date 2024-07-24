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
       async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
             

            this.firstName=results[0].first,
            this.lastName=results[0].last,
            this.picture=results[0].picture.large,
            this.gender=results[0].gender
        }
    }
})

app.mount('#app')