import React from 'react';
import { mount } from 'enzyme';
import DataSizePicker from '../../components/DataSizePicker/dataSize-picker.component';
import {UsersListContext} from '../../components/UsersListProvider/users-list-provide.component';
import {ListContextTestProps} from '../App/App.test';
import { act } from '@testing-library/react';


describe('DataSizePicker', () => {
    const mockFetch = jest.fn()
    const picker = mount(
    <UsersListContext.Provider
    value={{...ListContextTestProps, loading: false, fetchUsersList: mockFetch}}
    >
        <DataSizePicker/>
    </UsersListContext.Provider>
    )

    afterEach(() => {
        jest.clearAllMocks()
    })
    
    it('shows two buttons', () => {
        expect(picker.find('button').length).toEqual(2)
    })

    describe('small data-size button click', () => {
        const smallDataSize = picker.find('button[name="smallDataSize"]')
        beforeEach(()=> {
            act(()=> {
                smallDataSize.simulate('click')
            })
        })
        it('calls fetch function with "small" payload', ()=> {
            expect(mockFetch).toHaveBeenCalledWith('small')
        })
    })

    describe('large data-size button click', () => {
        const largeDataSize = picker.find('button[name="largeDataSize"]')
        beforeEach(()=> {
            act(()=> {
                largeDataSize.simulate('click')
            })
        })
        
        it('calls fetch function with "large" payload', ()=> {
            expect(mockFetch).toHaveBeenCalledWith('large')
        })

        it('is disabled', () => {
            const largeDataSize = picker.find('button[name="largeDataSize"]')
            expect(largeDataSize.prop('disabled')).toEqual(true)
        })
    })

})


describe('DataSizePicker in error state', () => {
    const picker = mount(
        <UsersListContext.Provider
        value={{...ListContextTestProps, error:true}}
        >
            <DataSizePicker/>
        </UsersListContext.Provider>
        )

    it('renders active small data-size button', () => {
        const button = picker.find('button').at(0)
        expect(button.prop('disabled')).toEqual(false)
    })

    it('renders active large data-size button', () => {
        const button = picker.find('button').at(1)
        expect(button.prop('disabled')).toEqual(false)
    })

})
