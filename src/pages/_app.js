import { useEffect } from 'react';
import Layout from '../components/layout';
import '../styles/styles.css';

const CustomApp = ({ Component, pageProps }) => {
    var cookieConsent;
    useEffect(() =>{
        cookieConsent = localStorage.getItem('cookieConsent');
    })
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

export default CustomApp;