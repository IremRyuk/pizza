import { Button, Stack, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
type Price = {
    price:number
}
export default function CartOrder({price}:Price) {
  return (
    <>
<Stack
display='flex'
borderRadius='2.4mm'
alignItems='center'
justifyContent='space-evenly'
p={1}
mt={4}
mb={2}
sx={{
  flexDirection:{xs:'column',sm:'row',lg:'column'},
  width:{xs:'100%',sm:'95%',lg:'25%'},
  border:'2px solid orange'
}}
>
  <Typography sx={{fontSize:{xs:'22px',sm:'25px',md:'27px'},fontWeight:'bold',color:'orange'}}>Full Price</Typography>
  <br />
  <Typography sx={{fontSize:{xs:'25px',sm:'27px',md:'29px'},fontWeight:'bold',color:'orangered'}}>{price.toFixed(2)} $</Typography>
  <br />
  <Typography sx={{fontSize:{xs:'22px',sm:'25px',md:'27px'},fontWeight:'bold',color:'orange'}}>All Done?</Typography>
  <Button 
  onClick={()=>window.location.href = 'tel:' + 41273875}
  startIcon={<PhoneIcon sx={{color:'orange'}} />} 
   variant='contained' 
   sx={{
    width:'fit-content',
    color:'orange',
    fontWeight:'bold',
    transition:'0.2s',
    marginTop:{sm:'0px',lg:'10px'},
    '&:hover':{scale:'1.05'}
    }}
    >Order Food</Button>
</Stack>
</>
  )
}
