import React from 'react';
import Week from './Week';
import styles from './Month.module.scss';
import {getWeek, getWeeksInMonth} from 'date-fns';
import classNames from 'classnames';

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
    const className = classNames(styles.box, styles.dayName)
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{name} {year}</div>
            <ul className={styles.row}>
                <li className={className}>s</li>
                <li className={className}>m</li>
                <li className={className}>t</li>
                <li className={className}>w</li>
                <li className={className}>t</li>
                <li className={className}>f</li>
                <li className={className}>s</li>
            </ul>
            {getWeeks()}
        </div>
    );
}

export default Month;