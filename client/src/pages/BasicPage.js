import React, { Component } from 'react';
import { observer }         from 'mobx-react';

// Базовая страница с общими методами
class BasicPage extends Component {
    reminderTimeList = [0, 5, 10, 15, 20, 25, 30, 35, 40];

    showNotice()
    {
        this.setState({ showingNotice: true });
        setTimeout(() => this.setState({ showingNotice: false }), 3000);
    }

    getId() 
    {
       return Date.now() + Math.floor(Math.random() * 99);
    }

    render() 
    {    
        return (
            <> </>
        )
    }
}


export default observer(BasicPage); 