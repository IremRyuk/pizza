import Bottom from "../Home Components/Bottom.tsx";
import Filter from "../Home Components/Filter.tsx";
import MainData from "../Home Components/MainData.tsx";
import '../Styles/Home/home.css'

export default function Home() {
  document.title = 'Pizza Land'
  return (
    <div className="home">
<Filter />
<MainData />
<Bottom />
    </div>
  )
}
