import { ContactShadows, Environment, Float, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import Mac from './components/Mac'

export default function App()
{
    return <>

        <Environment preset='city'/>
        <color args={['#695b5b']} attach='background'/>
        <OrbitControls makeDefault />
        
        <Suspense fallback={null}>
            <Float rotationIntensity={0.4}>
                <Mac position-y ={-1.2} />
            </Float>

            {/* <ContactShadows opacity={0.4} scale={5} blur={2.4} position-y={-0.4}/> */}
        </Suspense>
    </>
}