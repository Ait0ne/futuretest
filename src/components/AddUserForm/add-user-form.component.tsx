import React, { useReducer } from 'react';

import {FormContainer} from './add-user-form.styles';
import {AddUserProps} from '../AddUser/add-user.component';
import {Input, Button} from '../../styles/base-styles';
import {formReducer, initialFormState} from './add-user.reducer';




const AddUserForm: React.FC<AddUserProps> = ({addRow}) => {
    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name)
        dispatch({type: event.target.name as 'id' | 'firstName'| 'lastName' | 'email' | 'phone', payload: event.target.value})
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        if (!(formState.id===''||formState.firstName===''||formState.lastName===''||formState.email===''||formState.phone==='')) {
            addRow({
                ...formState,
                description: '',
                address: {
                    city: '',
                    state: '',
                    streetAddress: '',
                    zip: ''
                }
            })
            dispatch({type: 'CLEAR'})
        }

    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            <Input 
            type='text'
            name='id'
            value={formState.id}
            placeholder='Id'
            onChange={handleInputChange}
            />
            <Input 
            type='text'
            name='firstName'
            placeholder='FirstName'
            value={formState.firstName}
            onChange={handleInputChange}
            />
            <Input 
            type='text'
            name='lastName'
            placeholder='LastName'
            value={formState.lastName}
            onChange={handleInputChange}
            />
            <Input 
            type='text'
            name='email'
            placeholder='Email'
            value={formState.email}
            onChange={handleInputChange}
            />
            <Input 
            type='text'
            name='phone'
            placeholder='Phone'
            value={formState.phone}
            onChange={handleInputChange}
            />
            <Button
            disabled={formState.id===''||formState.firstName===''||formState.lastName===''||formState.email===''||formState.phone===''}
            >
                Добавить в таблицу
            </Button>
        </FormContainer>
    )
}

export default AddUserForm;
