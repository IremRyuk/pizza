import { Box, Typography,Button } from "@mui/material";

export default function Contacts() {
  return (
                <Box width='60%' height='90%' borderRadius='2.4mm' display='flex' flexDirection='column' justifyContent='center' alignItems='center' bgcolor='#454545'>
<Typography sx={{color:'orange',fontSize:{md:'xx-large'},scale:{xs:'1.5',md:'1'}}}>Mail Us - pizzaland@gmail.com</Typography>
<br />
<Typography sx={{color:'orange',fontSize:{md:'xx-large'},scale:{xs:'1.5',md:'1'}}}>Or</Typography>
<br />
<Button
onClick={()=>window.location.href = 'mailto:pizzaland@gmail.com'} 
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
>Mail US Click Here</Button>
                </Box>
  )
}
