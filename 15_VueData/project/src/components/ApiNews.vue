<template>
    <div>
        <img :src="allList[index].urlToImage" alt="" width="50%"> 
        <h1 class="mt-4">{{allList[index].title}}</h1>

        <div class="identity">
            <h6 class="author mt-2"><strong>{{allList[index].author}}</strong></h6>
            <h6 class="time"><strong>{{allList[index].publishedAt}}</strong></h6>
        </div>

        <div class="description mt-4">
            <p>{{allList[index].content}}</p>
            <p>Lanjutkan Baca ke <a :href="allList[index].url">Sini</a></p>
            <router-link to="/news" class="tombolKembali"><button>kembali</button></router-link>
        </div>

    </div>  
    
</template>

<script>
export default {
    name: 'Api',
    computed: {
        allList(){
            return this.$store.state.api.list;
        },
        index(){
            return this.$route.params.id.slice(2)

        }
    },
    methods:{
    fetchApi(){
        this.$store.dispatch("api/fetchList");
        }
    },
    mounted(){
        this.fetchApi();
    },
}
</script>

<style scoped>

</style>