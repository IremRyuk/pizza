import '../Styles/Nav/nav.css'
import { AppBar, Toolbar,Typography,Button, Stack,Drawer,Box, Badge } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { WindowSizeAct } from "../Redux/Action/Navigation/WindowSizeAct";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'
import $ from 'jquery'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TitlePizza, TitlePizzaNavigations } from '../Styles/Nav/Navigation';

export default function Nav() {
    let [isOpen,setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    // Redux
    const dispatch = useDispatch()
    const windowWidth = useSelector((state:any)=>state.windowWidth)
    let allItems = useSelector((state:any)=>state.allItemsPrice)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            let size = window.innerWidth
            dispatch(WindowSizeAct(size))
        })
        window.addEventListener('scroll',()=>{
                if(window.scrollY>0){
                    $('.nav').css({backdropFilter:'blur(5px'})
                }
        })
    })
  return (
    <AppBar 
    className='nav'
    sx={{
position:'fixed',
top:'0%',
left:'0%',
bgcolor:'transparent',
boxShadow:'none',
padding:'0px',
margin:'0px',
    }}
    >
        <Toolbar>
{/* Header */}
<Typography sx={{flexGrow:1,paddingLeft:{md:'5%',lg:'15%'}}}>
    <Button 
    onClick={()=>navigate('/')} 
    variant='text' 
    disableElevation 
    disableTouchRipple
    sx={TitlePizza}
    >PizzaLand</Button>
</Typography>
{/* Navigation Links */}
<Stack direction='row' pr={{md:'5%',lg:'15%'}} spacing={2} display={windowWidth>900?'block':'none'}>
<Button variant="text" sx={TitlePizzaNavigations} onClick={()=>navigate('/')} disableElevation disableTouchRipple>Menu</Button>
<Button variant="text" sx={TitlePizzaNavigations} onClick={()=>navigate('/contacts')} disableElevation disableTouchRipple>Contact</Button>
<Badge 
badgeContent={allItems.length} 
onClick={()=>navigate('/cart')}  
color='primary' 
sx={{
    bgcolor:'#007bff',
    borderRadius:'2.4mm',
    padding:'5px 20px',
    cursor:'pointer',
    transition:'0.2s',
    '&:hover':{scale:'1.2'}}}>
    <ShoppingCartIcon sx={{color:'orange',fontSize:'x-large'}} />
</Badge>
</Stack>
{windowWidth <= 900 && 
<>  
<IconButton onClick={()=>setIsOpen(e=>!e)} disableTouchRipple disableRipple sx={{'&:focus':{outline:'none'}}}>
    <Menu fontSize="large" sx={{color:'orange'}}/>
</IconButton>
<Drawer
open={isOpen}
anchor="right"
onClose={()=>setIsOpen(e=>!e)}
>
<Box
width='200px'
>
    <center><Typography variant="h4" sx={{color:'orange'}} mt={1}>Category</Typography></center>
    <br />
{/* Navigation Links */}
<Stack direction='column' mt={2} spacing={2}>
<Button variant="text" onClick={()=>navigate('/')} disableElevation disableTouchRipple sx={{color:'orange',fontSize:'x-large',padding:'0px'}}>Menu</Button>
<Button variant="text" onClick={()=>navigate('/contacts')} disableElevation disableTouchRipple sx={{color:'orange',fontSize:'x-large',padding:'0px'}}>Contact</Button>
<br />
<br />
<Button 
startIcon={<ShoppingCartIcon />}
onClick={()=>navigate('/cart')} 
disableElevation 
disableTouchRipple 
variant="contained" 
sx={{color:'orange',fontSize:'large'}}
>
    Cart:{allItems.length}
</Button>
</Stack>
</Box>
</Drawer>
</>}
        </Toolbar>
    </AppBar>
  )
}
