import { ContactShadows, Environment, Float, OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import Mac from './components/Mac'

export default function App()
{
    return <>

        <Environment preset='city'/>
        <color args={['#695b5b']} attach='background'/>
        
        <Suspense fallback={null}>
            <PresentationControls 
                global
                rotation={[0.13 , 0.1 , 0]}
                polar ={[-0.4 , 0.2]}
                azimuth ={[-1 , 0.75]}
                config={{mass: 2 , tension: 200}}
                snap={{mass: 4 , tension: 400}}
            >
                <Float rotationIntensity={0.4}>
                    <Mac position-y ={-1.2} />
                </Float>
            </PresentationControls>

            <ContactShadows opacity={0.4} scale={6} blur={2.4} position-y={-1.4}/>
        </Suspense>
    </>
}