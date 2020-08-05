import React from 'react';
import styles from './Day.module.scss';

function Day(props) {
    const {dayName, number} = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{dayName}</div>
            <div className={styles.number}>{number}</div>
        </div>
    );
}

export default Day;