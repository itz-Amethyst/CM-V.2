import { useProgress } from "@react-three/drei"
import gsap from "gsap";
import { useMemo } from "react";
import LoadingMessages from "../common/Loadingmessages";

export default function Progress(){
    const { active, progress, errors, item, loaded, total } = useProgress()

    var LoadingText = useMemo(() =>{

      var LoadingText = Math.floor(Math.random()*LoadingMessages.length);

      return LoadingText
    },[])

    var text = LoadingMessages[LoadingText]

    if(loaded === 9){
    //    Animate()
    DisLoading()
    }
    console.log(active, progress, errors, item, loaded, total);
    return <div className="loading">
              <div className="randomText">
                <span>{text}</span>
              </div>
            <span>
                {progress} % loaded 
            </span>
        </div>
}


function DisLoading(){
  gsap.to('.loading' , 0.8 ,{
      opacity:0,
      ease:'power3.inOut',
  })

  gsap.to('.button' , 1.2 ,{
      opacity:1,
      ease:'power3.inOut',
  })

  document.querySelector('.button').style.pointerEvents = "all"

}