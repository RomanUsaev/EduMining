import { IMain } from '@/interfaces/IMain';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

import styles from './main.module.scss';


export function MainLayout(props: IMain) {
    const {children, title, description, keywords} = props;
    
    return (
        <div className={ styles.container }>
            <Head>
                <title>{title} | EduMining</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} /> 
            </Head>
            <div className={ styles.navbar }>
                <Navbar/>
            </div>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
  