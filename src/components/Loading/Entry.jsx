import gsap from "gsap";
import { useState } from "react"
import Progress from "./Progress";

export default function Entry(){

    const[hasClicked , setHasClicked] = useState(false)

    const toggleClicker = () =>{
        setHasClicked(!hasClicked)
        setTimeout(() =>{
            var parent = document.querySelector('.remove')
            parent.remove()
        },4000 )
        Animate()
    }


    return<>

        <Progress/>

        <div className="remove">
          <div>
            <button className='button hide' onClick={toggleClicker}> Click to see</button>
          </div>

          <div className="blocks">
                <div className="block block-left">
        
                </div>
                <div className="block block-right">
        
                </div>
          </div>

        </div>

          <div className="letters">
                <div className="row">
                    <div className="letter top-left">
                        <img className="weird" src="./gifs/weird.gif"></img>
                    </div>
                    <div className="letter top-right">
                        <img className="dj" src="./gifs/dj.gif"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="letter bottom-right">
                        <img className="duck" src="./gifs/duck.gif"></img>
                    </div>
                </div>
            </div>

        {/* {hasClicked && <>
    
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
        } */}
        
    </>
}

function Animate(){
    // gsap.from('.letter',0.8 ,{
    //     y:-20,
    //     opacity:0,
    //     ease:'power3.inOut',
    //     stagger:0.1
    //   })



    gsap.to('.button' , 0.9, {
      x:40,
      opacity:0,
      ease:'power3.inOut',
    })

    gsap.to('.letter',  1.2 ,{
      y:-40,
      opacity:1,
      ease:'power3.inOut',
      // delay:1
    })
      
      gsap.to('.top-left , .top-right',2 ,{
        top:"0",
        ease:'power3.inOut',
        delay:2,
      })
      
      gsap.to('.bottom-right',2 ,{
        bottom:"0",
        ease:'power3.inOut',
        delay:2,
      })
      
      gsap.to('.top-left',2 ,{
        left:"0",
        ease:'power3.inOut',
        delay:2,
      })
      
      gsap.to('.top-right',2 ,{
        right:"0",
        ease:'power3.inOut',
        delay:2,
      })
      
      gsap.to('.bottom-right',2 ,{
        right:"0",
        ease:'power3.inOut',
        delay:2,
      })
      
      gsap.to('.block-left',2 ,{
        left:"-50%",
        ease:'power3.inOut',
        delay:2,
      })
      
      gsap.to('.block-right',2 ,{
        right:"-50%",
        ease:'power3.inOut',
        delay:2,
      })
  
      gsap.to('.container',1.8,{
        height:'0vh',
        ease:'power3.inOut',
        delay:3,
      })
}