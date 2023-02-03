import { ContactShadows, Environment, Float , PresentationControls } from '@react-three/drei'
import { Suspense } from 'react'
import Mac from './components/Mac'

export default function App()
{

    return <> 

        <Environment preset='city'/>
        <color args={['#1d1919']} attach='background'/>
        
        <Suspense fallback={null}>
            <PresentationControls
                global
                rotation={[0.03 , -0.2 , -0.1]}
                polar ={[-0.2 , 0.2]}
                azimuth ={[-1 , 0.75]}
                config={{mass: 2 , tension: 200}}
                snap={{mass: 4 , tension: 400}}
            >
                <Float rotationIntensity={0.3} floatIntensity={1.6}>
                    <rectAreaLight
                        width={1.5}
                        height={2.65}
                        intensity={75}
                        color={'#000fff'}
                        rotation={[0 , Math.PI + 0.55 , 0]}
                        position={[0 ,0 , -1.5]}
                    />
                    <Mac position-y ={-1.2} />
                </Float>
            </PresentationControls>

            <ContactShadows opacity={0.4} scale={6} blur={2.4} position-y={-1.2}/>
        </Suspense>
    </>
}