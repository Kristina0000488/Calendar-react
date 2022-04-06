import React, { Component } from 'react';
import InputLabel           from '@material-ui/core/InputLabel';
import MenuItem             from '@material-ui/core/MenuItem';
import FormControl          from '@material-ui/core/FormControl';
import Select               from '@material-ui/core/Select';


class SelectList extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            value: this.props.defaultValue,
            listData: this.props.data,
        }
    }

    setValue(value)
    {
        this.setState({ value });
    }

    handleChange(event) 
    {
        const value = event.target.value;

        this.setState({ value });

        this.props.sendValue(value);
    };

    render() 
    {
        const { value, listData } =this.state;
        const { title } = this.props

        return (
            <div>
                {
                    value && listData && <FormControl>
                        <InputLabel id='year-label'>{title}</InputLabel>
                        <Select
                            labelId="year-label"
                            id="year-select"
                            value={value}
                            onChange={ event => this.handleChange(event) }
                        >
                            {
                                listData.map( (elem, index) => {
                                    return <MenuItem key={index} value={elem}>{elem}</MenuItem>
                                } )
                            }
                        </Select>
                    </FormControl>
                }
            </div>
        )
    }
}



export default SelectList;