
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
    }
}

export default tags;