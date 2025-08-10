// asunc alwalys return a promise 


const p = new Promise((resolve,reject) => {
    resolve ("Promise Relove valie!!")    
})

async function getData() {
    return p;
}
const Data = getData()
Data.then((res) => console.log(res));