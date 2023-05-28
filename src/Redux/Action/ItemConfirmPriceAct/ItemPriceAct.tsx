export let ItemPriceActAdd = (addItem:{}) => {
    return {type:'addItemPrice',addItem}
}
export let ItemPriceActClear = (item:any) => {
    return {type:'clearAll',item}
}