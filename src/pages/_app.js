import { useEffect } from 'react';
import Layout from '../components/layout';
import '../styles/main.css';
import '../styles/home.css';
import '../styles/gallary.css';
import '../styles/interests.css'
import '../styles/business.css'
import '../styles/projects.css'

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