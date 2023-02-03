import { Html } from "@react-three/drei";

export default function Site(props){
      //? Html can hide behind geometry using the occlude prop. but only works on ortographic camera and more not in PresentationControls
    return <Html wrapperClass="htmlScreen" transform  {...props} >
            <iframe src="https://callme-milad.pages.dev/" />
      </Html>

    
}