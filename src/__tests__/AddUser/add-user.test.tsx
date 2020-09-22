import React from 'react';
import {shallow} from 'enzyme';

import AddUser from '../../components/AddUser/add-user.component';
import {Button} from '../../styles/base-styles';

describe('AddUser', ()=> {
    const addUser = shallow(<AddUser addRow={jest.fn()}/>)

    it('renders correctly', () => {
        expect(addUser).toMatchSnapshot()
    })

    it('renders a button', () => {
        expect(addUser.find(Button).length).toEqual(1)
    })

    it('doesnt render AddUserForm initially', () => {
       expect(addUser.find('AddUserForm').length).toEqual(0) 
    })

    it('shows form on button click', () => {
        const button = addUser.find(Button)
        button.simulate('click')
        expect(addUser.find('AddUserForm').length).toEqual(1) 
    })

})