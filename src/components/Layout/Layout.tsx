import React, { ReactNode } from 'react';
import { MaxWidthLayout } from './Layout.styles';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <MaxWidthLayout>{children}</MaxWidthLayout>
    </>
  );
};

export default Layout;
