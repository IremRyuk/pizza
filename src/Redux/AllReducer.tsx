import { combineReducers } from "redux";
import { WindowSize } from "./Reducer/Navigation/WindowSize";
import { FilterPrice } from "./Reducer/Filter/FilterPrice";
import { MainData } from "./Reducer/Data/Data";
import { SaveItems } from "./Reducer/Data/SavedItems";
import { ItemPrice } from "./Reducer/ItemConfirmPrice/ItemPrice";

export const AllReducer = combineReducers({
    windowWidth:WindowSize,
    price:FilterPrice,
    mainData:MainData,
    itemsSave:SaveItems,
    allItemsPrice:ItemPrice
})