import { MainLayout } from '@/layouts/MainLayout';
import { LearningLayout } from '@/layouts/LearningLayout';


export default function LearningPage() {
    return (
        <>
            <MainLayout 
                title={'Learning page'}
                keywords={'learning'}
                description={'Learning page'}
            >
                <LearningLayout />
            </MainLayout>
        </>
    );
}
  
