/* eslint-disable @typescript-eslint/no-explicit-any */
// Globe3D.tsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function LineGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  const lines: any[] = []

  // Horizontal (latitude) rings
  for (let i = -60; i <= 60; i += 20) {
    const radius = Math.cos((i * Math.PI) / 180)
    const y = Math.sin((i * Math.PI) / 180)

    const circle = new THREE.EllipseCurve(0, 0, radius, radius)
    const points = circle.getPoints(64).map((p) => new THREE.Vector3(p.x, y, p.y))
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    lines.push(
      <line key={`lat-${i}`}>
        <bufferGeometry attach="geometry" {...geometry} />
        <lineBasicMaterial color="#00FF88" linewidth={1} />
      </line>
    )
  }

  // Vertical (longitude) rings
  for (let i = 0; i < 180; i += 20) {

    const points: THREE.Vector3[] = []

    for (let j = -90; j <= 90; j += 5) {
      const theta = (i * Math.PI) / 180
      const phi = (j * Math.PI) / 180
      const x = Math.cos(phi) * Math.cos(theta)
      const y = Math.sin(phi)
      const z = Math.cos(phi) * Math.sin(theta)
      points.push(new THREE.Vector3(x, y, z))
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    lines.push(
      <line key={`lon-${i}`}>
        <bufferGeometry attach="geometry" {...geometry} />
        <lineBasicMaterial color="#00FF88" linewidth={1} />
      </line>
    )
  }

  return <group ref={groupRef}>{lines}</group>
}

export default function Globe3D() {
  return (
    <Canvas className="rounded-xl" camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <LineGlobe />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
