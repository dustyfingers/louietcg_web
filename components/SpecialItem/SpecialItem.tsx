import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';

import MagicCard from '../MagicCard';

const CardCanvas = styled(Canvas)`
    canvas {
        height: 200px;
        width: 200px;
    }
`;

export type Special = {
    name: string;
    price: number;
    discountPct: number;
    cardFace: string;
};

const SpecialItem: React.FC<Special> = ({
    name,
    price,
    discountPct,
    cardFace,
}: Special) => {
    return (
        <>
            <CardCanvas>
                <PresentationControls
                    enabled={true} // the controls can be disabled by setting this to false
                    global={false} // Spin globally or by dragging the model
                    cursor={true} // Whether to toggle cursor style on drag
                    snap={false} // Snap-back to center (can also be a spring config)
                    speed={1} // Speed factor
                    zoom={1} // Zoom factor when half the polar-max is reached
                    rotation={[0, 0, 0]} // Default rotation
                    polar={[0, Math.PI / 2]} // Vertical limits
                    azimuth={[-Infinity, Infinity]} // Horizontal limits
                    config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
                >
                    <MagicCard cardFace={cardFace} />
                </PresentationControls>
                <ambientLight intensity={1.5} />
            </CardCanvas>
            <p>{name}</p>
            <span>
                {price} - {discountPct}% off
            </span>
        </>
    );
};

export default SpecialItem;
