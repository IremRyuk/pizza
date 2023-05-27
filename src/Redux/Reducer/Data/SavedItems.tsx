type AcT = {
    type:string
    itemsSave:string|number|{}
}
export let SaveItems = (state:any = [],action:AcT) =>{
    switch (action.type) {
        case 'changeSave':return state = [...state,action.itemsSave]
        default:return state
    }
}