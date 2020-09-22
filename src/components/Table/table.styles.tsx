import styled from 'styled-components';


export const TableContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`

export const StyledTable = styled.table`
width:100%;
display: table;
font-family: 'Roboto', sans-serif;
border-spacing: 0;
border-collapse: collapse;
>thead>tr {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    >th {
    display: table-cell;
    padding: 12px;
}
}
`

interface TableHeadProps {
    sortDirection?: 'asc'|'desc'
}

export const TableHead = styled.th<TableHeadProps>`
cursor:pointer;
text-align: left;
text-transform: capitalize;
>svg {
    color: ${props=>props.sortDirection? 'rgb(17,17,17)' : 'rgba(17,17,17, 0.3)'};
    transition-duration: 0.3;
    transform: ${props => props.sortDirection==='asc'? 'rotate(180deg)':'none'}
}
`

interface TableRowProps {
    active?: boolean
}

export const TableRow = styled.tr<TableRowProps>`
cursor: pointer;
font-size: 0.875rem;
border-bottom: 1px solid rgba(224, 224, 224, 1);
background-color: ${props => props.active? 'rgba(0,0,0,0.1)': 'white'};
>td {
    display: table-cell;
    padding: 12px;
}
`

