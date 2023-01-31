import './style.css'
import gsap from "gsap";
import { useState } from 'react';
import Progress from './Progress';

export default function Loading(){

  const[hasClicked , setHasClicked] = useState(false)

  const element = document.querySelector('button')

  // const loading = document.querySelector('.loading')


  const toggleClicked = () =>{
    setHasClicked(hasClicked)

    //? bug need to add loading class to progresss comp
    // loading.remove()

    element.remove()

  }

  return <>
      <div className="container">

      <div className="blocks">
        <div className="block block-left">

        </div>
        <div className="block block-right">

        </div>
      </div>

      <div className="letters">
        <div className="row">
          {/* <div className="letter top-left">T</div> */}
          <div className="letter loading"><Progress/></div>

          <div className="letter button"><button onClick={toggleClicked}>Click to start</button></div>
          {/* <div className="letter top-right">2</div> */}
        </div>
        <div className="row">
          {/* <div className="letter bottom-right">7</div> */}
        </div>
      </div>


    </div>
  </>
}