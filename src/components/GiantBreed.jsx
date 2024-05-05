import { useState } from "react"
import { FaDog } from "react-icons/fa";

const GiantBreed = () => {
  const [dogAge, setDogAge] = useState(1)
  const [humanAge, setHumanAge] = useState(12)

  const handleDogAgeRange = (e) => {
    const newDogAge = parseInt(e.target.value)
    setDogAge(newDogAge)
    calcAge(newDogAge)
  }

  const calcAge = (dogAge) => {
    switch (dogAge) {
      case 2: return setHumanAge(22);
      case 3: return setHumanAge(31);
      case 4: return setHumanAge(38);
      case 5: return setHumanAge(45);
      case 6: return setHumanAge(49);
      case 7: return setHumanAge(56);
      case 8: return setHumanAge(64);
      case 9: return setHumanAge(71);
      case 10: return setHumanAge(79);
      case 11: return setHumanAge(86);
      case 12: return setHumanAge(93);
      case 13: return setHumanAge(100);
      case 14: return setHumanAge(107);
      case 15: return setHumanAge(114);
      case 16: return setHumanAge(121);
      }
    }

    return (
      <div className="card-container">
        <div className="title">
        <FaDog />
         <h3>Giant Breed <span className="weight">46 kg and more</span></h3> 
        </div>
        
        <div className="range">
         <form>
          <label>Dog's Age:</label>
          <input 
            type="range" 
            name="age" 
            min="1" 
            max="16" 
            value={dogAge} 
            onChange={handleDogAgeRange} 
          />
        </form>
        <p className="range-age"><span>{dogAge}</span> </p>
        </div>
        
        <div className="result">
        <p>
          Equivalent to a Human's age: <span className="result-age">{humanAge}</span> 
        </p>
        </div>
      </div>
    )
}

export default GiantBreed