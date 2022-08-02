import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import Button               from '@material-ui/core/Button';

import date                 from '../utils/Date';
import SelectList           from './SelectList';
import DaysList             from './DaysList';

import '../styles/Calendar.scss';
import '../styles/App.scss';

// компонент Календарь
class Calendar extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            month: date.getCurrentMonth(),
            year:  date.getCurrentYear(),
        }
    }

    // получение id ьусяца из списка всех месяцев
    conversionMonthToDate(month=this.state.month)
    {
        const months = date.getMonths();
        let id       = null;

        months.forEach((value, index) => {
            if (month === value) 
            {
                return id = index;
            }
        })

        return id;
    }

    render() 
    {
        const { month, year } = this.state;
        const { key, events }  = this.props;

        return (
            <div className='padding' key={key}> 
                { 
                    month && year && <>
                        <div className='containerCalendar'>
                            <Link className='linkToEvents' target="_blank" to={`/events`}>
                                <Button color="primary" size="large">Events</Button> 
                            </Link>
                            <div className='inputsField'>
                                <SelectList 
                                    title={'Years'} 
                                    defaultValue={date.getCurrentYear()} 
                                    data={date.getYears(2030)}
                                    sendValue={ year => this.setState({ year: year }) }
                                />
                                <SelectList 
                                    title={'Months'} 
                                    defaultValue={date.getCurrentMonth()} 
                                    data={date.getMonths()} 
                                    sendValue={ month => this.setState({ month: month }) }
                                />
                            </div>
                        </div>
                        <DaysList 
                            events={events}
                            month={this.conversionMonthToDate(month)}
                            year={year}
                            data={
                                date.getDays(year, this.conversionMonthToDate(month))
                            } 
                        />   
                    </>   
                }
            </div>
        )
    }
}


export default Calendar;