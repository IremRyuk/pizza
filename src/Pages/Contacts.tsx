import { Box, Stack, Typography,Button } from "@mui/material";
import BG from '../Images/contacts.png'
import Phone from '../Contacts Component/Phone'
import Mail from '../Contacts Component/Mail'
import Map from '../Contacts Component/Map'
import $ from 'jquery'
import { ContactBox, ContactBtns } from "../Styles/mui/Mui";
import {useEffect} from 'react'

export default function Contacts() {
    useEffect(()=>{
        $(".phone").show(600)
        $(".mail").hide(500)
        $(".map").hide(500)
    },[])
    const phone = () =>{
        $(".phone").show(600)
        $(".mail").hide(500)
        $(".map").hide(500)
    }
    const mail = () =>{
        $(".phone").hide(500)
        $(".mail").show(600)
        $(".map").hide(500)
    }
    const map = () =>{
        $(".phone").hide(500)
        $(".mail").hide(500)
        $(".map").show(600)
    }
  return (
    <Stack
    mt='150px'
    mb='100px'
    sx={{
     width:'100vw',
     transition:'0.2s'
    }}
    direction='column'
    >
        {/* About Us */}
        <Stack direction='row' sx={{width:'100vw',display:'flex',justifyContent:'space-around',alignItems:'center',bgcolor:'gray',height:{xs:'fit-content',md:'60vh'}}}>
            <Typography sx={{width:{xs:'90%',md:'45%',lg:'30%'},fontFamily:`'Lobster', cursive`,color:'orange',fontSize:{xs:'large',md:'x-large'}}}>Pizzaland was a chain of pizza restaurants owned by Associated Newspapers and then by United Biscuits. In the early 1990s, Pizza Hut and Pizzaland were regarded as the largest pizza eateries in Britain; UK business ceased in 1996. International branches continue to operate.</Typography>
            <Box component='img' src={BG} sx={{display:{xs:'none',md:'flex'},width:'30%',objectFit:'contain'}}/>
        </Stack>
        <center>
            {/* Contacts */}
        <Stack direction='row' width='100vw' mt={10}>
            <Box 
            bgcolor='#DDDDDD' 
            width='100%' 
            sx={{
                display:'flex',
                flexDirection:{xs:'column',md:'row'},
                justifyContent:'space-between',
                alignItems:'center',
                padding:{xs:'50px 0px',md:'0px 50px'},
                height:{xs:'90vh',md:'60vh'}
                }}>
                <Stack sx={{width:{xs:'90%',md:'20%'},display:'flex',flexDirection:{xs:'row',md:'column'},justifyContent:{xs:'space-around',md:'auto'}}}>
<Button variant='contained' onClick={()=>phone()} sx={ContactBtns}>Call Us</Button>
<Button variant='contained' onClick={()=>mail()} sx={ContactBtns}>Mail Us</Button>
<Button variant='contained' onClick={()=>map()} sx={ContactBtns}>Map</Button>
                </Stack>
                <Box className='phone' sx={ContactBox}><Phone /></Box>
                <Box className='mail' sx={ContactBox}><Mail /></Box>
                <Box className='map' sx={ContactBox}><Map /></Box>
            </Box>
        </Stack>
        </center>
    </Stack>
  )
}
