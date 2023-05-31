import {Stack,Button,Typography,Box,Slider, TextField, InputAdornment, IconButton} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import { FilterAct } from '../Redux/Action/FilterAct/FilterAct'
import $ from 'jquery'
import {useEffect} from 'react'
import DataMain from '../Data/pizzaData.json'
import { MainDataAct } from '../Redux/Action/Data/DataAct'
import { InputMui } from '../Styles/mui/Mui'
import ClearIcon from '@mui/icons-material/Clear';
import { SearchAct, SearchActClear } from '../Redux/Action/FilterAct/SearchAct'
export default function Filter() {
  useEffect(()=>{
    $('.priceFilter').hide()
  },[])
  // Redux
  let dispatch = useDispatch()
  let range = useSelector((state:any)=>state.price)
  let search = useSelector((state:any)=>state.searchWord)
  // Pricee Filter
  let priceFilter = () => {
    $('.priceFilter').toggle(200)
  }
  let DataFiltered = DataMain.filter((money:any)=>{return money.price[0]>=range[0] || money.price[2]<=range[1]})
  let filterData = () => {
    dispatch(MainDataAct(DataFiltered))
  }
  return (
    <>
<center>
  <Stack 
  direction='row' 
  onClick={()=>priceFilter()} 
  sx={{
    cursor:'pointer',
    '&:hover':{scale:'1.05'},
    transition:'0.2s',
    width:{sm:'60vw',md:'30vw'},
    borderRadius:'2.4mm',
    display:'flex',
    justifyContent:'space-evenly',
    padding:'0px',
    bgcolor:'#8f8f8f'
    }} 
    mt='100px'>
<Button variant='text' sx={{color:'orange',fontSize:'large',transition:'0.2s'}}>Filter Price</Button>
</Stack></center> 
<center><Box className='priceFilter' width={{xs:'80vw',sm:'50vw',md:'40vw'}} mt={5}>
  <Slider
  min={14}
  max={50}
  value={range}
  sx={{color:'orange'}}
  onChange={(_e:Event,newValue:number|number[])=>{dispatch(FilterAct(newValue))}}
  valueLabelDisplay='auto'
  />
  <Button variant='contained' disableRipple size='large' sx={{bgcolor:'orange','&:hover':{bgcolor:'orange'}}} onClick={()=>filterData()}>Filter</Button>
  <br />
  <br />
  <Typography variant='h6'>Searching From <span style={{color:'black',fontWeight:'bold'}}>{range[0]}$</span> To <span style={{color:'black',fontWeight:'bold'}}>{range[1]}$</span></Typography>
</Box></center>
<br />
<center>
<TextField
sx={InputMui}
value={search}
onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{dispatch(SearchAct(e.target.value))}}
autoComplete='none'
variant='outlined'
placeholder='search...'
InputProps={{
  endAdornment:(
  <InputAdornment 
  position='end'>
    <IconButton disableRipple onClick={()=>dispatch(SearchActClear(''))}>
      {search?<ClearIcon />:''}
    </IconButton>
    </InputAdornment>)
}}
/>
</center>
</>
  )
}
