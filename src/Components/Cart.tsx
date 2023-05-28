import {useDispatch,useSelector} from 'react-redux'
import { Box, Stack,Typography,IconButton } from '@mui/material'
import { ItemPriceActClear } from '../Redux/Action/ItemConfirmPriceAct/ItemPriceAct'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
export default function Cart() {
  let dispatch = useDispatch()
    let allItems = useSelector((state:any)=>state.allItemsPrice)
  return (
    <>
    <center><Box
    sx={{
      marginTop:'100px',
      width:'90vw',
      border:'2px solid red',
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center'
    }}
    >
<Stack
direction='column'
sx={{
  width:'60%',
  height:'70vh',
  border:'2px solid green',
  overflowY:'auto',
  overflowX:'hidden'
}}
>
  {allItems.map((info:any)=>(
    <Stack
    direction='row'
    justifyContent='space-evenly'
    alignItems='center'
    sx={{width:'100%'}}
    key={info.main.id}
    >
    <Box
    component='img'
    src={info.main.img}
    alt={info.main.name}
    sx={{width:'30%',objectFit:'contain'}}
    />
    <Stack direction='column' textAlign='center' width='30%'>
    <Typography sx={{fontWeight:'bold',color:'orange'}}>Name:{info.main.name}</Typography>
    <Typography>Size:Small = {info.smallSize}</Typography>
    <Typography>Size:Medium = {info.mediumSize}</Typography>
    <Typography>Size:Large = {info.largeSize}</Typography>
    </Stack>
    <Typography>Price:{info.mainPrice.toFixed(2)}$</Typography>
    <IconButton 
    onClick={()=>dispatch(ItemPriceActClear(info.main.id))}
    color='error'
    sx={{scale:'1.5',transition:'0.2s','&:hover':{scale:'2'}}}
    >
<DoNotDisturbOnIcon />
    </IconButton>
    <br />
    <br />
    </Stack>
  ))}
</Stack>
<Stack
sx={{
  width:'30%',
  border:'2px solid yellow'
}}
>
</Stack>
    </Box></center>
    </>
  )
}
