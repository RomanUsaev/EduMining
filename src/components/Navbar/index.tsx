import { useRouter } from 'next/router'; 
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { IRootState } from  '@/interfaces/IRootState';

import styles from './navbar.module.scss';

export function Navbar() {

    const router = useRouter();
    const balance = useSelector((state: IRootState) => state.balance);
    const dispatch = useDispatch();

    const handleMenuOnClick = (value: string) => {
        dispatch({
            type: 'SET_LANGUAGE_UI',
            uiLang: value,
        });
    } 

    return (
        <>
            <div className={classNames(styles.navbar)}>             
                <a href="#"><img className={styles.logo}src="/images/EduMining.png" /></a>      
                <div className={classNames(styles.menu)}>
                    <div className={classNames(styles.menuItem)}>
                        <a className={classNames(styles.text, router.pathname === "/courses" ? styles.active : null)} href="/courses">
                            Courses
                        </a>
                    </div> 
                    <div className={classNames(styles.menuItem)}>
                        <a className={classNames(styles.text, router.pathname === "/learning" ? styles.active : null)} href="/learning">
                            Learning
                            </a>
                        </div> 
                    <div className={classNames(styles.menuItem)}>
                        <a className={classNames(styles.text, router.pathname === "/achievements" ? styles.active : null)} href="/achievements">
                            Achievements
                        </a>
                    </div> 
                </div> 
                <div className={classNames(styles.userBar)}>
                    <div className={classNames(styles.balanceBar)}>
                        <img className={styles.icon} src="/images/gem.png" />
                        <div className={classNames(styles.balance)}> { balance } </div>
                    </div>
                    <div className={classNames(styles.user)}>
                        <img className={styles.icon} src="/images/user.png" />
                    </div>
                </div>       
            </div>
        </>
    );
}


Navbar.getInitialProps = ({ req }) => {
    const isServer = !!req;
    const isBrowser = !req;

    return {}
}
