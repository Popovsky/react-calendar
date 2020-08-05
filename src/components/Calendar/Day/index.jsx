import React from 'react';

function Day(props) {
    const {dayName, number} = props;
    return (
        <div>
            <div>{dayName}</div>
            <div>{number}</div>
        </div>
    );
}

export default Day;