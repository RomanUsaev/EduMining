import { MainLayout } from '@/layouts/MainLayout';
import classes from './courses.module.scss';


export default function CoursesPage() {
    return (
        <>
            <MainLayout 
                title={'Courses'}
                keywords={'courses'}
                description={'Courses page'}
            >
                <div className={classes.textColor}>Courses page</div>
                {/*
                    <p><Link href="/"><a>Back to main menu</a></Link></p>     
                */}   
            </MainLayout>
        </>
    );
}
  
