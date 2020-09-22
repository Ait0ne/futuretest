import React from 'react';
import { IUser } from '../UsersListProvider/users-list-provide.component';

import {BoldText, UserInfoContainer} from './user-info.styles';

interface UserInfoProps {
    user: IUser
}


const UserInfo: React.FC<UserInfoProps> = ({user}) => {
    return (
        <UserInfoContainer>
            <span>Выбран пользователь <BoldText>{user.firstName+' '+user.lastName}</BoldText></span>
            <span>Описание:</span>
            <p>{user.description}</p>
            <span>Адрес проживания: <BoldText>{user.address.streetAddress}</BoldText></span>
            <span>Город: <BoldText>{user.address.city}</BoldText></span>
            <span>Провинция/штат: <BoldText>{user.address.state}</BoldText></span>
            <span>Индекс: <BoldText>{user.address.zip}</BoldText></span>
        </UserInfoContainer>
    )
}

export default UserInfo;