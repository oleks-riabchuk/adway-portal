import React from 'react';

import * as Icons from '../Icons/Icons';

const SortButton = () => {
    return (
        <button className='btn btn-primary btn-sort'>
            <Icons.SortIcon />
            Sort by
        </button>
    )   
};

const CalendarButton = () => {
    return (
        <button className='btn btn-primary btn-calendar'>
            <div className="icon">
                <Icons.CalendarIcon />
                This week
            </div>
            <Icons.ArrowDownIcon />
        </button>
    )
}

export {
    SortButton,
    CalendarButton
}