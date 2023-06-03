import { Button, Stack, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
type Price = {
    price:number
}
export default function CartOrder({price}:Price) {
  return (
<Stack
direction='column'
borderRadius='2.4mm'
p={1}
sx={{
  width:{xs:'100%',md:'25%'},
  marginTop:{xs:"20px",md:"0px"},
  marginBottom:"20px",
  border:'2px solid orange'
}}
>
  <Typography variant='h5' sx={{fontWeight:'bold',color:'orange'}}>Full Price</Typography>
  <br />
  <Typography variant='h4' sx={{fontWeight:'bold',color:'orangered'}}>{price.toFixed(2)} $</Typography>
  <br />
  <Typography variant='h5' sx={{fontWeight:'bold',color:'orange'}}>All Done?</Typography>
  <center>
  <Button 
  onClick={()=>window.location.href = 'tel:' + 41273875}
  startIcon={<PhoneIcon sx={{color:'orange'}} />} 
   variant='contained' 
   sx={{
    width:{xs:'60%',md:'100%'},
    marginTop:'20px',
    color:'orange',
    fontWeight:'bold',
    transition:'0.2s',
    '&:hover':{scale:'1.05'}
    }}
    >Order Food</Button>
    </center>
</Stack>
  )
}
