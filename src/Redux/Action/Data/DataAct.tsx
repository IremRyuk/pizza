export let MainDataAct = (changeData:string|number|{}[]) => {
    return {type:'changeData',changeData}
}
export let CloneDataAct = (newData:string|number|{}[]) => {
    return {type:'getClone',newData}
}