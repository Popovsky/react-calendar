import React from 'react';
import Week from './Week';
import styles from './Month.module.scss';
import {getWeek, getWeeksInMonth, getYear, format, getMonth, parse} from 'date-fns';
import classNames from 'classnames';

const getWeeks = date => {
    const firstWeek = getWeek(new Date(getYear(date), getMonth(date), 1));
    const weeksInMonth = getWeeksInMonth(new Date(getYear(date), getMonth(date), 1));
    const weeks = [];
    for (let i = firstWeek; i < firstWeek + weeksInMonth; i++) {
        const dateStartOfWeek = parse(`${getYear(date)} ${i}`, 'Y w', new Date());
        weeks.push(<Week key={getYear(date) + i} date={dateStartOfWeek} currentDate={date}/>);
    }
    return weeks;
}

function Month(props) {
    const {date} = props;
    const className = classNames(styles.box, styles.dayName)
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{format(date, 'LLLL')} {getYear(date)}</div>
            <ul className={styles.row}>
                <li className={className}>s</li>
                <li className={className}>m</li>
                <li className={className}>t</li>
                <li className={className}>w</li>
                <li className={className}>t</li>
                <li className={className}>f</li>
                <li className={className}>s</li>
            </ul>
            {getWeeks(date)}
        </div>
    );
}

export default Month;