import { combineReducers } from "redux";
import { WindowSize } from "./Reducer/Navigation/WindowSize";
import { FilterPrice } from "./Reducer/Filter/FilterPrice";
import { CloneData, MainData } from "./Reducer/Data/Data";
import { SaveItems } from "./Reducer/Data/SavedItems";
import { ItemPrice } from "./Reducer/ItemConfirmPrice/ItemPrice";
import { Search } from "./Reducer/Filter/Search";

export const AllReducer = combineReducers({
    windowWidth:WindowSize,
    price:FilterPrice,
    mainData:MainData,
    itemsSave:SaveItems,
    allItemsPrice:ItemPrice,
    searchWord:Search,
    defaultData:CloneData
})