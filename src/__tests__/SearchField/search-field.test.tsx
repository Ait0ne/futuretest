import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchField from '../../components/SearchField/search-field.component';
import {Input, Button} from '../../styles/base-styles';

describe('search field', () => {
    const changeFilterValue= jest.fn()

    const searchField = mount(<SearchField changeFilterValue={changeFilterValue}/>)
    
    it('renders correctly', () => {
        expect(searchField).toMatchSnapshot()
    })

    describe('input field', () => {
        const input:any = searchField.find('input').at(0)
        afterEach(() => {
            jest.clearAllMocks()
        })

        it('renders one input', () => {
            expect(input.length).toEqual(1)
        })

        it('is empty', () => {
            expect(input.prop('value')).toEqual('')
        })

        it('calls changeFilterValue function with correct values on enter Press', () => {
            input.instance().value = 'hello'
            input.simulate('change')
            input.simulate('keypress', {key: 'Enter'})

            expect(changeFilterValue).toHaveBeenCalledWith('hello')
        })

        it("doesn't call changeFilterValue on keypress other then enter", () => {
            input.simulate('keypress', {key: 'space'})

            expect(changeFilterValue).toHaveBeenCalledTimes(0)
        })

    })

    describe('search button', () => {
        const button = searchField.find('button').at(0)
        const input = searchField.find('input').at(0)

        it('renders one button', () => {
            expect(button.length).toEqual(1)
        })

        it('calls changeFilterValue function with correct values', () => {
            input.simulate('change', { target: { name: 'filter', value: 'andy' }})
            button.simulate('click')
            expect(changeFilterValue).toHaveBeenCalledWith('andy')
        })
    })

    describe('clear button', () => {
        const clearButton = searchField.find('FontAwesomeIcon')

        it('renders one clearFilter button', () => {
            expect(clearButton.length).toEqual(1)
        })

        it('calls changeFilterValue with correct value on click', () => {
            clearButton.simulate('click')
            expect(changeFilterValue).toHaveBeenCalledWith('')
        })

    })

})