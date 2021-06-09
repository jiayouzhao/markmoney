import Vue from 'vue'
import Vuex from 'vuex'
import recordsList from "@/store/modules/recordList";
import tagsList from "@/store/modules/tagsList";

Vue.use(Vuex)

export default new Vuex.Store({
  /* state: {
      recordList:JSON.parse(localStorage.getItem("recordList") || `[]`) 
  },
  mutations: {
      
  } */
  modules:{
      recordsList,
      tagsList
  }
})
