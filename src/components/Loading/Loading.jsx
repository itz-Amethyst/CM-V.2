// import './style.css'
import { Html } from "@react-three/drei";
import gsap from "gsap";

export default function Loading(){
  
  return <>
  <Html>
      <div className="container">

      <div className="blocks">
        <div className="block block-left">

        </div>
        <div className="block block-right">

        </div>
      </div>

      <div className="letters">
        <div className="row">
          <div className="letter top-left">T</div>
          <div className="letter top-right">2</div>
        </div>
        <div className="row">
          <div className="letter bottom-right">7</div>
        </div>
      </div>


    </div>
  </Html>
  </>
}

function AnimateGsap(){
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
        delay:4,
      })
      
      gsap.to('.top-right',2 ,{
        right:"0",
        ease:'power3.inOut',
        delay:4,
      })
      
      gsap.to('.bottom-right',2 ,{
        right:"0",
        ease:'power3.inOut',
        delay:4,
      })
      
      gsap.to('.block-left',2 ,{
        left:"-50%",
        ease:'power3.inOut',
        delay:4,
      })
      
      gsap.to('.block-right',2 ,{
        right:"-50%",
        ease:'power3.inOut',
        delay:4,
      })
}