import {Skeleton,Stack } from '@mui/material'
import {useSelector} from 'react-redux'
import GridData from './GridData'

export default function MainData() {
  document.title = 'Pizza Land'
    // Redux
    const cloneData = useSelector((res:any)=>{return res.defaultData})

    // Mui Styles

    const skeletonCir = {
      width:{xs:'80px',sm:'150px',md:'200px'},
      height:{xs:'80px',sm:'150px',md:'200px'},
    }
    const skeletonRec = {
      width:{xs:'70px',sm:'150px',md:'200px'},
      height:{xs:'40px',sm:'50px',md:'50px'},
    }
  return (
<>
{!cloneData &&
<>
{/* First Row Of Skeletons*/}
<Stack direction='row' width='80%' justifyContent='space-evenly' mt={5}>
<Stack direction='column' alignItems='center' gap='5px'>
  <Skeleton variant="circular" sx={skeletonCir} />
  <Skeleton variant="rectangular"sx={skeletonRec} />
</Stack>
<Stack direction='column' alignItems='center' gap='5px'>
  <Skeleton variant="circular" sx={skeletonCir} />
  <Skeleton variant="rectangular"sx={skeletonRec} />
</Stack>
<Stack direction='column' alignItems='center' gap='5px'>
  <Skeleton variant="circular" sx={skeletonCir} />
  <Skeleton variant="rectangular"sx={skeletonRec} />
</Stack>
{/* Second Row Of Skeletons*/}
</Stack>
<Stack direction='row' width='80%' justifyContent='space-evenly' mt={10} mb={5}>
<Stack direction='column' alignItems='center' gap='5px'>
  <Skeleton variant="circular" sx={skeletonCir} />
  <Skeleton variant="rectangular"sx={skeletonRec} />
</Stack>
<Stack direction='column' alignItems='center' gap='5px'>
  <Skeleton variant="circular" sx={skeletonCir} />
  <Skeleton variant="rectangular"sx={skeletonRec} />
</Stack>
<Stack direction='column' alignItems='center' gap='5px'>
  <Skeleton variant="circular" sx={skeletonCir} />
  <Skeleton variant="rectangular"sx={skeletonRec} />
</Stack>
</Stack>
</>
 } 

{cloneData&& 
<GridData defaultDatas={cloneData}/>
}
    </>
  )
}
