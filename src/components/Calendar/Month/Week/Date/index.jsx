import React from 'react';
import styles from './Date.module.css';
import {getDate, getMonth} from 'date-fns';
import classNames from 'classnames';

function Date(props) {
    const {date, currentDate} = props;
    const today = getDate(currentDate);
    const currentMonth = getMonth(currentDate)
    const className = classNames(
        styles.day,
        (getDate(date) === today && getMonth(date) === currentMonth) && styles.today,
        getMonth(date) !== currentMonth && styles.otherMonth);
    return (
        <li className={className}>{getDate(date)}</li>
    );
}

export default Date;