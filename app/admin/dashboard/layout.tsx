import React from 'react';

import Container from 'components/Container';
import AdminSideNav from 'components/AdminSideNav';

interface IAdminLayout {
    children: React.ReactNode;
}

const AdminLayout: React.FC<IAdminLayout> = ({ children }: IAdminLayout) => {
    return (
        <>
            <Container>{children}</Container>
            <AdminSideNav />
        </>
    );
};

export default AdminLayout;
