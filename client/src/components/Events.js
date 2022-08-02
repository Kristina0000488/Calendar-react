import React, { Component } from 'react';
import Button               from '@material-ui/core/Button';
import { Link }             from 'react-router-dom';
import { observer }         from 'mobx-react';

import '../styles/Events.scss';

// событие в списке
class Events extends Component {
    render()
    {
        const { eventsStore, deleteEvent } = this.props;

        return (
          <>
            {
                eventsStore && eventsStore.map( (item, index) => {
                    return <div key={index} className='eventField'>
                        <span>{item.title}</span>
                        <div className='btnsField'>
                            <Link target="_blank" to={`/${item.year}/${item.month}/${item.day}/${item.id}/edit`} key={index} >
                                <Button>
                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={ _ => deleteEvent(item.id) }>
                                Delete
                            </Button>
                        </div>
                    </div>
                } )
            }
            { !eventsStore && <div>No events</div> }
          </>
        )
    }
}


export default observer(Events);