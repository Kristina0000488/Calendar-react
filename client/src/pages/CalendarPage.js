import React, { Component } from 'react';
import { observer }         from 'mobx-react';

import Calendar             from '../components/Calendar';
import NotificationForTime  from '../components/NotificationForTime';
import eventsStore          from '../store/EventsStore';

// Страница отображения календаря
class CalendarPage extends Component {    
    // Получение ключа для календаря
    getCalendarKey()
    {
        return JSON.stringify(eventsStore.events).replace(/^[a-zA-z0-9]+/gi, '');
    }

    render() 
    {    
        return (
            <>
                <NotificationForTime /> 
                { eventsStore.events && <Calendar events={eventsStore.events} key={this.getCalendarKey()}/> }
            </>
        )
    }
}

export default observer(CalendarPage);