import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';

import styles from './courses.module.scss';


export default function CoursesPage() {

    const router = useRouter();

    const handleOnClick = (url: string) => {
        router.push(url);
    }

    return (
        <>
            <MainLayout 
                title={'Courses'}
                keywords={'courses'}
                description={'Courses page'}
            >
                <div className={styles.container}>
                    <div className={styles.title}>Courses</div>
                    <div className={styles.canvas}>
                        <div className={styles.block} onClick={ () => handleOnClick('/learning') }>
                            <img className={styles.icon}src="/images/english.png" />
                            <div className={styles.titleBlock}>English</div>
                            <div className={styles.text}>In this module we will learn the basics of HTML5. We'll start with instructional videos on how to set up your development.</div>
                        </div>
                        <div className={styles.block}>
                            <img className={styles.icon}src="/images/chinese.png" />
                            <div className={styles.titleBlock}>Chinese</div>
                            <div className={styles.text}>In this module we will learn the basics of HTML5. We'll start with instructional videos on how to set up your development.</div>
                        </div>
                        <div className={styles.block}>
                            <img className={styles.icon}src="/images/french.png" />
                            <div className={styles.titleBlock}>French</div>
                            <div className={styles.text}>In this module we will learn the basics of HTML5. We'll start with instructional videos on how to set up your development.</div>
                        </div>
                        <div className={styles.block}>
                            <img className={styles.icon}src="/images/italian.png" />
                            <div className={styles.titleBlock}>Italian</div>
                            <div className={styles.text}>In this module we will learn the basics of HTML5. We'll start with instructional videos on how to set up your development.</div>
                        </div>
                        <div className={styles.block}>
                            <img className={styles.icon}src="/images/spanish.png" />
                            <div className={styles.titleBlock}>Spanish</div>
                            <div className={styles.text}>In this module we will learn the basics of HTML5. We'll start with instructional videos on how to set up your development.</div>
                        </div>
                        <div className={styles.block}>
                            <img className={styles.icon}src="/images/english.png" />
                            <div className={styles.titleBlock}>English</div>
                            <div className={styles.text}>In this module we will learn the basics of HTML5. We'll start with instructional videos on how to set up your development.</div>
                        </div>
                    </div>
                    
                </div>
            </MainLayout>
        </>
    );
}
  
