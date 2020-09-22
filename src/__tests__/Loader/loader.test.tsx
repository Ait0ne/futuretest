import React from 'react';
import {shallow} from 'enzyme';
import Loader from '../../components/Loader/loader.component';
import {Spinner} from '../../components/Loader/loader.styles';


describe('loader', () => {
    const loader = shallow(<Loader/>)
    it('renders correctly', () => {
        expect(loader).toMatchSnapshot()
    })

    it('renders a spinner', ()=> {
        expect(loader.find(Spinner).length).toEqual(1)
    })

})
