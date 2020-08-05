import React from 'react';
import Week from './Week';
import styles from './Month.module.css';
import {getWeek, getWeeksInMonth} from 'date-fns';

function Month(props) {
    const {month: {name, number}, year, currentDate} = props;
    const getWeeks = () => {
        const firstWeek = getWeek(new Date(year, number, 1));
        const weeksInMonth = getWeeksInMonth(new Date(year, number, 1));
        const weeks = [];
        for (let i = firstWeek; i < firstWeek + weeksInMonth; i++) {
            weeks.push(<Week key={i} week={i} year={year} currentDate={currentDate}/>);
        }
        return weeks;
    }
    return (
        <div>
            <div>{name} {year}</div>
            <ul>
                <li className={styles.dayName}>s</li>
                <li className={styles.dayName}>m</li>
                <li className={styles.dayName}>t</li>
                <li className={styles.dayName}>w</li>
                <li className={styles.dayName}>t</li>
                <li className={styles.dayName}>f</li>
                <li className={styles.dayName}>s</li>
            </ul>
            <div>
                {getWeeks()}
            </div>
        </div>
    );
}

export default Month;