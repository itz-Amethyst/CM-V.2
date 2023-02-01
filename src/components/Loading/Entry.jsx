import { useState } from "react"
import Progress from "./Progress";

export default function Entry(){

    const[hasClicked , setHasClicked] = useState(false)

    const toggleClicker = () =>{
        setHasClicked(!hasClicked)
    }

    console.log(hasClicked);

    return<>

        <Progress/>

          <div>
            <button className='button' onClick={toggleClicker}> Click to see</button>
          </div>

          <div className="blocks">
                <div className="block block-left">
        
                </div>
                <div className="block block-right">
        
                </div>
          </div>

        {hasClicked && <>
    
            <div className="letters">
                <div className="row">
                    <div className="letter top-left">T</div>
                    <div className="letter top-right">2</div>
                </div>
                <div className="row">
                    <div className="letter bottom-right">7</div>
                </div>
            </div>
         </>
        }
        
    </>
}