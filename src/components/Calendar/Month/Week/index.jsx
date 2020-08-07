import React from 'react';
import PropTypes from 'prop-types';
import CalendarDate from './CalendarDate';
import styles from './Week.module.scss';
import {eachDayOfInterval, startOfWeek, endOfWeek} from 'date-fns';

const getWeekDays = ({firstDayOfWeek, weekDate, date, currentDate}) => eachDayOfInterval({
    start: startOfWeek(weekDate, {weekStartsOn: firstDayOfWeek}),
    end: endOfWeek(weekDate, {weekStartsOn: firstDayOfWeek}),
}).map(dayDate => <CalendarDate key={dayDate} dayDate={dayDate} date={date} currentDate={currentDate}/>);

const Week = props => <ul className={styles.row}>{getWeekDays(props)}</ul>;

Week.propTypes = {
    weekDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
}

Week.defaultProps = {
    currentDate: new Date(),
    firstDayOfWeek: 0,
}

export default Week;