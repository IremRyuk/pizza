import { Grid,Typography,Box } from '@mui/material'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function MainData() {
    // React Router Dom
    let navigate = useNavigate()
    // Redux
    let data = useSelector((state:any)=>state.mainData)
  return (
    <center><Grid 
    mt={5}
    container 
    sx={{
        width:'90vw',
        justifyContent:'space-evenly',
        justifySelf:'center'
        }}>
{data.map((info:any)=>(
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
<Typography variant='h4'>{info.name}</Typography>
        </Grid>
))}
    </Grid></center>
  )
}
