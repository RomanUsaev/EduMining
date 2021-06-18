import classNames from 'classnames';
import styles from './footer.module.scss';

export function Footer() {
    return (
        <>
            <footer className={classNames(styles.footerBlock)}>
                <div className={styles.text}>
                    <p>© 2021 | EduMining</p>
                </div>
            </footer>
        </>
)}
