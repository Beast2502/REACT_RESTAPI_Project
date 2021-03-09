import React, { Component } from 'react';
import TableView from './TableView';

const columns = [
    {label: 'ID', name :'id'},
    {label: 'Email', name :'email'},
    {label:'Name', name:'name'}
]

class Users extends Component {
    render() {
        return (
            <div>
                News
                <TableView columns={[]} rows={[]} />
            </div>
        );
    }
}

export default Users;