import React from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import styles from './Month.module.scss';
import {format, eachWeekOfInterval, startOfMonth, endOfMonth,} from 'date-fns';
import classNames from 'classnames';

const getWeeks = ({date, currentDate, firstDayOfWeek}) => {
    return eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    }, {weekStartsOn: firstDayOfWeek}).map(weekDate => <Week
        key={weekDate}
        firstDayOfWeek={firstDayOfWeek}
        weekDate={weekDate} date={date}
        currentDate={currentDate}/>);
}

const getDayNames = ({firstDayOfWeek, className}) => new Array(7).fill().map((dayOfWeek, index) => <li key={index} className={className}>{format(new Date(1990, 0, firstDayOfWeek + index), 'EEEEE', {weekStartsOn: firstDayOfWeek,})}</li>);

const Month = props => {
    const {date, firstDayOfWeek} = props;
    const className = classNames(styles.box, styles.dayName);
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{format(date, 'LLLL y')}</div>
            <ul className={styles.row}>{getDayNames({firstDayOfWeek, className})}</ul>
            {getWeeks(props)}
        </div>
    );
}

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
}

Month.defaultProps = {
    currentDate: new Date(),
    firstDayOfWeek: 0,
}

export default Month;