import { useParams } from "react-router-dom"
import {Box,Button,IconButton,Stack, Typography} from '@mui/material'
import Data from '../Data/pizzaData.json'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconSize } from "../Styles/mui/Mui";
import '../Styles/Home/home.css'
import {useState,useEffect}from 'react'
import { useDispatch } from "react-redux";
import { ItemPriceActAdd } from "../Redux/Action/ItemConfirmPriceAct/ItemPriceAct";

export default function Items() {
    // Redux
    let dispatch = useDispatch()

    // usState
    const [mainPrice,setMainPrice] = useState<number>(0)
    const [smallSize,setSmallSize] = useState<number>(0)
    const [mediumSize,setMediumSize] = useState<number>(0)
    const [largeSize,setLargeSize] = useState<number>(0)
    let [arr,setArr] = useState<any[]>([])

    // Get Id From food/:Id
    let {Id} = useParams()
    let res = Data.filter((info:any)=>{return info.id == Id})
    const main = res[0]

    // add item
let addPrice = (price:number) => {
    setMainPrice(mainPrice + price)
    setSmallSize(smallSize + 1)
    setArr([Id,parseInt(mainPrice.toFixed(2)),smallSize,mediumSize,largeSize])
}
//    remove item
let removePrice = (price:number) =>{
    setMainPrice(mainPrice - price)
    setSmallSize(smallSize - 1)
    setArr([Id,parseInt(mainPrice.toFixed(2)),smallSize,mediumSize,largeSize])
}
// Look After Price
useEffect(()=>{
    setArr([Id,parseInt(mainPrice.toFixed(2)),smallSize,mediumSize,largeSize])
},[mainPrice])

// add item in store(Redux)
let add = () => {
    dispatch(ItemPriceActAdd(arr))
}
  return (
    <>
    <center><Box
    sx={{
        width:'95vw',
        marginTop:'100px',
        display:'flex',
        flexDirection:{xs:'column',lg:'row'},
        justifyContent:{xs:'center',lg:'space-evenly'},
        alignItems:{xs:'center',lg:'flex-start'},
    }}
    >
        <Box
        component='img'
        src={main.img}
        alt={main.name}
        sx={{
            width:{xs:'70%',sm:'40%',md:'40%',lg:'20%'},
            objectFit:'contain',
        }}
        />
        <Stack
        direction='column'
        sx={{
            textAlign:{
                md:'center',
                lg:'left',
            }
        }}
        mt={2}
        spacing={2}
        >
<Typography variant='h5'><span style={{fontWeight:'bold'}}>Name</span>:{main.name}</Typography>
<Typography variant='h5'><span style={{fontWeight:'bold'}}>Description</span>:{main.description}</Typography>


<br />
<center><Typography variant="h4">Choose Price</Typography></center>
<br />

<Stack direction='column' justifyContent='space-around' alignItems='center'>

    <Stack direction='row'>
    <Typography sx={IconSize}>Sizes: {main.sizes[0]}  | </Typography>
    <IconButton disableRipple onClick={()=>{removePrice(main.price[0]),setSmallSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSize} className="redbtn" />
    </IconButton>
    <Typography sx={IconSize}>{main.price[0]} $</Typography>
    <IconButton disableRipple sx={IconSize} onClick={()=>{addPrice(main.price[0])}}>
        <AddIcon className="greenBtn" sx={IconSize}/>
    </IconButton>
    </Stack>

     <Stack direction='row'>
    <Typography sx={IconSize}>Sizes: {main.sizes[1]}  | </Typography>
    <IconButton disableRipple onClick={()=>{removePrice(main.price[1]),setMediumSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSize} className="redbtn" />
    </IconButton>
    <Typography sx={IconSize}>{main.price[1]} $</Typography>
    <IconButton disableRipple sx={IconSize} onClick={()=>{addPrice(main.price[1]),setMediumSize(size=>size + 1)}}>
        <AddIcon className="greenBtn" sx={IconSize}/>
    </IconButton>
    </Stack>

    <Stack direction='row'>
    <Typography sx={IconSize}>Sizes: {main.sizes[2]}  | </Typography>
    <IconButton disableRipple onClick={()=>{removePrice(main.price[2]),setLargeSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSize} className="redbtn" />
    </IconButton>
    <Typography sx={IconSize}>{main.price[2]} $</Typography>
    <IconButton disableRipple sx={IconSize} onClick={()=>{addPrice(main.price[2]),setLargeSize(size=>size + 1)}}>
        <AddIcon className="greenBtn" sx={IconSize} />
    </IconButton>
    </Stack>
            </Stack>
        </Stack>
    </Box>
</center>
<br />
<br />
<br />
<br />
<p style={{width:'100vw',borderTop:'1px solid black'}}></p>
<br />
    <center>
    <Box width='90vw'>

    <Typography sx={{fontSize:'xx-large',fontWeight:'bold'}}>Full Price: {mainPrice.toFixed(2)}<span style={{color:'green'}}>$</span></Typography>
    <br />
    <br />
    <Button 
    onClick={()=>add()} 
    variant='contained'
    sx={{padding:'10px 50px'}}
    >
    Confirm</Button>
    </Box>
    </center>
    </>
  )
}
