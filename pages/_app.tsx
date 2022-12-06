import { Layout } from 'components';
import { ResetStyle } from 'styles/global';
import { theme } from 'styles/theme';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={ResetStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
