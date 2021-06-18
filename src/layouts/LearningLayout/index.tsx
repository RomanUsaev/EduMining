import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from  '@/interfaces/IRootState';
import classNames from 'classnames';


import { LessonLayout } from '@/layouts/LessonLayout';
import { PracticeLayout } from '@/layouts/PracticeLayout';
import { TestLayout } from '@/layouts/TestLayout';

import styles from './learning.module.scss';


export function LearningLayout() {

    const menuItem = useSelector((state: IRootState) => state.menuItem);
    const dispatch = useDispatch();


    const handleMenuOnClick = (value: string) => {
        dispatch({
            type: 'SET_MENU_ITEM',
            menuItem: value,
        });
    } 


    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={classNames(styles.title, menuItem === 'lesson' ? styles.active : null )} onClick={()=>handleMenuOnClick('lesson')}>Lesson</div>
                    <div className={classNames(styles.title, menuItem === 'practice' ? styles.active : null )} onClick={()=>handleMenuOnClick('practice')}>Practice</div>
                    <div className={classNames(styles.title, menuItem === 'test' ? styles.active : null )} onClick={()=>handleMenuOnClick('test')}>Test</div>
                </div>
                <div className={styles.canvas}>
                    { menuItem === 'lesson' && <LessonLayout /> }
                    { menuItem === 'practice' && <PracticeLayout /> }
                    { menuItem === 'test' && <TestLayout /> }
                </div>
            </div> 
        </>
    );
}
  
  
