import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, Detailed, Environment, Gltf } from '@react-three/drei'
import { EffectComposer, DepthOfField, ToneMapping } from '@react-three/postprocessing'

function Banana({ index, z, speed }) {
  const ref = useRef()
  // useThree를 사용하여 R3F 상태 모델에 액세스
  const { viewport, camera } = useThree()
  // getCurrentViewport 는 뷰포트의 크기를 계산하는 도우미
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
  // useGLTF는 R3F의 useLoader(GLTFLoader, url)를 중심으로 한 추상화
  // 사용자가 직접 처리하지 않아도 draco and meshopt-compressed assets 자동 처리
  // 바이너리 등을 걱정할 필요 없이
  // 여기까지 오면 모델이 로드된 상태이고 이는 React suspense를 통해 가능

  // 로컬 컴포넌트 상태, 고정된 데이터이므로 변경이 안전합니다.
  const [data] = useState({
    // 객체를 수직으로 무작위로 분포시킵니다.
    y: THREE.MathUtils.randFloatSpread(height * 2),
    // 이것은 뷰포트 너비와 곱할 수 있는 -1과 1 사이의 임의의 값을 제공합니다.
    x: THREE.MathUtils.randFloatSpread(2),
    // 객체가 회전하는 속도, randFloat는 최소값과 최대값 사이의 값을 제공합니다. 이 경우 8과 12입니다.
    spin: THREE.MathUtils.randFloat(8, 12),
    // 몇 가지 임의의 회전, Math.PI는 라디안으로 360도를 나타냅니다.
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  // useFrame은 초당 60번 실행됩니다.
  useFrame((state, dt) => {
    if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)
    ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
    if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))
  })

  return (
    <Gltf ref={ref} src="/new-banana4.glb" scale={[100, 100, 100]} />
  )
}

export default function Bananas({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
      <color attach="background" args={['#69d2e6']} />
      <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />
      {Array.from({ length: count }, (_, i) => <Banana key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */)}
      <Environment preset="sunset" />
      <EffectComposer disableNormalPass multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={10} height={700} />
        <ToneMapping />
      </EffectComposer>
    </Canvas>
  )
}

