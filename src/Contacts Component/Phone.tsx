import { Box,Typography,Button } from "@mui/material";

export default function Contacts() {
  return (
                <Box width='60%' height='90%' borderRadius='2.4mm' display='flex' flexDirection='column' justifyContent='center' alignItems='center' bgcolor='#454545'>
<Typography sx={{color:'orange',fontSize:{md:'xx-large'},scale:{xs:'1.5',md:'1'}}}>Call Us - 41273875</Typography>
<br />
<Typography sx={{color:'orange',fontSize:{md:'xx-large'},scale:{xs:'1.5',md:'1'}}}>Or</Typography>
<br />
<Button
onClick={()=>window.location.href = 'tel:' + 41273875} 
variant='contained'
sx={{
    bgcolor:'black',
    color:'orange',
    fontWeight:'bold',
    fontSize:'xx-large',
    '&:hover':{
        bgcolor:'black'
    },
    borderRadius:'2.4mm'
}}
>Call US Click Here</Button>
                </Box>

  )
}
