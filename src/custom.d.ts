type RecordItem = {
    selectedTags:string[];
    notes:string;
    inout:string;
    amount:string;
    createAd:string;
}

type RecordState = {
    recordList:RecordItem[]
}

type TagState = {
    tagsList:argumentItem[],
    indexTag:argumentItem |undefined
}

type argumentItem={
    id:number;
    name:string;
}

type TagsItem = {
    data:argumentItem[];
    get:()=>argumentItem[];
    create:(name:string) => void;
    save: (tags:argumentItem[]) => void;
    remove:(id:number)=>"success";
    update:(tag:argumentItem,name:string)=>void;
    find:(id:number)=>number
}