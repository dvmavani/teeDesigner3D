import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'
import Backdrop from '../components/Backdrop'
import CameraRig from '../components/CameraRig'
import Shirt from '../components/Shirt'

const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={{position:[0,0,0], fov:25}}
    gl={{preserveDrawingBuffer:true }}
    className='w-full max-w-full h-full transition-all ease-in'>
      <ambientLight intensity={0.5}></ambientLight>
      <Environment preset='city'></Environment>
      <CameraRig>
      <Backdrop></Backdrop>
      <Center>
        <Shirt></Shirt>
      </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel