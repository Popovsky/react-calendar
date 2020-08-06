import React from 'react';
import PropTypes from 'prop-types';
import styles from './Date.module.scss';
import {getDate, getMonth} from 'date-fns';
import classNames from 'classnames';

function CalendarDate(props) {
    const {date, currentDate} = props;
    const today = getDate(currentDate);
    const currentMonth = getMonth(currentDate);

    const isCurrent =
        getDate(date) === today && getMonth(date) === currentMonth;

    const className = classNames(styles.box, {
        [styles.today]: isCurrent,
        [styles.otherMonth]: getMonth(date) !== currentMonth,
    });
    return <li className={className}>{getDate(date)}</li>;
}

CalendarDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date).isRequired,
}

export default CalendarDate;
