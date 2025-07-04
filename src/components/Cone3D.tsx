'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function SpinningCone() {
  const coneRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (coneRef.current) {
      coneRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <mesh ref={coneRef} position={[0, 0, 0]}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="#4ade80" wireframe  />
    </mesh>
  )
}

export default function Cone3D() {
  return (
    <Canvas style={{ height: '300px' }} className='w-full absolute inset-0'>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} />
      <SpinningCone />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
