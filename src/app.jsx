import { ContactShadows, Environment, Float, Html, OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import Mac from './components/Mac'
import { Mac2 } from './components/Mac2'
import Site from './components/Site'

export default function App()
{
    return <>

        <Environment preset='city'/>
        <color args={['#695b5b']} attach='background'/>
        
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
                    {/* <Mac position-y ={-1.2} /> */}
                    <Mac2 position-y ={-0.8} scale={[0.1 , 0.1 ,0.1]}/>
                </Float>
            </PresentationControls>

            <ContactShadows opacity={0.4} scale={6} blur={2.4} position-y={-1.2}/>
        </Suspense>
    </>
}