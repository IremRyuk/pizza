import { Grid,Typography,} from '@mui/material'
import { FoodFonts } from '../Styles/mui/Mui'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

type DataType = {
  defaultDatas: any
}

export default function GridData({defaultDatas}:DataType) {
    // Search by words
    let search = useSelector((state:any)=>state.searchWord)
    // React Router Dom
    let navigate = useNavigate()
  return (
    <>
<Grid 
    mt={1}
    container 
    sx={{
        width:'90vw',
        justifyContent:'space-evenly',
        justifySelf:'center',
        alignItems:'center',
        flexGrow:'1'
        }}>
{defaultDatas.filter((word:any)=>{
  if(search === ''){
    return defaultDatas
  }else if(word.name.toLowerCase().includes(search.toLowerCase())){
    return search
  }
}).map((info:any)=>(
    <Grid
    item
    xs={5} sm={4} md={3}
    key={info.id} 
    sx={{
        margin:'50px 10px', 
        cursor:'pointer',
        transition:'0.2s',
        textAlign:'center',
        '&:hover':{
          scale:'1.1'
        }
        }}
    onClick={()=>navigate(`/food/${info.id}`)}
        >
             <img
            src={info.img}
            alt={info.name}
            loading='lazy'
            style={{width:'70%',objectFit:'contain'}}
            />
<Typography sx={FoodFonts}>{info.name}</Typography>
        </Grid>
))}
    </Grid>
    </>
  )
}
