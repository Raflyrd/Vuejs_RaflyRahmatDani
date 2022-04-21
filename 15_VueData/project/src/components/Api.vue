<template>
    <!-- <div>
        <div v-for="(api, index) in allList" :key="index">
     
                <div> author:{{api.source.id}}</div> <br>
                <div> content: {{api.source.name}}</div> 
        </div>
    </div> -->
    <div class="container">
            <h1>Berita Terkini</h1>
        <div class="row">
        <div class="col-md-4 col-sm-6" v-for="(api, index) in allList" :key="index">
        <router-link :to="'/newslist/id'+index">

  <div class="d-flex justify-content-center container mt-5">
    <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
        <div class="about-product text-center mt-2 md-2"><img :src="api.urlToImage" width="200px">
            <div>
                <h6 class="mt-2">{{api.title}}</h6>
                <h6 class="mt-0 text-black-50">{{api.author}}</h6>
            </div>
        </div>
        <div class="stats mt-2">
        <!-- <div class="d-flex justify-content-between p-price mt-2"><span>{{api.content}}</span></div> -->
            <div class="d-flex justify-content-between p-price mt-2 mt-0 text-black-50"><span>published at:</span><span>{{ api.publishedAt}}</span></div>
            
        </div>
        <button  type="button" class="btn btn-success mt-2 md-2" @click="readMore(index)">Read More</button>
    </div>
</div>
    </router-link>
        </div>
    </div>
</div>    
</template>

<script>
export default {
    name: 'Api',
    computed: {
        allList() {
            return this.$store.state.api.list;
        }

    },
    methods:{
        fetchApi() {
            this.$store.dispatch("api/fetchList");
        },
        readMore(index) {
            this.$router.push({name: "NewsList", param:{id: index}});
        },
    },
    mounted() {
        this.fetchApi();
    },
}
</script>

<style scoped>
.card {
    width: 444px
}

body {
    background: #eee
}
</style>