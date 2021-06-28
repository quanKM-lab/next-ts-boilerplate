import { NextComponentType, NextPageContext } from 'next/dist/next-server/lib/utils';
import { ReactElement } from 'react';

export type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  renderLayout: (val: any) => ReactElement;
};
