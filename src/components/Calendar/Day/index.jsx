import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.module.scss';
import {getDate, format} from 'date-fns';

function Day(props) {
    const {date} = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{format(date, 'iiii')}</div>
            <div className={styles.number}>{getDate(date)}</div>
        </div>
    );
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
}

export default Day;
