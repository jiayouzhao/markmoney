
export default {
    state:()=>(
        {
            recordList:JSON.parse(localStorage.getItem("recordList") || `[]`) 
        }
    ),
    mutations:{
        saveRecord(state:RecordState,record:RecordItem){
            state.recordList.push(record);
            localStorage.setItem('recordList',JSON.stringify(state.recordList))
        }
    }
}

 