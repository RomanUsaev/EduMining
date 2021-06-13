import { MainLayout } from '@/layouts/MainLayout';

export default function HomePage() {
    return (
        <>
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
  
