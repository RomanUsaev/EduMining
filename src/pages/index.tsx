import Head from 'next/head'
import { MainLayout } from '@/layouts/MainLayout';

export default function HomePage() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato"
                    rel="stylesheet"
                />
            </Head>
            <MainLayout 
                title={'Home page'}
                keywords={'education, platform, learing'}
                description={'education learing platform'}
            >
                <div>Welcome to EduMining!</div>     
            </MainLayout>



        </>
    );
}
  
