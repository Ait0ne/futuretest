import React from 'react';
import {mount} from 'enzyme';
import Main from '../../components/Main/main.component';
import {testData} from '../../testData';

describe('Main component', () => {
    const main = mount(<Main addRow={jest.fn()} list={testData}/>)
    
    it('renders correctly', ()=> {
        expect(main).toMatchSnapshot()
    })

    it('renders AddUser component', () => {
        expect(main.find('AddUser').length).toEqual(1)
    })

    it('renders SearchField component', () => {
        expect(main.find('SearchField').length).toEqual(1)
    })

    it('renders Table component', ()=> {
        expect(main.find('Table').length).toEqual(1)
    })

    it('renders Pagination component', () => {
        expect(main.find('Pagination').length).toEqual(1)
    })

    it('doesnt render Pagination if number of rows in a list is too low', () => {
        const mainShortList = mount(<Main addRow={jest.fn()} list={testData.slice(0,3)}/>)
        expect(mainShortList.find('Pagination').length).toEqual(0)
    })

    it('doesnt render UserInfo component', () => {
        expect(main.find('UserInfo').length).toEqual(0)
    })
})