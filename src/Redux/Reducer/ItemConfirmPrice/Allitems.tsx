type Act = {
    type:string
    allitems:{}
}
export let AllItems = (state:any[] = [],action:Act) => {
    switch(action.type){
        case 'allItems':return state  = [...state,action.allitems]
        default:return state
    }
}