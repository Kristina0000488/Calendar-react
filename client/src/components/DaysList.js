import React, { Component } from 'react';
import { List, ListItem }   from '@material-ui/core';
import { Link }             from 'react-router-dom';

import DayCard              from './DayCard';

import '../styles/DaysList.scss';


export default class DaysList extends Component {
    get days( )
    {
        const { data, year, month } = this.props;
        const firstday              = ( new Date( year, month, data[0] ) ).getDay( );
        const anotherMonth          = [ ];

        if ( firstday !== 0 )
        {
            const date = new Date( year, month );
            
            date.setDate( date.getDate( ) - firstday );

            while ( date.getMonth( ) != month )
            {
                anotherMonth.push( { 
                    month : date.getMonth( ),
                    year  : date.getFullYear( ),
                    day   : date.getDate( ) 
                } )

                date.setDate( date.getDate( ) + 1 );
            }            
        }

        return [ 
            ...anotherMonth, 
            ...data.map( day => new Object( { day, year, month } ) ) 
        ]; 
    }

    render() 
    {    
        const weekdays = [ 'Sunday', 'Monday',	'Tuesday',	'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        const days     = this.days;

        return (
            <div>
                <div className='dayListContainer'>
                    <List className='daysList'>
                    {
                        weekdays.map( ( elem, index ) => 
                            <div key={`card-${index}-${index}`} className="weekday">{elem}</div>
                        )
                    }
                    </List>
                </div>
                <div className='dayListContainer'>
                    <List className='daysList'>
                        {
                            days.map( ( elem, index ) => {
                                const { year, month, day } = elem;
                                const date                 = `${year}${month}${day}`;
                                
                                return <div key={`card-${index}-${date}`}>
                                    <Link  
                                        disabled={ this.props.month != month }
                                        className={ this.props.month == month ? 'dayItem':'dayItem dayItem-another-month' } 
                                        target="_blank" 
                                        to={`/${year}/${month}/${day}/events_of_day`} 
                                        key={`link-${index}-${date}`} 
                                    >
                                        <ListItem 
                                            button
                                        >
                                            <DayCard 
                                                key={`day-card-${index}-${date}`} 
                                                events={this.props.events} 
                                                date={date} 
                                                value={day} 
                                            />
                                        </ListItem>
                                    </Link>
                                </div> 
                            })
                        }
                    </List>
                </div>
            </div>
        )
    }
}
