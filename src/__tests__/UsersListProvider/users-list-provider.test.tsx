import React from 'react';
import {mount} from 'enzyme';
import {UsersListContext, UsersListProvider, UserListContextProps} from '../../components/UsersListProvider/users-list-provide.component';
import {testData} from '../../testData';
import { act } from '@testing-library/react';


describe('UsersListProvider', () => {
    const TestComponent = () => {
        const context:UserListContextProps|null = React.useContext(UsersListContext)
        return(
            <div>
                {
                    context?.usersList.map((row, index)=> {
                        return (
                            <span key={index} data-testid='row'>{index}</span>
                        )
                    })
                }
                {
                    context?
                    <button onClick={() =>context.fetchUsersList('small')}></button> 
                    :null
                }
            </div>
        )
    }
    const wrapper = mount(
        <UsersListProvider>
            <TestComponent/>
        </UsersListProvider>
    )
    const fetchSpy = jest.spyOn(window, "fetch").mockImplementation(():any => Promise.resolve(testData)  );

    it('should provide an empty list of users initialyy', () => {
        expect(wrapper.find("[data-testid='row']").length).toEqual(0)
    })

    it('should call fetch on click', ()=> {
        const button = wrapper.find('button')
        button.simulate('click')

        expect(fetchSpy).toHaveBeenCalledTimes(1)
    })  

})