import { OrderPractice } from '@/components/OrderPractice';
import styles from './practice.module.scss';


export function PracticeLayout() {
    return (
        <>
            <div className={styles.canvas}>
                <OrderPractice exercise='Sunset'/>
            </div>
        </>
    );
}
  
