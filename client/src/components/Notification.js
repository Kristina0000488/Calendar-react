import React, { Component } from 'react';

import '../styles/Notification.scss';

// уведомление
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
