import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "./Carousel.scss"

export default function Carousel() {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ pause, setPause ] = useState(false);
   


  function updateActiveIndex(index) {
    const count = document.querySelectorAll('.carousel__item').length
    if( index < 0 ) {
      setActiveIndex(index += count);
    } else if ( index >= count ) {
      setActiveIndex(index -= count);
    }

    setActiveIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(!pause) {
        updateActiveIndex(activeIndex + 1)
      }
    }, 3000);

    return () => {
      if ( interval ) {
        clearInterval(interval);
      }
    }
  })
  

  return (<>
    <div className="carousel">
      <div className="carousel__items" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} style={{transform: `translateX(-${activeIndex * 100}%)`}}>
        <div className="carousel__item" style={{backgroundColor: '#DCE5E2'}}>
          <div className="carousel__item-wrap">
            <div className="carousel__item-title">
              <h1>The new phones are here take a look.</h1>
            </div>
            <div className="carousel__item-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
            </div>
            <button className="carousel__item-button">Explore#1</button>
          </div>
          <div className="carousel__item-img">
          </div>
        </div>
        <div className="carousel__item">
          <div className="carousel__item-wrap">
            <div className="carousel__item-title">
              <h1>The new phones are here take a look.</h1>
            </div>
            <div className="carousel__item-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
            </div>
            <button className="carousel__item-button">Explore#2</button>
          </div>
          <div className="carousel__item-img">
          </div>
        </div>
        <div className="carousel__item">
          <div className="carousel__item-wrap">
            <div className="carousel__item-title">
              <h1>The new phones are here take a look.</h1>
            </div>
            <div className="carousel__item-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
            </div>
              <button className="carousel__item-button">Explore#3</button>
          </div>
          <div className="carousel__item-img">
          </div>
        </div>
      </div>
      <div className="carousel__buttons">
        <div className="carousel__button prev" onClick={() => updateActiveIndex(activeIndex - 1)}>
          <SlArrowLeft size={'1.5rem'}/>
        </div>
        <div className="carousel__button next" onClick={() => updateActiveIndex(activeIndex + 1)}>
          <SlArrowRight size={'1.5rem'}/>
        </div>
      </div>
    </div>
  </>)
}