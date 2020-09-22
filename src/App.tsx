import React from 'react';
import DataSizePicker from './components/DataSizePicker/dataSize-picker.component'
import {useUsersList} from './components/UsersListProvider/users-list-provide.component';
import Loader from './components/Loader/loader.component';
import Main from './components/Main/main.component';
import Alert from './components/Alert/alert.component';

import {AppContainer} from './App.styles';

const  App = () => {
  const {loading, error, usersList, addUser, clearErrors}  = useUsersList()

  return (
      <AppContainer>
        {
          loading? <Loader/>
          :null
        }
        <DataSizePicker />
        {
          error? <Alert onClose={clearErrors} message='При загрузке данных произошла ошибка'/>
          :null
        }
        {
          usersList.length>0 ? <Main list={usersList} addRow={addUser}/> : null
        }
      </AppContainer>
  );
}

export default App;
