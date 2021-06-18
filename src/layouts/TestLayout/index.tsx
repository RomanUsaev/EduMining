import {  useState } from 'react';
import { OrderTest } from '@/components/OrderTest';
import styles from './test.module.scss';


export function TestLayout() {
    const [ isAnswer, setAnswer ] = useState<boolean>(false);

    return (
        <>
            <div className={styles.canvas}>
                <OrderTest exercise='Sunset' isAnswer={ isAnswer } />
            </div>
            <button onClick={ () => setAnswer(true)}>Проверить</button>
        </>
    );
}
  
