import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

import {TableContainer, StyledTable, TableHead, TableRow} from './table.styles';
import {ISort} from '../Main/main.component';




export interface TableProps {
    list: {[s:string]:any}[],
    sort: ISort|undefined,
    changeSortType: (newSort:ISort)=> void,
    columns: string[],
    changeSelectedRow: (rowData: any) => void,
    selectedRow: Object|undefined
}

const Table: React.FC<TableProps> = ({list, sort, changeSortType, columns, selectedRow, changeSelectedRow}) => {
    
    const sortTable = (column:string) => {
        let newSort:ISort;
        if (sort?.column===column) {
            newSort = {
                column,
                direction: sort?.direction==='asc'?'desc': 'asc'
            }
        } else {
            newSort = {
                column,
                direction: 'desc'
            }
        }
        changeSortType(newSort)
    }
    

    

    return(
        <TableContainer>
            <StyledTable>
                <thead>
                    <tr>
                        {
                            columns.map((column, index)=> {
                                return (
                                <TableHead
                                key={index}
                                onClick={() => sortTable(column)}
                                sortDirection={sort?.column===column? sort.direction: undefined}
                                >
                                    {column}<FontAwesomeIcon icon={faCaretDown}/>
                                </TableHead>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((row, index)=>{
                            return (
                            <TableRow 
                            key={index}
                            active={JSON.stringify(row)===JSON.stringify(selectedRow)}
                            onClick={() => changeSelectedRow(row)}
                            >
                                {
                                    columns.map((column, index)=> {
                                        return (
                                            <td key={index}>{row[column]}</td>
                                        )
                                    })
                                }
                            </TableRow>
                            )
                        })
                    }
                </tbody>
            </StyledTable>
        </TableContainer>
    )
}

export default Table;
