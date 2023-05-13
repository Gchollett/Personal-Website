import Layout from '../components/layout';
import '../styles/styles.css';

const CustomApp = ({ Component, pageProps }) => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

export default CustomApp;