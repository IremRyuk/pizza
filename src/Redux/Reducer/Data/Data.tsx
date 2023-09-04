import Data from '../../../Data/pizzaData.json'
type AcT = {
    type:string
    changeData:string|number|{}[]
    newData:null
}
export let MainData = (state:string|number|{}[] = Data,action:AcT) =>{
    switch (action.type) {
        case 'changeData':return state = action.changeData
        default:return state
    }
}
export const CloneData = (state:null=null,action:AcT) => {
switch(action.type){
case 'getClone':return state = action.newData
default:return state
}
}