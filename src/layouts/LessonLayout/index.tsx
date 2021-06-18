import styles from './lesson.module.scss';


export function LessonLayout() {
    return (
        <>
            <div className={styles.canvas}>
                <img className={styles.icon}src="/images/learning.png" />
            </div>
        </>
    );
}
  