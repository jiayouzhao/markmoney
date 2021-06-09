import store from "@/store/index"

export default {
    state:()=>(
        {
            tagsList:undefined,
            indexTag:undefined
        }
    ),
    mutations:{
        init(state:TagState){
            if(localStorage.getItem("tagsList")){
                state.tagsList = JSON.parse( localStorage.getItem("tagsList")as string)
            } else {
                state.tagsList = [
                {id:0,name:"衣"},
                {id:1,name:"食"},
                {id:2,name:"住"},
                {id:3,name:"行"}]
            }
        },
        create(state:TagState,name:string){
            if(name === null){
                return 
            }else if(name.length === 0){
                return alert("标签名不能为空")
            }
            for(let i=0;i<state.tagsList.length;i++){
                if(state.tagsList[i].name === name){
                    return alert("标签名重复");
                }
            }
            
            
            state.tagsList.push({id:state.tagsList.length,name})
            store.commit('save',state.tagsList)
        },
        get(state:TagState,id:string){
            state.indexTag = state.tagsList.find(item=>{
                return item.id.toString() === id
            })
        },
        save(state:TagState,tags:argumentItem[]){
            state.tagsList = tags;
            localStorage.setItem('tagsList',JSON.stringify(tags))
        },
        remove(state:TagState,id:number){
            const index = state.tagsList.findIndex(item=>{
                return item.id === id
            })
            state.tagsList.splice(index,1);
            store.commit("save",state.tagsList);
            return "success"
        },
        update(state:TagState,payload:{tag:argumentItem,name:string}){
            
            state.tagsList.forEach(item=>{
                //console.log(payload.tag.id);
                if(item.id === payload.tag.id){
                    item.name = payload.name
                    store.commit('save',state.tagsList)
                }
            })
        }
    },
    actions:{
        getAction(context:{commit:any},id:string){
            return new Promise((resolve,reject)=>{
                context.commit("get",id)
                resolve("success")

            })
        },
        removeAction(context:{commit:any},id:number){
            return new Promise((resolve,reject)=>{
                context.commit('remove',id)
                resolve('success')
            })
            
        }
    }
}

 