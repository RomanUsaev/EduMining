import { useEffect } from 'react';
import classNames from 'classnames';

import styles from './navbar.module.scss';

export function Navbar() {

    return (
        <>
            <div className={classNames(styles.navbar)}>             
                <a href="#"><img className={styles.logo}src="/images/EduMining.png" /></a>              
            </div>
        </>
    );
}


Navbar.getInitialProps = ({ req }) => {
    const isServer = !!req;
    const isBrowser = !req;

    return {}
}
