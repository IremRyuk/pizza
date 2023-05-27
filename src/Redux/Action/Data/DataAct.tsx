export let MainDataAct = (changeData:string|number|{}[]) => {
    return {type:'changeData',changeData}
}