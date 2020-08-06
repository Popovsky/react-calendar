import React from 'react';
import Day from './Date';
import styles from './Week.module.scss';
import {getDate, setDate} from 'date-fns';

const getWeek = ({currentDate, date}) => {
    const days = [];
    for (let i = 0; i < 7; i++) {
        const singleDate = setDate(date, getDate(date) + i);
        days.push(<Day key={singleDate} date={singleDate} currentDate={currentDate}/>);
    }
    return days;
}

function Week(props) {
    const {currentDate, date} = props;
    return (
        <ul className={styles.row}>{getWeek({currentDate, date})}</ul>
    );
}

export default Week;