import { Box, Button, Stack, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FB from '../Images/facebook.svg'
import IN from '../Images/instagram.svg'
import TW from '../Images/twitter.svg'
import { NavigationBottom } from "../Styles/mui/Mui";

export default function Bottom() {
  return (
    <Box
    width='100vw'
    p={1}
    marginBottom='20px'
    display='flex'
    sx={{flexDirection:{xs:'column',md:'row'},justifyContent:{xs:'center',md:'space-around'}}}
    alignItems='center'
    borderTop='1px solid silver'
    >
<Stack sx={{width:{xs:'80%',md:'40%'}}} height='150px' spacing={2} alignItems='center' direction='column' p={1} m={2}>
<Typography variant='h4' color='primary'>Contacts</Typography>
<Button variant='contained' startIcon={<PhoneIcon />} sx={{width:{xs:'80%',md:'50%'}}} onClick={()=>window.location.href = 'tel:' + 41273875}>Phone Us</Button>
<Button variant='contained' startIcon={<EmailIcon />} sx={{width:{xs:'80%',md:'50%'}}} onClick={()=>window.location.href = 'mailto:pizzaland@gmail.com'}>Mail Us</Button>
</Stack>
<Stack sx={{width:{xs:'80%',md:'40%'}}} height='150px' spacing={2} alignItems='center'  p={1} m={2}>
<Typography variant='h4' color='primary'>Socials</Typography>
<Stack direction='row' spacing={5}>
<Box component='img' sx={NavigationBottom} src={FB} onClick={()=>window.location.href = 'https://www.facebook.com'}/>
<Box component='img' sx={NavigationBottom} src={IN} onClick={()=>window.location.href = 'https://www.instagram.com'}/>
<Box component='img' sx={NavigationBottom} src={TW} onClick={()=>window.location.href = 'https://www.twitter.com'}/>
</Stack>
</Stack>
    </Box>
  )
}
