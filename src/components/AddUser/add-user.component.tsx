import React, { useState } from 'react';

import {Button} from '../../styles/base-styles';
import {AddUserContainer} from './add-user.styles';
import {IUser} from '../UsersListProvider/users-list-provide.component';
import AddUserForm from '../AddUserForm/add-user-form.component';

export interface AddUserProps {
    addRow: (user:IUser) => void
}



const AddUser:React.FC<AddUserProps> = ({addRow}) => {
    const [showAddUserForm, setShowAddUserForm] = useState(false)

    const toggleAddUserForm = () => {
        setShowAddUserForm(c=> !c)
    }

    return (
        <AddUserContainer>
            <Button onClick={toggleAddUserForm}>Добавить</Button>
            {
                showAddUserForm?<AddUserForm addRow={addRow}/>:null
            }
        </AddUserContainer>
    )
}

export default AddUser;