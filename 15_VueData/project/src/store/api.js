import axios from "axios";

const state = ()=>({
    list:[],
});

const mutations = {
    allList(state, param){
        state.list= param;

    },
};

const actions = {
    fetchList(store){
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fc12fdab8dc9453ebe3d6f72423cca6a').then((response)=> {
            console.log(response.data.articles);
            try {
            store.commit("allList", response.data.articles);
            } catch (error){
                console.log(error);
            } finally {
                console.log("Try Catch Finally telah dijalankan");
            }
        });  
    },
};

export default {
    state,
    mutations,
    actions,
}