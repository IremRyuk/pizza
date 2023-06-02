import {useDispatch,useSelector} from 'react-redux'
import { Box, Stack,Typography,IconButton, Button } from '@mui/material'
import { ItemPriceActClear } from '../Redux/Action/ItemConfirmPriceAct/ItemPriceAct'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import '../Styles/Home/home.css'

export default function Cart() {
  // React State
  let [fullPirce,setFullPrice] = useState<number>(0)
  // React-Router-DOm
  const navigate = useNavigate()
  // Redux
  let dispatch = useDispatch()
    let allItems = useSelector((state:any)=>state.allItemsPrice)
    // Check Price On Every Change(Add In Cart)
    useEffect(()=>{
      allItems.filter((res:any)=>{setFullPrice(e=>e+res.mainPrice)})
        },[])
  return (
    <>
    {allItems.length === 0 &&
    <Box
    sx={{
      position:'absolute',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)',
      display:'flex', 
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center'
    }}
    >
    <Typography
    color='primary'
    sx={{
      fontFamily:`'Roboto Slab', serif`,
      width:'100vw',
      fontSize:{
        xs:"x-large",
        md:'xx-large'
      }
    }}
    className='emptyTitle'
    >Your Cart is Empty, Please Choose Your Food</Typography>
    <br />
    <br />
    <Button 
    disableRipple
    disableTouchRipple
    disableElevation
    onClick={()=>navigate('/')}
    variant='contained' 
    sx={{color:'orange',fontWeight:'bold',borderRadius:'2.4mm',fontSize:'x-large'}}
    >Back To Home Page</Button>
    </Box>
    }
    {allItems.length > 0 && 
    <center><Box
    sx={{
      marginTop:'100px',
      width:'90vw',
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center'
    }}
    >
<Stack
direction='column'
p={2}
sx={{
  width:'60%',
  height:'80vh',
  overflowY:'auto',
  overflowX:'hidden'
}}
border='2px solid orangered'
borderRadius='2.4mm'
>
  {allItems.map((info:any)=>(
    <div key={info.main.id}>
    <Stack
    direction='row'
    justifyContent='space-evenly'
    alignItems='center'
    sx={{width:'100%'}}
    className='itemsList'
    >
    <Box
    component='img'
    src={info.main.img}
    alt={info.main.name}
    sx={{width:'30%',objectFit:'contain'}}
    />
    <Stack direction='row' width='65%' display='flex' justifyContent='space-evenly' alignItems='flex-start'>
    <Stack direction='column' textAlign='center'>
    <Typography sx={{fontWeight:'bold',color:'orange'}}>Name:{info.main.name}</Typography>
    <Typography>Size:Small = {info.smallSize}</Typography>
    <Typography>Size:Medium = {info.mediumSize}</Typography>
    <Typography>Size:Large = {info.largeSize}</Typography>
    </Stack>
    <Stack direction='column' textAlign='center'>
    <Typography sx={{fontWeight:'bold',color:'orange'}}>Price</Typography>
    <Typography>{info.mainPrice.toFixed(2)}$</Typography>
    </Stack>
    <IconButton 
    onClick={()=>{dispatch(ItemPriceActClear(info.main.id)),setFullPrice(currentPrice=>currentPrice-info.mainPrice.toFixed(2))}}
    color='error'
    sx={{scale:'1.5',transition:'0.2s','&:hover':{scale:'2'}}}
    >
<DoNotDisturbOnIcon />
    </IconButton>
    </Stack>
    <br />
    </Stack>
    <p style={{width:'100%',borderTop:'1px solid silver',margin:'25px 0px'}}></p>
    </div>
  ))}
</Stack>
<Stack
direction='column'
width='30%'
borderRadius='2.4mm'
sx={{
  width:'30%',
  border:'2px solid yellow'
}}
bgcolor='#A0A0A0'
>
  <Typography sx={{fontWeight:'bold',color:'orange'}}>Full Price</Typography>
  <Typography sx={{fontWeight:'bold',color:'orangered'}}>{fullPirce.toFixed(2)} $</Typography>
</Stack>
    </Box></center>
    }
    </>
  )
}
