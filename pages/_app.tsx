import { Layout } from 'components';
import { ResetStyle } from 'styles/global';
import { theme } from 'styles/theme';
import { UserInfoType } from 'types/auth';
import { authState, InitialUserInfo } from 'store/atoms';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import cookies from 'next-cookies';
import type { AppContext, AppProps } from 'next/app';

interface MyAppProps extends AppProps {
  userProfile: UserInfoType;
}

export default function App({ Component, pageProps, userProfile }: MyAppProps) {
  const initialState = ({ set }: MutableSnapshot) => {
    set(authState, userProfile ? userProfile : InitialUserInfo);
  };
  return (
    <RecoilRoot initializeState={initialState}>
      <ThemeProvider theme={theme}>
        <Global styles={ResetStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const { userProfile } = cookies(ctx);
  return { userProfile };
};
