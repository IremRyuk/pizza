import Data from '../../../Data/pizzaData.json'
type AcT = {
    type:string
    changeData:string|number|{}[]
}
export let MainData = (state:string|number|{}[] = Data,action:AcT) =>{
    switch (action.type) {
        case 'changeData':return state = action.changeData
        default:return state
    }
}