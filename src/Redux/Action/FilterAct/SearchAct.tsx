export let SearchAct = (searchWord:string) => {
    return {type:'search',searchWord}
}
export let SearchActClear = (clearSearch:string) => {
    return {type:'clearSearch',clearSearch}
}