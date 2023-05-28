type Act = {
    type:string
    addItem:{}
    item:any
}
export let ItemPrice = (state:any[] = [],action:Act) => {
    switch(action.type){
        case 'addItemPrice':return state  = [...state,action.addItem]
        case 'clearAll':return (state = [...state.filter(info=>info.main.id != action.item)])
        default:return state
    }
}