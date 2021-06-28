import App, { AppContext } from 'next/app';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../store';
import { NextPage } from '../types/common';

interface Props {
  err?: Error;
}

class MyApp extends App<AppPropsType & Props, {}> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };
    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store?.dispatch(END);
      await (ctx.store as SagaStore)?.sagaTask?.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  }

  renderApp() {
    const { pageProps, err } = this.props;
    const C = this.props.Component as NextPage;
    const { renderLayout } = C;
    if (renderLayout) {
      return renderLayout({ children: <C {...pageProps} err={err} /> });
    }
    return <C {...pageProps} err={err} />;
  }

  render() {
    return <>{this.renderApp()}</>;
  }
}

export default wrapper.withRedux(MyApp);
