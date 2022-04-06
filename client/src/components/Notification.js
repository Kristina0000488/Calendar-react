import React, { Component } from 'react';

import '../styles/Notification.scss';


export default class Notification extends Component {
  render()
  {
    const { showingNotice, value } = this.props;

    return (
      <> 
        { showingNotice && <div className='notification'>
            { value && value }
          </div>
        }
      </>
    )
  }
}
