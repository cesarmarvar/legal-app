import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { colors } from "../../styles/colors";
import "./star-rating.css"


function StarRating() {

  const [ rating, setRating ] = useState(null);
  const [hover, setHover] = useState(null);

  return(
      <div>
        {[...Array(5)].map((star, idx) => {
          const ratingValue = idx + 1;
          return (
            <label key={idx}>
              <input 
                className="radioInput" 
                type="radio" 
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              ></input>
              <FaStar 
                className="star" 
                size="35px"
                onMouseEnter={() => {setHover(ratingValue)}}
                onMouseLeave={() => {setHover(null)}}
                color={ ratingValue <= (hover || rating) ? `${colors.orange.stars}` : `${colors.gray.regular}`}
              />        
            </label>
          )
        })}
        <p>The rating is {rating}.</p>
      </div>

    )
  }

  export default StarRating;