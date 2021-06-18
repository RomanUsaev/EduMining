import { useRouter } from 'next/router'; 
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { IRootState } from  '@/interfaces/IRootState';
import Serverclient from  '@/blockchain/serverclient.js';

import styles from './navbar.module.scss';
import { useEffect } from 'react';

export function Navbar() {

    const router = useRouter();
    const balance = useSelector((state: IRootState) => state.balance);
    const dispatch = useDispatch();

    const serverClientUser = new Serverclient('say blame rare eyebrow anchor tornado patrol gown rather deputy attract reject solve victory impose');

    useEffect(()=> {
        let serverBalance = 0;
        serverClientUser.getBalance()
            .then((balance) => {
                serverBalance = balance/100000000;
                dispatch({
                    type: 'SET_BALANCE',
                    balance: serverBalance,
                });
            });    
    }, [serverClientUser, dispatch]);

    


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
                        <a className={classNames(styles.text, router.pathname === "/target" ? styles.active : null)} href="/target">
                            Target
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
