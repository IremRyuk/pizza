import { useParams } from "react-router-dom"
import {Box,Button,IconButton,Snackbar,Stack, Typography} from '@mui/material'
import Data from '../Data/pizzaData.json'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconSizeMini,IconSize, SmallSizeBtn, IconSizeMiniBtn, SmallSizeList } from "../Styles/mui/Mui";
import '../Styles/Home/home.css'
import {useState,useEffect}from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ItemPriceActAdd, ItemPriceActRemoveAndAdd } from "../Redux/Action/ItemConfirmPriceAct/ItemPriceAct";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from "react";

// SnackBar
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Items() {
    // Redux
    let dispatch = useDispatch()
    let cartStore = useSelector((state:any)=>state.allItemsPrice)

    // useState
    let[checkBox,setcheckBox] = useState<boolean>(false)
    const [mainPrice,setMainPrice] = useState<number>(0)
    const [smallSize,setSmallSize] = useState<number>(0)
    const [mediumSize,setMediumSize] = useState<number>(0)
    const [largeSize,setLargeSize] = useState<number>(0)
    let [obj,setObj] = useState<{}>({})

    // SnackBar State
    const [open, setOpen] = useState(false);
      const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    // Get Id From food/:Id
    let {Id} = useParams()
    let res = Data.filter((info:any)=>{return info.id == Id})
    const main = res[0]

    // Change Document Title To Food name
document.title = main.name

    // add item
let addPrice = (price:number) => {
    setMainPrice(mainPrice + price)
    setObj({main,mainPrice,smallSize,mediumSize,largeSize})
}
    // remove item
let removePrice = (price:number) =>{
    setMainPrice(mainPrice - price)
    setObj({main,mainPrice,smallSize,mediumSize,largeSize})
}
    // Look After Price And Button 
useEffect(()=>{
            setObj({main,mainPrice,smallSize,mediumSize,largeSize})
            // Check Values
            if(mainPrice<=0 || smallSize<0 || mediumSize<0 || largeSize<0 ){
                setcheckBox(true)
                return
            }
            else if(smallSize===0 && mediumSize===0 && largeSize===0 ){
                setcheckBox(true)
            }
            else{
                setcheckBox(false)
            }
},[mainPrice])

    // add item in store(Redux)
let add = () => {
    // Check if Redux Data includes 'main.id' so remove it and replace with new one
    if(cartStore.some((res:any)=>res.main.id == main.id)){
        dispatch(ItemPriceActRemoveAndAdd(main.id))
        dispatch(ItemPriceActAdd(obj))
        setOpen(true)
    }else{
        dispatch(ItemPriceActAdd(obj))
        setOpen(true)
    }
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

<Stack direction='column' justifyContent='space-around' alignItems='center' 
sx={{
    display:{xs:'none',sm:'flex'}
}}>

    <Stack direction='row'>
    <Typography sx={IconSize}>Sizes: {main.sizes[0]}  | </Typography>
    <IconButton disabled={checkBox} disableRipple onClick={()=>{removePrice(main.price[0]),setSmallSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSize} className="redbtn" />
    </IconButton>
    <Typography sx={IconSize}>{main.price[0]} $</Typography>
    <IconButton disableRipple sx={IconSize} onClick={()=>{addPrice(main.price[0]),setSmallSize(smallSize + 1)}}>
        <AddIcon className="greenBtn" sx={IconSize}/>
    </IconButton>
    <Typography sx={IconSize}>| {smallSize}</Typography>
    </Stack>

     <Stack direction='row'>
    <Typography sx={IconSize}>Sizes: {main.sizes[1]}  | </Typography>
    <IconButton disabled={checkBox} disableRipple onClick={()=>{removePrice(main.price[1]),setMediumSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSize} className="redbtn" />
    </IconButton>
    <Typography sx={IconSize}>{main.price[1]} $</Typography>
    <IconButton disableRipple sx={IconSize} onClick={()=>{addPrice(main.price[1]),setMediumSize(size=>size + 1)}}>
        <AddIcon className="greenBtn" sx={IconSize}/>
    </IconButton>
    <Typography sx={IconSize}>| {mediumSize}</Typography>
    </Stack>

    <Stack direction='row'>
    <Typography sx={IconSize}>Sizes: {main.sizes[2]}  | </Typography>
    <IconButton disabled={checkBox} disableRipple onClick={()=>{removePrice(main.price[2]),setLargeSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSize} className="redbtn" />
    </IconButton>
    <Typography sx={IconSize}>{main.price[2]} $</Typography>
    <IconButton disableRipple sx={IconSize} onClick={()=>{addPrice(main.price[2]),setLargeSize(size=>size + 1)}}>
        <AddIcon className="greenBtn" sx={IconSize} />
    </IconButton>
    <Typography sx={IconSize} id='largeColor'>| {largeSize}</Typography>
    </Stack>
    </Stack>
            </Stack>
            {/* Lower Than 600 */}
<Stack direction='column' justifyContent='space-around' alignItems='center' sx={{display:{xs:'block',sm:'none'}}}>

    <Stack direction='row' sx={{bgcolor:'white',boxShadow:'0px 0px 15px silver',borderRadius:'2mm'}}>
    <Stack direction='column' sx={SmallSizeList}>
    <Typography sx={IconSizeMini}>Sizes: {main.sizes[0]}</Typography>
    <Typography sx={IconSizeMini}>{main.price[0]} $</Typography>
    <Typography sx={IconSizeMini}>Small: {smallSize}</Typography>
    </Stack>
    <Stack direction='column' sx={SmallSizeBtn} justifyContent='space-around'>
    <IconButton disableRipple sx={IconSizeMiniBtn} onClick={()=>{addPrice(main.price[0]),setSmallSize(smallSize + 1)}}>
        <AddIcon className="greenBtn" sx={IconSizeMini}/>
    </IconButton>
    <IconButton disabled={checkBox} sx={IconSizeMiniBtn} disableRipple onClick={()=>{removePrice(main.price[0]),setSmallSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSizeMini} className="redbtn" />
    </IconButton>
    </Stack>
    </Stack>

    <Stack direction='row' mt={5} sx={{bgcolor:'white',boxShadow:'0px 0px 15px silver',borderRadius:'2mm'}}>
    <Stack direction='column' sx={SmallSizeList}>
    <Typography sx={IconSizeMini}>Sizes: {main.sizes[1]}</Typography>
    <Typography sx={IconSizeMini}>{main.price[1]} $</Typography>
    <Typography sx={IconSizeMini}>Medium: {mediumSize}</Typography>
    </Stack>
    <Stack direction='column' sx={SmallSizeBtn} justifyContent='space-around'>
    <IconButton disableRipple sx={IconSizeMiniBtn} onClick={()=>{addPrice(main.price[1]),setMediumSize(mediumSize + 1)}}>
        <AddIcon className="greenBtn" sx={IconSizeMini}/>
    </IconButton>
    <IconButton disabled={checkBox} sx={IconSizeMiniBtn} disableRipple onClick={()=>{removePrice(main.price[1]),setMediumSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSizeMini} className="redbtn" />
    </IconButton>
    </Stack>
    </Stack>

    <Stack direction='row' mt={5} sx={{bgcolor:'white',boxShadow:'0px 0px 15px silver',borderRadius:'2mm'}}>
    <Stack direction='column' sx={SmallSizeList}>
    <Typography sx={IconSizeMini}>Sizes: {main.sizes[2]}</Typography>
    <Typography sx={IconSizeMini}>{main.price[2]} $</Typography>
    <Typography sx={IconSizeMini} id='largeColor'>Large: {largeSize}</Typography>
    </Stack>
    <Stack direction='column' sx={SmallSizeBtn} justifyContent='space-around'>
    <IconButton disableRipple sx={IconSizeMiniBtn} onClick={()=>{addPrice(main.price[2]),setLargeSize(size=>size + 1)}}>
        <AddIcon className="greenBtn" sx={IconSizeMini} />
    </IconButton>
    <IconButton disabled={checkBox} disableRipple sx={IconSizeMiniBtn} onClick={()=>{removePrice(main.price[2]),setLargeSize(size=>size - 1)}}>
        <RemoveIcon sx={IconSizeMini} className="redbtn" />
    </IconButton>
    </Stack>
    </Stack>

    </Stack>
    {/* End Of Small Screens */}


    </Box>
</center>
<br />
<br />
<br />
<br />
<div style={{width:'100vw',borderTop:'1px solid black'}}></div>
<br />
    <center>
    <Box width='90vw' marginBottom='50px'>

    <Typography sx={{fontSize:'xx-large',fontWeight:'bold'}}>Full Price: {mainPrice.toFixed(2)}<span style={{color:'green'}}>$</span></Typography>
    <br />
    <br />
    <Button 
    onClick={()=>add()}
    variant='contained'
    disableElevation
    disableTouchRipple
    disableRipple
    sx={{padding:'10px 50px',backgroundColor:'orange','&:hover':{backgroundColor:'orange'}}}
    disabled={checkBox}
    >
    Confirm</Button>
    <Typography variant='h6' color='error'>{checkBox?'Please Select Sizes':''}</Typography>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} 
    anchorOrigin={{vertical:"bottom",horizontal:"right"}}
    >
        <Alert onClose={handleClose} severity="success"
        sx={{ width: '100%',bgcolor:'#007bff' }}>
        Successfully  Added In Cart
        </Alert>
      </Snackbar>
    </Box>
    </center>
    </>
  )
}
