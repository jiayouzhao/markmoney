import dayjs from "dayjs"

export default {
    state:()=>(
        {
            recordList:JSON.parse(localStorage.getItem("recordList") || `[]`) 
        }
    ),
    mutations:{
        saveRecord(state:RecordState,record:RecordItem){
            const copyRecord = JSON.parse(JSON.stringify(record))
            copyRecord.createAd = dayjs(new Date()).format();
            state.recordList.push(copyRecord);
            localStorage.setItem('recordList',JSON.stringify(state.recordList))
        }
    }
}

 