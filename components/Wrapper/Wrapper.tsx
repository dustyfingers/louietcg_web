import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div``;

interface IWrapper {
    children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }: IWrapper) => {
    return <WrapperDiv>{children}</WrapperDiv>;
};

export default Wrapper;
