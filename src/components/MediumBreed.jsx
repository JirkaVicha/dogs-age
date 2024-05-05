import { useState } from "react"
import { FaDog } from "react-icons/fa";

const MediumBreed = () => {
  const [dogAge, setDogAge] = useState(1)
  const [humanAge, setHumanAge] = useState(15)

  const handleDogAgeRange = (e) => {
    const newDogAge = parseInt(e.target.value)
    setDogAge(newDogAge)
    calcAge(newDogAge)
  }

  const calcAge = (dogAge) => {
    switch (dogAge) {
      case 2: return setHumanAge(24);
      case 3: return setHumanAge(28);
      case 4: return setHumanAge(32);
      case 5: return setHumanAge(36);
      case 6: return setHumanAge(42);
      case 7: return setHumanAge(47);
      case 8: return setHumanAge(51);
      case 9: return setHumanAge(56);
      case 10: return setHumanAge(60);
      case 11: return setHumanAge(65);
      case 12: return setHumanAge(69);
      case 13: return setHumanAge(74);
      case 14: return setHumanAge(78);
      case 15: return setHumanAge(83);
      case 16: return setHumanAge(87);
      }
    }

    return (
      <div className="card-container">
        <div className="title">
        <FaDog />
         <h3>Medium Breed <span className="weight">11 - 23 kg</span></h3> 
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

export default MediumBreed