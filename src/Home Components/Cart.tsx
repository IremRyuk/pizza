import {useSelector} from 'react-redux'
import { Box, Stack,Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import '../Styles/Home/home.css'
import CartOrder from './CartOrder';
import CartDescription from './CartDescription';

export default function Cart() {
  document.title = 'Pizza Land'
  // React State
  let [fullPirce,setFullPrice] = useState<number>(0)
  // React-Router-DOm
  const navigate = useNavigate()
  // Redux
    let allItems = useSelector((state:any)=>state.allItemsPrice)
    // Check Price On Every Change(Add In Cart)
    useEffect(()=>{
      allItems.filter((res:any)=>{setFullPrice(e=>e+res.mainPrice)})
        },[])
  return (
    <div className='home'>
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
      width:'95vw',
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
      width:{xs:'95vw',md:'80vw'},
      display:'flex',
      flexDirection:{xs:'column',md:'row'},
      justifyContent:'space-between',
      alignItems:'flex-start'
    }}
    >
<Stack
direction='column'
p={1}
sx={{
  width:{xs:'100%',md:'72%'},
  height:{xs:'auto',md:'80vh'},
  overflowY:'auto',
  overflowX:'hidden'
}}
borderRadius='2.4mm'
>
  {allItems.map((info:any)=>(
    <div key={info.main.id}>
<CartDescription info={info}/>
    <p style={{width:'100%',margin:'25px 0px'}}></p>
    </div>
  ))}
</Stack>
<CartOrder price={fullPirce}/>
    </Box></center>
    }
    </div>
  )
}
