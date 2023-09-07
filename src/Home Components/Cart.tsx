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

      {/* If Box is empty */}
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
      textAlign:'center',
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
    sx={{color:'orange',fontWeight:{xs:'400',sm:'bold'},borderRadius:'2.4mm',fontSize:'x-large'}}
    >Back To Home Page</Button>
    </Box>
    }

    {/* If Item is inside box */}
    {allItems.length > 0 && 
    <center><Box
    sx={{
      marginTop:{xs:'50px',sm:'100px'},
      width:{xs:'95vw',lg:'80vw'},
      display:'flex',
      flexDirection:{xs:'column',lg:'row'},
      justifyContent:'space-between',
      alignItems:{xs:'center',lg:'flex-start'}
    }}
    >
<Stack
direction='column'
p={1}
sx={{
  width:{xs:'100%',lg:'72%'},
  height:{xs:'auto',lg:'80vh'},
  overflowY:'auto',
  overflowX:'hidden'
}}
borderRadius='2.4mm'
>

  {/* Chosen Items */}
  {allItems.map((info:any)=>(
    <div key={info.main.id}>
<CartDescription info={info}/>
    </div>
  ))}
</Stack>


{/* Price */}
<CartOrder price={fullPirce} />
    </Box></center>
    }
    </div>
  )
}
