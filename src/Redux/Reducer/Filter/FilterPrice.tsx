type AcT = {
    type:string
    changePrice:number[]
}
export let FilterPrice = (state:number[] = [14,50],action:AcT) =>{
    switch (action.type) {
        case 'changePrice':return state = action.changePrice
        default:return state
    }
}