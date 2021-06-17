import { MainLayout } from '@/layouts/MainLayout';
import classes from './learning.module.scss';


export default function LearningPage() {
    return (
        <>
            <MainLayout 
                title={'Learning page'}
                keywords={'learning'}
                description={'Learning page'}
            >
                <div className={classes.textColor}>Learning page</div>
                {/*
                    <p><Link href="/"><a>Back to main menu</a></Link></p>     
                */}   
            </MainLayout>
        </>
    );
}
  
