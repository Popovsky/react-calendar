import React from 'react';
import PropTypes from 'prop-types';
import CalendarDate from './CalendarDate';
import styles from './Week.module.scss';
import {eachDayOfInterval, startOfWeek, endOfWeek} from 'date-fns';

const getWeekDays = ({weekDate, date, currentDate}) => eachDayOfInterval({
    start: startOfWeek(weekDate),
    end: endOfWeek(weekDate),
}).map(dayDate => <CalendarDate key={dayDate} dayDate={dayDate} date={date} currentDate={currentDate}/>);

const Week = props => <ul className={styles.row}>{getWeekDays(props)}</ul>;

Week.propTypes = {
    weekDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
}

Week.defaultProps = {
    currentDate: new Date(),
}

export default Week;