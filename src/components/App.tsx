import * as React from 'react';

import Title from './Title';
import Form from './Form';
import List from './List';
import Filter from './Filter';

export class ToDo extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Form />
                <List />
                <Filter />
            </div>
        );
    }
}