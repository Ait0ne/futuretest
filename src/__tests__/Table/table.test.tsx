import React from 'react';
import {shallow} from 'enzyme';
import {TableColumns} from '../../components/Main/main.component';
import Table, {TableProps} from '../../components/Table/table.component';
import {testData} from '../../testData';
import {StyledTable, TableHead, TableRow} from '../../components/Table/table.styles';

const testProps:TableProps = {
    changeSortType: jest.fn(),
    columns: Object.keys(TableColumns),
    list: testData.slice(0,3),
    sort: undefined,
    changeSelectedRow: jest.fn(),
    selectedRow: undefined
}

describe('table', () => {
    const table = shallow(<Table {...testProps}/>)
    
    it('renders correctly', () => {
        expect(table).toMatchSnapshot()
    })

    it('renders one table', () => {
        expect(table.find(StyledTable).length).toEqual(1)
    })

    it('has correct number of columns', () => {
        expect(table.find(TableHead).length).toEqual(testProps.columns.length)
    })    

    it('renders correct number of rows', () => {
        expect(table.find(TableRow).length).toEqual(testProps.list.length)
    })

    describe('click on columns header', () => {
        const header = table.find(TableHead).at(0)
        header.simulate('click')
         
        it('calls sort function with correct values', ()=> {
            expect(testProps.changeSortType).toHaveBeenCalledWith({column: testProps.columns[0], direction: 'desc'})
        })
    })

    describe('click on a row', () => {
        const row = table.find(TableRow).at(0)
        row.simulate('click')

        it('calls changeSelectedRow function with correct values', () => {
            expect(testProps.changeSelectedRow).toHaveBeenCalledWith(testData[0])
        })
    })

})

describe('table with different props', () => {
    const table = shallow(<Table {...{...testProps, sort: {column: 'id', direction: 'desc'}}}/>)
    
    describe('column header', () => {
        const header = table.find(TableHead).at(0)
        header.simulate('click')
         
        it('has correct sortDirectionProp', () => {
            expect(header.prop('sortDirection')).toEqual('desc')
        })


        it('calls sort function with correct values', ()=> {
            expect(testProps.changeSortType).toHaveBeenCalledWith({column: testProps.columns[0], direction: 'asc'})
        })
    })
})



