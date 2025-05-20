import { useTexture } from '@react-three/drei'

export default function VinylsCovers(props)
{
    const ULMATexture = useTexture('./Textures/shreya.png')
    const ROCPTexture = useTexture('./Textures/kishor.png')
    const PNLTexture = useTexture('./Textures/sonu.png')
    const HamzaTexture = useTexture('./Textures/atif.png')
    const boobaTexture = useTexture('./Textures/arjit.png')




    return <>
        <mesh
            geometry={props.nodes.LogoULMA.geometry}
            position={[3.736, 5.408, -0.575]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={ULMATexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoRCP.geometry}
            position={[3.701, 5.409, 0.309]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}        
        >
            <meshBasicMaterial map={ROCPTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoPNL.geometry}
            position={[3.77, 5.102, -1.003]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={PNLTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoHamza.geometry}
            position={[3.736, 5.107, -0.156]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={HamzaTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoBooba.geometry}
            position={[3.686, 5.077, 0.811]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={boobaTexture} map-flipY={false} />

        </mesh>
    </>
}