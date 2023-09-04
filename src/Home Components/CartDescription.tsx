import { Box, IconButton, Stack, Typography } from '@mui/material'
import {useState} from 'react'
import { CartFonts } from '../Styles/mui/Mui'
import { useDispatch } from 'react-redux'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { ItemPriceActClear } from '../Redux/Action/ItemConfirmPriceAct/ItemPriceAct'
type Main = {
    info:any
}
export default function CartDescription({info}:Main) {
      // React State
  let [_fullPirce,setFullPrice] = useState<number>(0)
  // Redux
  let dispatch = useDispatch()
  return (
    <Stack
    position='relative'
    direction={{xs:'column',sm:'row'}}
    justifyContent='space-between'
    alignItems='center'
    p={2}
    mt={3}
    sx={{width:'95%',boxShadow:'0px 0px 15px 7px silver',borderRadius:'2.4mm'}}
    className='itemsList'
    >
    <Box
    component='img'
    src={info.main.img}
    alt={info.main.name}
    sx={{width:{xs:'45%',sm:"30%"},objectFit:'contain'}}
    />
    <Stack 
    direction='row' 
    sx={{
    width:{xs:'100%',sm:"65%"},
    flexDirection:{xs:'column',sm:'row'},
    justifyContent:{xs:'center',sm:'space-around'},
    alignItems:{xs:'center',sm:'flex-start'},
    marginTop:{xs:'10px',sm:'0px'}
    }}>
    <Stack direction='column' textAlign='center'>
    <Typography sx={CartFonts}>Name:{info.main.name}</Typography>
    <Typography sx={CartFonts}>Size:Small = {info.smallSize}</Typography>
    <Typography sx={CartFonts}>Size:Medium = {info.mediumSize}</Typography>
    <Typography sx={CartFonts}>Size:Large = {info.largeSize}</Typography>
    </Stack>
    <Box sx={{display:{xs:'flex',sm:'none'},width:{xs:'100%'},border:'1px solid silver'}}></Box>
    <Stack direction='column' textAlign='center'>
    <Typography sx={CartFonts}>Price</Typography>
    <Typography sx={CartFonts}>{info.mainPrice.toFixed(2)}$</Typography>
    </Stack>
    <IconButton 
    onClick={()=>{dispatch(ItemPriceActClear(info.main.id)),setFullPrice(currentPrice=>currentPrice-info.mainPrice.toFixed(2))}}
    color='error'
    sx={{position:{xs:'absolute',sm:'static'},top:'2%',right:'5%',scale:'1.5',transition:'0.2s','&:hover':{scale:'2'}}}
    >
<DoNotDisturbOnIcon />
    </IconButton>
    </Stack>
    <br />
    </Stack>
  )
}
