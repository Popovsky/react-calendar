import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarDate.module.scss';
import {format, isSameDay, isSameMonth} from 'date-fns';
import classNames from 'classnames';

const CalendarDate = ({dayDate, date, currentDate}) => {
    const isCurrent = isSameDay(dayDate, currentDate) && isSameMonth(dayDate, currentDate);
    const className = classNames(styles.box, {
        [styles.currentDay]: isCurrent,
        [styles.otherMonth]: !isSameMonth(dayDate, date),
    });
    return <li className={className}>{format(dayDate, 'd')}</li>;
}

CalendarDate.propTypes = {
    dayDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
}

CalendarDate.defaultTypes = {
    currentDate: new Date(),
}

export default CalendarDate;
