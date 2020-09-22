import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../../App';
import {UsersListContext, UsersListProvider, UserListContextProps} from '../../components/UsersListProvider/users-list-provide.component';

export const ListContextTestProps:UserListContextProps = {
    loading: true,
    error: false,
    addUser: jest.fn(),
    usersList: [],
    fetchUsersList: jest.fn(),
    clearErrors: jest.fn(),
}

describe('app in loading state', () => {
    const app = mount(
    <UsersListContext.Provider
    value={ListContextTestProps}
    >
        <App/>
    </UsersListContext.Provider>
    )
    it('shows loader', () => {
        expect(app.find('Loader').length).toEqual(1)
    } )
})

describe('app in normal state', () => {
    const app = mount(<App/>, {
        wrappingComponent: UsersListProvider
    })
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot()
    })

    it('renders DataSizePicker', () => {
        expect(app.find('DataSizePicker').length).toEqual(1)
    })

    it("doesn't show Loader", () => {
        expect(app.find('Loader').length).toEqual(0)
    })
})

describe('app in error state', () => {
    const app = mount(
        <UsersListContext.Provider
        value={{...ListContextTestProps, error:true}}
        >
            <App/>
        </UsersListContext.Provider>
        )

    it('renders alert component', () => {
        expect(app.find('Alert').length).toEqual(1)
    })
})