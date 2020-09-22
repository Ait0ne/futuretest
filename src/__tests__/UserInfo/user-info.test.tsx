import React from 'react';
import {shallow} from 'enzyme';

import UserInfo from '../../components/UserInfo/user-info.component';
import {testData} from '../../testData';

describe('UserInfo component', () => {
    const userInfo = shallow(<UserInfo user={{...testData[0], id: '123'}}/>)

    it('renders correctly', () => {
        expect(userInfo).toMatchSnapshot()
    })
})
