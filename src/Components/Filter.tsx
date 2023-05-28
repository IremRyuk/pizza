import {Stack,Button,Typography,Box,Slider} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import { FilterAct } from '../Redux/Action/FilterAct/FilterAct'
import $ from 'jquery'
import {useEffect} from 'react'
import DataMain from '../Data/pizzaData.json'
import { MainDataAct } from '../Redux/Action/Data/DataAct'
export default function Filter() {
  useEffect(()=>{
    $('.priceFilter').hide()
  },[])
  // Redux
  let dispatch = useDispatch()
  let range = useSelector((state:any)=>state.price)
  // Pricee Filter
  let priceFilter = () => {
    $('.priceFilter').toggle(200)
  }
  let DataFiltered = DataMain.filter((money:any)=>{return money.price[0]>=range[0] || money.price[2]<=range[1]})
  console.log(range)
  console.log(DataFiltered)
  let filterData = () => {
    dispatch(MainDataAct(DataFiltered))
  }
  return (
    <>
    <center><Typography mt='100px' sx={{color:'orange',fontSize:{xs:'x-large',sm:'xx-large'}}}>Filter Pizzeria</Typography></center>
<center><Stack direction='row' sx={{ width:'90vw',display:'flex',justifyContent:'space-evenly',padding:'0px',bgcolor:'#8f8f8f'}} mt={2}>
<Button variant='text' sx={{color:'orange',fontSize:'large',transition:'0.2s','&:hover':{scale:'1.1'}}}>Pizza</Button>
<Button variant='text' sx={{color:'orange',fontSize:'large',transition:'0.2s','&:hover':{scale:'1.1'}}}>Sandwich</Button>
<Button variant='text' onClick={()=>priceFilter()} sx={{color:'orange',fontSize:'large',transition:'0.2s','&:hover':{scale:'1.1'}}}>Filter</Button>
</Stack></center>
<center><Box className='priceFilter' width={{xs:'95vw',sm:'50vw',md:'40vw'}} mt={5}>
  <Slider
  min={14}
  max={50}
  value={range}
  onChange={(_e:Event,newValue:number|number[])=>{dispatch(FilterAct(newValue))}}
  valueLabelDisplay='auto'
  />
  <Button variant='contained' size='large' onClick={()=>filterData()}>Filter</Button>
  <br />
  <br />
  <Typography variant='h6'>Searching From <span style={{color:'lime',fontWeight:'bold'}}>{range[0]}$</span> To <span style={{color:'lime',fontWeight:'bold'}}>{range[1]}$</span></Typography>
</Box></center>
</>
  )
}
