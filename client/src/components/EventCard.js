import React, { Component } from 'react';
import FormEvent            from './FormEvent';

import '../styles/EventCard.scss';

// карточка события
export default class EventCard extends Component {
  render()
  {
    const { 
      startTime, 
      endTime, 
      reminderTimeList, 
      reminderTime, 
      title, 
      setEventToStore, 
      titleBtn, 
      onChangeTitle, 
      onChangeStartTime, 
      onChangeEndTime, 
      onChangeReminderTime 
    } =this.props;

    return (
      <div className='eventCard'>
        <FormEvent
          startTime={startTime}
          endTime={endTime}
          reminderTimeList={reminderTimeList}
          reminderTime={reminderTime}
          title={title}
          setEventToStore={ _ => setEventToStore() }
          titleBtn={titleBtn}
          onChangeTitle={ value => onChangeTitle(value) }
          onChangeStartTime={ value => onChangeStartTime(value) }
          onChangeEndTime={ value  => onChangeEndTime(value)}
          onChangeReminderTime={ value => onChangeReminderTime(value) }
        />
      </div>
    )
  }
}