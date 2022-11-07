import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial, Vector3 } from 'three';

type GLTFResult = GLTF & {
    nodes: {
        Cube: Mesh;
    };
    materials: { Material: MeshStandardMaterial };
};

interface IMagicCard {
    cardFace: string;
}
const MagicCard: React.FC<IMagicCard> = ({ cardFace }: IMagicCard) => {
    const ref = useRef<Mesh>(new Mesh());
    const { nodes, materials } = useGLTF(
        '/objects/generic_magic_card.gltf'
    ) as unknown as GLTFResult;
    const { camera } = useThree();

    useEffect(() => {
        if (camera) camera.lookAt(new Vector3(0, 0, 0));
    }, [camera]);
    useFrame(() => {
        if (ref.current) ref.current.rotation.y += 0.01;
    });
    return (
        <group dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                scale={[0.01, 1.88, 1.63]}
            />
        </group>
    );
};

export default MagicCard;
