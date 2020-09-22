import styled from 'styled-components';

export const PaginationContainer = styled.div`
display: flex;
width:100%;
align-items: center;
justify-content: flex-end;
margin-top:5px;
>div {
display: flex;
flex-direction: row;
justify-content: flex-end;
width:60%;
}
`
interface PageProps {
    disabled?: boolean,
    active?: boolean 
}

export const Page = styled.span<PageProps>`
cursor: ${props => props.disabled? 'default': 'pointer'};
color: ${props =>  props.disabled? 'rgba(0,0,0,0.5)': 'black'};
font-size: 1.2rem;
font-weight: ${props=> props.active? 'bold': '400'};
margin-right: 5px;
`