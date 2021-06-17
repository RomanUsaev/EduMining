import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from '@/store/store';
import Head from 'next/head';


export default function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initialReduxState);
    return (
        <>  
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />    
            </Provider>
        </>
    );
}


