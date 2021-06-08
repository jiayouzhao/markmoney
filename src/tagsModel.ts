
const tagStroageName = "tagsList";

const tags: TagsItem = {
    data:[],
    get(){
        const tagsList = localStorage.getItem(tagStroageName);
        tags.data = tagsList ? JSON.parse(tagsList) : [
            {id:0,name:"衣"},
            {id:1,name:"食"},
            {id:2,name:"住"},
            {id:3,name:"行"}
        ];
        return tags.data;
    },
    create(name){
        this.data.push({id:this.data.length,name});
        this.save(this.data);
    },
    save(tags){
        this.data = tags;
        localStorage.setItem(tagStroageName,JSON.stringify(tags));
    },
    find(id){
        const index = this.data.findIndex(item=>{
            return item.id === id
        })
        return index
    },
    remove(id){
        const index = this.find(id);
        this.data.splice(index,1);
        this.save(this.data);
        return "success"
    },
    update(tag,name){
        this.data.forEach(item=>{
            if(item.id === tag.id){
                item.name = name
                this.save(this.data)
            }
            
        })
    }
}

export default tags;