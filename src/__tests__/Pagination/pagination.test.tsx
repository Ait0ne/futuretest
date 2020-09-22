import React from 'react';
import {shallow, mount} from 'enzyme';

import Pagination, {PaginationProps} from '../../components/Pagination/pagination.component';
import {Page} from '../../components/Pagination/pagination.styles';

const props:PaginationProps = {
    rowNumber: 500,
    setCurrentPage: jest.fn(),
    pagination: {
        currentPage:0,
        perPage:50
    }
} 



describe('Pagination', () => {
    const pagination = mount(<Pagination {...props}/>)
    const navigationButtons = pagination.find(Page)
    const pageNumbers = navigationButtons.slice(2,7)
    beforeAll(()=> {
        jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
    })
    it('renders correctly', () => {
        expect(pagination).toMatchSnapshot()
    })

    it('renders 9 navigation buttons', () => {
        expect(navigationButtons.length).toEqual(9)
    })

    pageNumbers.forEach((page, index)=> {
        it('renders correct page number', () => {
            expect(page.text()).toEqual(`${index+1}`)
        })
    })
    
    

    it('sets active prop on current page', () => {
        const currentPage = pagination.find(Page).at(2)
        expect(currentPage.prop('active')).toEqual(true)
    })

    it('calls setCurrentPage function with correct values on page click', () => {
        const page = pagination.find(Page).at(4)
        page.simulate('click')
        
        expect(props.setCurrentPage).toHaveBeenCalledWith(2)
    })

    it('calls setCurrentPage function with correct values on go to first page button click', () => {
        const page = pagination.find(Page).at(0)
        page.simulate('click')

        expect(props.setCurrentPage).toHaveBeenCalledWith(0)
    })

    it('calls setCurrentPage function with correct values on go to last page button click', () => {
        const page = pagination.find(Page).at(8)
        page.simulate('click')

        expect(props.setCurrentPage).toHaveBeenCalledWith(props.rowNumber/props.pagination.perPage-1)
    })
})

describe('pagination with different props', () => {
    it('renders 6 navigation buttons for 100 rows of data', () => {
        const pagination = mount(<Pagination {...{...props, rowNumber:100}}/>)
        expect(pagination.find(Page).length).toEqual(6)
    })

    it('shows correct page numbers, when current page is set to 18', () => {
        const pagination = mount(<Pagination {...{...props, rowNumber:950, pagination:{currentPage:18, perPage: 50}}}/>)
        const pages = pagination.find(Page)
        expect(pages.at(5).text()).toEqual("18")
    })

    it('shows correct page numbers, when current page is set to 10', () => {
        const pagination = mount(<Pagination {...{...props, pagination:{currentPage:5, perPage: 50}}}/>)
        const pages = pagination.find(Page)
        expect(pages.at(4).text()).toEqual("6")
    })
})