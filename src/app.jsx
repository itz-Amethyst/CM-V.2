import { ContactShadows, Environment, Float, Html, OrbitControls, PivotControls, PresentationControls, Stage } from '@react-three/drei'
import { useControls } from 'leva'
import { Suspense, useRef } from 'react'
import Mac from './components/Mac'
import { Mac2 } from './components/Mac2'
import Site from './components/Site'

export default function App()
{
    const{color} = useControls('light' , {
       color: '#1d1919'
    })

    const{colorRect} = useControls('light' , {
        colorRect: 'cyan' //#ff008e
     })

    return <>

        <Environment preset='city'/>
        <color args={[color]} attach='background'/>
        
        <Suspense fallback={null}>
            <PresentationControls
                global
                rotation={[0.03 , -0.5 , -0.1]}
                polar ={[-0.2 , 0.2]}
                azimuth ={[-1 , 0.75]}
                config={{mass: 2 , tension: 200}}
                snap={{mass: 4 , tension: 400}}
            >
                <Float rotationIntensity={0.3} floatIntensity={1.6}>
                    <rectAreaLight
                        width={1.5}
                        height={2.65}
                        intensity={65}
                        color={colorRect}
                        rotation={[0 , Math.PI + 0.55 , 0]}
                        position={[0 ,0 , -1.5]}
                    />
                    {/* <Mac position-y ={-1.2} /> */}
                    <Mac2 position-y ={-0.8} scale={[0.1 , 0.1 ,0.1]}/>
                </Float>
            </PresentationControls>

            <ContactShadows opacity={0.4} scale={6} blur={2.4} position-y={-1.2}/>
        </Suspense>
    </>
}