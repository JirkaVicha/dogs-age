import SmallBreed from "./components/SmallBreed"
import MediumBreed from "./components/MediumBreed"
import LargeBreed from "./components/LargeBreed"
import GiantBreed from "./components/GiantBreed"

const App = () => {
  return (
    <div className="container">
      <div className="header">
       <h2>
        How old is my dog in human years?
      </h2> 
      </div>
      
      <div className="all-cards-container">
        <SmallBreed />
        <MediumBreed />
        <LargeBreed />
        <GiantBreed />
      </div>
    </div>
  )
}

export default App