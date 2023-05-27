import {useSelector} from 'react-redux'
export default function Cart() {
    let allItems = useSelector((state:any)=>state.allItemsPrice)
    console.log(allItems)
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
<p>{allItems}</p>
    </>
  )
}
