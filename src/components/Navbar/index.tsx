import { useEffect } from 'react';
import classNames from 'classnames';

import styles from './navbar.module.scss';

export function Navbar() {

    
    useEffect(() => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }, []);


    return (
        <>
            <nav className={classNames(styles.navBorder, "navbar is-fixed-top")} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <div className={styles.container}>
                            <img className={styles.logo}src="/images/logo_edScramble.png" />
                            <span className={styles.text}>EduMining</span>
                        </div>
                    </a>
                    <div className="navbar-item is-hidden-tablet">
                    </div>
                </div>

                <div className="navbar-end is-hidden-mobile">
                    <div className="navbar-item">
                    </div>
                </div>
            </nav>
        </>
    );
}


Navbar.getInitialProps = ({ req }) => {
    const isServer = !!req;
    const isBrowser = !req;

    return {}
}
