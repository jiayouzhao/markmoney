type RecordItem = {
    selectedTags:string[];
    notes:string;
    inout:string;
    amount:string
}

type TagsItem = {
    data:object[];
    get:()=>object[];
    create:(name:string) => void;
    save: (tags:object[]) => void;
}