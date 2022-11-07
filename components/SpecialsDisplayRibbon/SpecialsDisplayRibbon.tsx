import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import Wrapper from 'components/Wrapper';
import SpecialItem from 'components/SpecialItem';
import { Special } from 'components/SpecialItem/SpecialItem';

interface ISpecialsDisplayRibbon {
    specials: Special[];
}

const SpecialsDisplayRibbon: React.FC<ISpecialsDisplayRibbon> = ({
    specials,
}: ISpecialsDisplayRibbon) => {
    return (
        <Wrapper>
            {specials.map(special => (
                <SpecialItem {...special} key={uuidv4()} />
            ))}
        </Wrapper>
    );
};

export default SpecialsDisplayRibbon;
