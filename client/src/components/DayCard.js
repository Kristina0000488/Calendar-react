import React, { Component } from 'react';
import Paper                from '@material-ui/core/Paper';
import { ListItemText }     from '@material-ui/core';

import '../styles/DayCard.scss';

// карточка День
export default class DayCard extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            events: this.handleEvents(),
        };
    }

    handleEvents()
    {
        const listEvents = this.props.events.filter(event => event.date === this.props.date);

        return listEvents.length <  3 ? listEvents : listEvents.slice(0, 2) ;
    }

    render() 
    {
        const { key, value } = this.props;
        const { events } = this.state;

        return (
            <Paper className='dayCard' key={key}>
                <div className='dayCardNumber'>
                    <ListItemText>{value}</ListItemText>
                </div>
                <div 
                    className='dayCardEvent' 
                    style={{ color: events.length > 0 ? 'rgba(0, 0, 0, 0.61)' : 'transparent' }}>
                    {
                        events && events.map( item => {
                            return <div key={key}>{item.title}</div> ;
                        } )
                    }
                </div>
            </Paper>
        )
    }
} 