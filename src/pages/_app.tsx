import type { AppProps } from 'next/app';
import ThemeProvider from 'components/ThemeProvider';
import Layout from 'components/Layout/Layout';

const MainComponent: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

const App = (props: AppProps) => {
  return (
    <ThemeProvider>
      <MainComponent {...props} />
    </ThemeProvider>
  );
};

export default App;
