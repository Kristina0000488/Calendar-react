import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';


export default class InputTimeField extends Component {
  handleTimeChange(time) 
  {
    this.props.sendValue(time);
  };
  
  render()
  {
    const { title, defaultValue='' } = this.props;

    return (
      <>
        <TextField
            id="time"
            label={title}
            type="time"
            defaultValue={defaultValue}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
            onChange={ event => this.handleTimeChange(event.target.value)}
        />
      </>
    )
  }
}