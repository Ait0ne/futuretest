export interface FormState {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
}


export type formReducerAction = {type:'id', payload:string}|
                                {type:'firstName', payload:string}|
                                {type:'lastName', payload:string}|
                                {type:'email', payload:string}|
                                {type:'phone', payload:string}|
                                {type:'CLEAR'}

export const initialFormState:FormState = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
}

export const formReducer = (state:FormState, action:formReducerAction) => {
    console.log(action.type)
    switch(action.type) {
        case "id": 
            return {
                ...state,
                id: action.payload
            }
        case "firstName": 
            return {
                ...state,
                firstName: action.payload
            }
        case "lastName": 
            return {
                ...state,
                lastName: action.payload
            }
        case "phone": 
            return {
                ...state,
                phone: action.payload
            }
        case "email": 
            return {
                ...state,
                email: action.payload
            }
        case 'CLEAR': 
            return {
                ...initialFormState
            }
        default:
            return state
    }   
}