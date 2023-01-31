import './css/style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './app.jsx'
import Loading from './components/Loading/Loading'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Loading/>

        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
            } }
        >
            <App/>
        </Canvas>
    </>
)