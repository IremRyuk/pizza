type AcT = {
    type:string
    searchWord:string
    clearSearch:string
}
export let Search = (state:string = '',action:AcT) =>{
    switch (action.type) {
        case 'search':return state = action.searchWord
        case 'clearSearch':return state = action.clearSearch
        default:return state
    }
}