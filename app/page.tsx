'use client';
import React from 'react';

import TopNavigation from 'components/TopNavigation';
import Footer from 'components/Footer';
import Container from 'components/Container';
import LandingHero from 'components/LandingHero';
import SpecialsDisplayRibbon from 'components/SpecialsDisplayRibbon';

const Home: React.FC = () => {
    return (
        <>
            <TopNavigation />
            <LandingHero />
            <SpecialsDisplayRibbon
                specials={[
                    {
                        name: 'Queen Marchesa',
                        price: 5.0,
                        discountPct: 5,
                        cardFace: '/mtg_cardfront.png',
                    },
                    {
                        name: 'Queen Marchesa',
                        price: 5.0,
                        discountPct: 5,
                        cardFace: '/mtg_cardfront.png',
                    },
                    {
                        name: 'Queen Marchesa',
                        price: 5.0,
                        discountPct: 5,
                        cardFace: '/mtg_cardfront.png',
                    },
                ]}
            />
            <Container>HELLO WORLD</Container>
            <Footer />
        </>
    );
};

export default Home;
