import React, {Component} from 'react';
import Day from './Day';
import Month from './Month';
import {format} from 'date-fns';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
        }
    }

    render() {
        const {currentDate} = this.state;
        const dayName = format(currentDate, 'iiii');
        const currentDay = format(currentDate, 'd');
        const month = {
            name: format(currentDate, 'LLLL'),
            number: format(currentDate, 'L') - 1,
        }
        const year = format(currentDate, 'yyyy');
        return (
            <article>
                <Day dayName={dayName} number={currentDay}/>
                <Month month={month} year={year} currentDate={currentDate}/>
            </article>
        );
    }
}

export default Calendar;