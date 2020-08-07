import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import Month from './Month';
import styles from './Calendar.module.scss';

const Calendar = ({currentDate, firstDayOfWeek}) => {
    return (
        <article className={styles.container}>
            <Day currentDate={currentDate}/>
            <Month date={new Date(2020, 7, 7)} firstDayOfWeek={firstDayOfWeek} currentDate={currentDate}/>
        </article>
    );
}

Calendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date),
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
}

Calendar.defaultProps = {
    currentDate: new Date(),
    firstDayOfWeek: 0,
}

export default Calendar;
