const URL = 'http://localhost:8000/'

export default async function(setTableData){
    let result = await fetch(URL)
    result = await result.json()
    console.log(result)
    setTableData(result)
}