import React from 'react';

import Container from 'components/Container';
import AdminFooter from 'components/AdminFooter';

interface IAdminLayout {
    children: React.ReactNode;
}

const AdminLayout: React.FC<IAdminLayout> = ({ children }: IAdminLayout) => {
    return (
        <>
            <Container>{children}</Container>
            <AdminFooter />
        </>
    );
};

export default AdminLayout;
