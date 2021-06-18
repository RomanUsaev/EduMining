import { MainLayout } from '@/layouts/MainLayout';
import styles from './achievements.module.scss';


export default function AchivementsPage() {
    return (
        <>
            <MainLayout 
                title={'Achivements'}
                keywords={'Achivements'}
                description={'Achivements page'}
            >
                <div className={styles.container}>
                    <div className={styles.title}>Target</div>
                    <div className={styles.canvas}>
                        <img className={styles.icon}src="/images/achievements.png" />
                    </div>
                </div>
                  
            </MainLayout>
        </>
    );
}
  
