import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      darkblue: string;
      lightblue: string;
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      darkblue: string;
      lightblue: string;
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      darkblue?: string;
      lightblue?: string;
    };
    mq?: {
      mobile?: string;
      tablet?: string;
      desktop?: string;
    };
  }
}
