import gsap from "gsap";
import { useState } from "react"
import Progress from "./Progress";
import useSound from "use-sound";

export default function Entry(){

    const duckSound = './hits/duck-sound.mp3'

    const nggypSound = './hits/never-gonna-give-you-up.mp3'

    const weirdSound = './hits/vine-boooom.mp3'

    const[hasClicked , setHasClicked] = useState(false)

    const [isHovering, setIsHovering] = useState(false);

    const[showElements , setShowElements] = useState(false)

    const [playDuck, { stopDuck }] = useSound(
      duckSound,
      { volume: 0.3 }
    );

    const [playNggyp] = useSound(nggypSound , {
      interrupt: true,
      volume: 0.3
    });

    const [playWeird] = useSound(weirdSound , {
      interrupt: true,
      volume: 0.3
    });

    const toggleClicker = () =>{
        setHasClicked(!hasClicked)
        setTimeout(() =>{
            // var parent = document.querySelector('.remove')
            // : (
            // parent.remove()
            setShowElements(!showElements)
            console.log(showElements)
        },4000 )
        Animate()
    }


    return<>

        <Progress/>

        <div className="remove">
          <div>
            <button className='button hide' onClick={toggleClicker}> <span>Click to see</span> </button>
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
                        <img
                           onMouseDown={()=>{
                            if(showElements == true){
                              setIsHovering(true);
                              playWeird();
                            }
                          }}
                        className="weird" src="./gifs/weird.gif" draggable ={false}></img>
                    </div>
                    <div className="letter top-right">
                        <img
                        onMouseDown={()=>{
                          if(showElements == true){
                            playNggyp();
                          }
                        }}
                        className="dj" draggable ={false} src="./gifs/dj.gif"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="letter bottom-right" >
                        <img
                        onMouseEnter={()=>{
                            if(showElements == true){
                              setIsHovering(true);
                              playDuck();
                            }
                          }}
                          //   onMouseLeave={()=>{
                          //     if(showElements == true){
                          //       setIsHovering(false);
                          //       stopDuck();
                          //     }
                          // }} 
                          className="duck" src="./gifs/duck.gif" draggable ={false} isHovering={isHovering ? 1 : 0}></img>
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

    document.querySelector('.button').classList.add('none')

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