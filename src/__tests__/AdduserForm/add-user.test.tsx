import React from 'react';
import {mount} from 'enzyme';
import AddUserForm from '../../components/AddUserForm/add-user-form.component';
import {AddUserProps} from '../../components/AddUser/add-user.component';

const props:AddUserProps = {
    addRow:jest.fn()
}


describe('empty form', () => {
    const addUserForm = mount(<AddUserForm {...props}/>)

    
    it('renders correctly', () => {
        expect(addUserForm).toMatchSnapshot()
    })


    describe('inputs', () => {
        const inputs = addUserForm.find('input')
        
        it('renders 5 input fields', ()=> {
            expect(inputs.length).toEqual(5)
        })

        inputs.forEach((input)=> {
            it('is empty', () => {
                expect(input.prop('value')).toEqual('')
            })
        })

    })
    
    describe('button', () => {
        const button = addUserForm.find('button')
        
        it('renders a button', () => {
            expect(button.length).toEqual(1)
        })
        
        it('is disabled', () => {
            expect(button.prop('disabled')).toEqual(true)
        })
    })

    
    it('doesnt submit form', () => {
        addUserForm.simulate('submit')
        expect(props.addRow).toHaveBeenCalledTimes(0)
    })
})

describe('filled form', () => {
    const addUserForm = mount(<AddUserForm {...props}/>)
    const inputs = addUserForm.find('input')
    
    inputs.forEach((input:any) => {
        input.instance().value = 'hello'
        input.simulate('change')
    })

    
    
    describe('button', () => {
        const button = addUserForm.find('button')
        it('should have active button', ()=> {
            expect(button.prop('disabled')).toEqual(false)
        })

        it('should submit form with correct values', () => {
            button.simulate('submit')

            expect(props.addRow).toHaveBeenLastCalledWith({"address": {"city": "", "state": "", "streetAddress": "", "zip": 
            ""}, "description": "", "email": "hello", "firstName": "hello", "id": "hello", "lastName": "hello", "phone": "hello"})
        })
    })

    inputs.forEach((input:any)=> {
        it('should be empty', () => {
            expect(input.prop('value')).toEqual('')
        })
    })

})
