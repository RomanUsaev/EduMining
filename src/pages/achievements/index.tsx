import { MainLayout } from '@/layouts/MainLayout';
import classes from './achivements.module.scss';


export default function AchivementsPage() {
    return (
        <>
            <MainLayout 
                title={'Achivements'}
                keywords={'Achivements'}
                description={'Achivements page'}
            >
                <div className={classes.textColor}>Achivements page</div>
                {/*
                    <p><Link href="/"><a>Back to main menu</a></Link></p>     
                */}   
            </MainLayout>
        </>
    );
}
  
