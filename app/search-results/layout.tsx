import React from 'react';

import TopNavigation from 'components/TopNavigation';
import Container from 'components/Container';
import Footer from 'components/Footer';

interface ISearchResultsLayout {
    children: React.ReactNode;
}

const SearchResultsLayout: React.FC<ISearchResultsLayout> = ({
    children,
}: ISearchResultsLayout) => {
    return (
        <>
            <TopNavigation />
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

export default SearchResultsLayout;
