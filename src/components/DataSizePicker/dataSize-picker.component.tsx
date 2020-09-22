import React, { useEffect, useState } from 'react';

import {Button} from '../../styles/base-styles';
import {DataSizePickerContainer, DataSizePickerButtonsContainer} from './dataSize-picker.styles';
import {useUsersList} from '../UsersListProvider/users-list-provide.component';

const DataSizePicker: React.FC = () => {
    const {fetchUsersList, error} = useUsersList()
    const [currentDataSize, setCurrentDataSize] = useState<'small'|'large'|undefined>(undefined)

    const chooseDataSize = (type: 'large'|'small') => {
        setCurrentDataSize(type)
        fetchUsersList(type)
    }

    useEffect(()=> {
        if (error) {
            setCurrentDataSize(undefined)
        }
    }, [error])

    return (
        <DataSizePickerContainer>
            <span>Выберите размер набора данных:</span>
            <DataSizePickerButtonsContainer>
                <Button 
                onClick={() => chooseDataSize('small')} 
                disabled={currentDataSize==='small'}
                name='smallDataSize'
                >
                    Маленький
                </Button>
                <Button 
                onClick={() => chooseDataSize('large')}
                disabled={currentDataSize==='large'}
                name='largeDataSize'
                >
                    Большой
                </Button>
            </DataSizePickerButtonsContainer>
        </DataSizePickerContainer>
    )
}

export default DataSizePicker;