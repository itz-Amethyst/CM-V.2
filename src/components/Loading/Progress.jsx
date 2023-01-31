import { useProgress } from "@react-three/drei"
import gsap from "gsap";
import { useEffect } from "react";

export default function Progress(){
    const { active, progress, errors, item, loaded, total } = useProgress()
    if(loaded === 9){
    //    Animate()
    DisLoading()
    }
    console.log(active, progress, errors, item, loaded, total);
    return <div>
            <span>
                {progress} % loaded
            </span>
        </div>
}

function Animate(){
    gsap.from('.letter',0.8 ,{
        y:-20,
        opacity:0,
        ease:'power3.inOut',
        stagger:0.1
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
  
      gsap.to('.container',2,{
        height:'0vh',
        ease:'power3.inOut',
        delay:3,
      })
}

function DisLoading(){
    gsap.to('.loading' , 0.8 ,{
        opacity:0,
        ease:'power3.inOut',
    })

    gsap.to('.button' , 0.8 ,{
        opacity:1,
        ease:'power3.inOut',
    })

    document.querySelector('.button').style.pointerEvents = "all"

}