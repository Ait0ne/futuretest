import styled from 'styled-components';

interface ButtonProps {
    active?: boolean
}

export const Button = styled.button<ButtonProps>`
cursor: pointer;
min-width: 64px;
padding: 6px 16px;
color: rgba(0, 0, 0, 0.87);
text-transform: uppercase;
font-weight: 500;
border-radius:4px;
border: none;
margin: 5px;
background-color: #e0e0e0;
box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
&:disabled {
    color: rgba(0, 0, 0, 0.26)
}
`

export const Input = styled.input`
padding: 12px 25px 12px 14px;
border-radius: 4px;
width:25ch;
border: 1px solid rgba(0,0,0,0.3);
font-size: 1rem;
margin: 5px 10px;
&:focus {
    outline:none;
}

`