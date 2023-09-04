import {useEffect} from 'react'
import Bottom from "../Home Components/Bottom.tsx";
import Filter from "../Home Components/Filter.tsx";
import MainData from "../Home Components/MainData.tsx";
import '../Styles/Home/home.css'
import { useDispatch } from 'react-redux';
import { CloneDataAct } from '../Redux/Action/Data/DataAct.tsx';
import Data from '../Data/pizzaData.json'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(CloneDataAct(Data))
  },[]) 
  return (
    <div className="home">
<Filter />
<MainData />
<Bottom />
    </div>
  )
}
