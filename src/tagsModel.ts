
const tagStroageName = "tagsList";

const tags: TagsItem = {
    data:[],
    get(){
        const tagsList = localStorage.getItem(tagStroageName);
        tags.data = tagsList ? JSON.parse(tagsList) : ["衣","食","住","行"];
        return tags.data;
    },
    create(name){
        this.data.push(name);
        this.save(this.data);
    },
    save(tags){
        this.data = tags;
        localStorage.setItem(tagStroageName,JSON.stringify(tags));
    }
}

export default tags;