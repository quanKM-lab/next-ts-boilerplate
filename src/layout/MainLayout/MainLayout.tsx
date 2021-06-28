import { NextRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';

const MainLayout: FC = ({ children }) => {
  return <div>{children}</div>;
};

interface MainLayoutProps {
  children: ReactElement;
  router: NextRouter;
}

export function renderMainLayout<Props = any>({ children, router }: MainLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}

export default MainLayout;
