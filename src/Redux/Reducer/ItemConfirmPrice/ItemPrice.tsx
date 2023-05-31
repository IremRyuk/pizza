type Act = {
    type:string
    addItem:{}
    item:any
    remove:number
}
export let ItemPrice = (state:any[] = [],action:Act) => {
    // let x = state.findIndex(res=>{console.log(res.main.id == 1)})
    switch(action.type){
        case 'addItemPrice':return state  = [...state,action.addItem]
        case 'clearAll':return (state = [...state.filter(info=>info.main.id != action.item)])
        case 'removeAndAdd':return (state =  [...state.filter((info=>info.main.id != action.remove))])
        default:return state
    }
}