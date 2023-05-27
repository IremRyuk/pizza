type Act = {
    type:string
    addItem:any[]
}
export let ItemPrice = (state:any[] = [],action:Act) => {
    switch(action.type){
        case 'addItemPrice':return state  = [...state,action.addItem]
        default:return state
    }
}