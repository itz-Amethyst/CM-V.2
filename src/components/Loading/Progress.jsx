import { useProgress } from "@react-three/drei"
import gsap from "gsap";
import { useEffect, useMemo } from "react";
import LoadingMessages from "../common/Loadingmessages";

export default function Progress(){
    const { active, progress, errors, item, loaded, total } = useProgress()

    var LoadingText = useMemo(() =>{

      var LoadingText = Math.floor(Math.random()*LoadingMessages.length);

      return LoadingText
    },[])

    var text = LoadingMessages[LoadingText]

    if(active == false){
      DisLoading()
    }
    console.log(active, progress, errors, item, loaded, total);

    return<>
      <section>
          
          <div className="loading">
            <div className="lAnimated">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
            <div className="lText">
              <span>{text}</span>
            </div>
          </div>
      </section>
    </>
}


function DisLoading(){
  gsap.to('.loading' , 0.8 ,{
      opacity:0,
      ease:'power3.inOut',
  })

  // gsap.to('.button' , 1.2 ,{
  //     opacity:1,
  //     ease:'power3.inOut',
  // })

  // document.querySelector('.button').style.pointerEvents = "all"

  // : (
  // useEffect(() =>{
  //   document.querySelector('.button').classList.remove('hide')
  // },[])

  document.querySelector('.button').classList.remove('hide')
}