type AcT = {
    type:string
    changeWidth:number
}
export let WindowSize = (state:number = window.innerWidth,action:AcT) =>{
    switch (action.type) {
        case 'changeWidth':return state = action.changeWidth
        default:return state
    }
}