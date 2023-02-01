import './style.css'
import gsap from "gsap";
import { useEffect, useMemo, useState } from 'react';
import Progress from './Progress';
import Entry from './Entry';

export default function Loading(){

 

  const element = document.querySelector('.button')

  // const loading = document.querySelector('.loading')


  const toggleClicked = () =>{
    setHasClicked(hasClicked)

    useEffect(() =>{
      element.style.opacity = null
    element.style.pointerEvents = null
    },[])

    //? bug need to add loading class to progresss comp
    // loading.remove()

    // element.remove()


  }

  // const color = useMemo(() =>{
  //   element.style.opacity = null
  //   element.style.pointerEvents = null
  // }, [hasClicked])

  return <>
    <div className="container">
      <Entry/>


    </div>
  </>
}