import React from 'react';
import TopNavigation from 'components/TopNavigation';
import Footer from 'components/Footer';
import Container from 'components/Container';

const Home: React.FC = () => {
    return (
        <>
            <TopNavigation />
            <Container>HELLO WORLD</Container>
            <Footer />
        </>
    );
};

export default Home;
