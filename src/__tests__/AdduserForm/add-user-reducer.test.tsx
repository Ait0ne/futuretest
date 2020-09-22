import {formReducer, initialFormState} from '../../components/AddUserForm/add-user.reducer';

describe('formReducer', () => {

    it('handles id change', () => {
        expect(formReducer(initialFormState, {type: 'id', payload: '1'})).toEqual({...initialFormState, id:'1'})
    })

    it('handles firstName change', () => {
        expect(formReducer(initialFormState, {type: 'firstName', payload: '1'})).toEqual({...initialFormState, firstName:'1'})
    })

    it('handles lastname change', () => {
        expect(formReducer(initialFormState, {type: 'lastName', payload: '1'})).toEqual({...initialFormState, lastName:'1'})
    })

    it('handles email change', () => {
        expect(formReducer(initialFormState, {type: 'email', payload: '1'})).toEqual({...initialFormState, email:'1'})
    })

    it('handles phone change', () => {
        expect(formReducer(initialFormState, {type: 'phone', payload: '1'})).toEqual({...initialFormState, phone:'1'})
    })

    it('handles clear', () => {
        expect(formReducer({...initialFormState, phone:'1'}, {type: 'CLEAR'})).toEqual(initialFormState)
    })

})