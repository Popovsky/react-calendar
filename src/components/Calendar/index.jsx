import React, {Component} from 'react';
import Day from './Day';
import Month from './Month';
import styles from './Calendar.module.scss';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
        };
    }

    render() {
        const {currentDate} = this.state;
        return (
            <article className={styles.container}>
                <Day date={currentDate}/>
                <Month date={currentDate}/>
            </article>
        );
    }
}

export default Calendar;
