import classes from './404.module.scss';
import { MainLayout } from '@/layouts/MainLayout';


export default function ErrorPage() {
    return (
        <>
            <MainLayout 
                title={'Unknown page'}
                keywords={'404, error'}
                description={'Unknown page - 404 Error'}
            >
                <div className={classes.textColor}>Unknown page</div>
                {/*
                    <p><Link href="/"><a>Back to main menu</a></Link></p>     
                */}   
            </MainLayout>
        </>
    );
}
  
