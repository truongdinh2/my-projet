import '../styles/globals.css'
import 'antd/dist/antd.css';
import { Authentic } from '../components/useContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [auth,setAuth] = useState('null');
  const value = {auth,setAuth}
  return <Authentic.Provider value={value}>
    <Component {...pageProps} />
      </Authentic.Provider>
}

export default MyApp
