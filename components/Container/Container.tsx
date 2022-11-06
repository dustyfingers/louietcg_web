'use client';
import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div``;

interface IContainer {
    children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }: IContainer) => {
    return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
