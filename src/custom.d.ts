type RecordItem = {
    selectedTags:string[];
    notes:string;
    inout:string;
    amount:string
}

type TagsItem = {
    data:string[];
    get:()=>string[];
    create:(name:string) => void;
    save: (tags:string[]) => void;
}