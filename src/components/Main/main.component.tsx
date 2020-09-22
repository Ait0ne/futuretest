import React, { Fragment, useState, useEffect, useMemo } from 'react';

import {IUser} from '../UsersListProvider/users-list-provide.component';
import Table  from '../Table/table.component';
import SearchField from '../SearchField/search-field.component';
import {filterFunction, compareFunction} from '../../helpers/index.helpers';
import {TableHeader} from './main.styles';
import AddUser from '../AddUser/add-user.component';
import Pagination from '../Pagination/pagination.component';
import UserInfo from '../UserInfo/user-info.component';


export enum TableColumns {
    id='id',
    firstName='firstName',
    lastName='lastName',
    email='email',
    phone='phone'
}

export interface ISort {
    direction: 'asc'|'desc', 
    column: string
}


interface MainProps {
    list: IUser[],
    addRow: (user:IUser) => void
}



const Main:React.FC<MainProps> = ({list, addRow}) => {
    const [unchangedList, setUnchangedList]=useState<IUser[]>([])
    const [filteredAndSortedList, setFilteredAndSortedList] = useState<IUser[]>([]) 
    const [sort, setSort] = useState<ISort|undefined>(undefined)
    const [selectedUser, setSelectedUser] = useState<IUser|undefined>()
    const [filter, setFilter] = useState('')
    const [pagination, setPagination] = useState({
        perPage: 50,
        currentPage: 0
    })

    useEffect(()=> {
        setSort(undefined)
        setUnchangedList(list)
        setPagination(p => ({...p, currentPage:0}))
        setSelectedUser(undefined)
    }, [list])

    
    useEffect(()=> {
        let filteredAndSortedList;
        if (unchangedList.length>0) {
            const fieldsForFiltering = Object.keys(TableColumns)
            filteredAndSortedList = filterFunction(unchangedList, filter, fieldsForFiltering)
            if (sort) {
                filteredAndSortedList.sort(compareFunction(sort))
            }
            setFilteredAndSortedList(filteredAndSortedList)
        }
    }, [unchangedList, filter, sort])
    
    const changeFilterValue = (text: string) => {
        setPagination(p => ({...p, currentPage:0}))
        setFilter(text)
    }

    const changeSortType = (newSort:ISort) => {
        setSort(newSort)
    }

    const setCurrentPage = (page:number) => {
        setPagination(p => ({...p, currentPage:page}))
    } 

    const changeSelectedUser = (user: IUser) => {
        setSelectedUser(user)
    }

    const paginatedList = useMemo(()=> {
        const {currentPage, perPage} = pagination
        return filteredAndSortedList.slice((currentPage)*perPage, (currentPage+1)*perPage)
    }, [filteredAndSortedList, pagination])

    return (
        <Fragment>
            <AddUser addRow={addRow}/>
            <TableHeader>
                <span>Пользователи:</span>
                <SearchField changeFilterValue={changeFilterValue}/>
            </TableHeader>
            <Table  
            list={paginatedList} 
            sort={sort} 
            changeSortType={changeSortType} 
            columns={Object.keys(TableColumns)} 
            changeSelectedRow={changeSelectedUser} 
            selectedRow={selectedUser}/>
            {
                filteredAndSortedList.length>50?
                <Pagination pagination={pagination} rowNumber={filteredAndSortedList.length} setCurrentPage={setCurrentPage} />
                :null
            }
            {
                selectedUser?
                <UserInfo user={selectedUser}/>
                :null
            }
        </Fragment>
    )
}


export default Main