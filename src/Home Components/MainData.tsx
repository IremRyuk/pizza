import { Grid,Typography,Box } from '@mui/material'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FoodFonts } from '../Styles/mui/Mui'

export default function MainData() {
  document.title = 'Pizza Land'
    // React Router Dom
    let navigate = useNavigate()
    // Redux
    let data = useSelector((state:any)=>state.mainData)
    let search = useSelector((state:any)=>state.searchWord)
  return (
    <center><Grid 
    mt={1}
    container 
    sx={{
        width:'90vw',
        justifyContent:'space-evenly',
        justifySelf:'center',
        alignItems:'center'
        }}>
{data.filter((word:any)=>{
  if(search === ''){
    return data
  }else if(word.name.toLowerCase().includes(search.toLowerCase())){
    return search
  }
}).map((info:any)=>(
    <Grid 
    // onClick={()=>itemFunction(info)}
    item 
    xs={5} sm={4} md={3}
    key={info.id} 
    sx={{
        margin:'50px 10px', 
        cursor:'pointer',
        transition:'0.2s',
        '&:hover':{
          scale:'1.1'
        }
        }}
    onClick={()=>navigate(`/food/${info.id}`)}
        >
            <Box
            component='img'
            src={info.img}
            alt={info.name}
            loading='lazy'
            sx={{width:'70%',objectFit:'contain'}}
            />
<Typography sx={FoodFonts}>{info.name}</Typography>
        </Grid>
))}
    </Grid></center>
  )
}
