import React, { Component } from 'react';

import TextField            from '@material-ui/core/TextField';
import MenuItem             from '@material-ui/core/MenuItem';
import InputTimeField       from './InputTimeField';
import Button               from '@material-ui/core/Button';

import '../styles/FormEvent.scss';


export default class FormEvent extends Component {  
  render()
  {
    const { 
      title='', 
      onChangeTitle, 
      startTime, 
      onChangeStartTime, 
      endTime, 
      onChangeEndTime, 
      reminderTime, 
      onChangeReminderTime, 
      reminderTimeList,
      setEventToStore,
      titleBtn
    } = this.props;

    return (
      <form>
        <div className='formAddEvent'>
          <TextField    
              defaultValue={title}  
              id="standard-basic" 
              label="Title of event" 
              autoFocus  
              required 
              onChange={ event => onChangeTitle(event.target.value) }
          />
          <InputTimeField 
              title='Starting time' 
              defaultValue={startTime}
              sendValue={ time => onChangeStartTime(time) }
          />
          <InputTimeField 
              title='End time' 
              defaultValue={endTime}
              sendValue={ time => onChangeEndTime(time) }
          />
          <TextField
            
            id="standard-select-currency"
            select
            label="Reminder time"
            defaultValue={reminderTime}
            onChange={ event => onChangeReminderTime(event.target.value) } 
            helperText="Please select your time"
          >
            { reminderTimeList.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            )) }
          </TextField>
        </div>
        <Button variant="contained" color="primary" onClick={ _ => setEventToStore() }>
          {titleBtn}
        </Button>
      </form>
    )
  }
}
