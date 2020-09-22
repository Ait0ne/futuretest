import {ISort} from '../components/Main/main.component';

export const compareFunction = (sort:ISort) => {
    let compare;
    if (sort.direction==='asc') {
        compare = (a:any, b:any) => {
                if (a[sort.column]<b[sort.column]) return 1
                else if (a[sort.column]===b[sort.column]) return 0
                else return -1
        }
    } else {
        compare = (a:any, b:any) => {
            if (a[sort.column]<b[sort.column]) return -1
            else if (a[sort.column]===b[sort.column]) return 0
            else return 1
        }
    }

    return compare
}

export const filterFunction = (usersList: any[], text: string, fields: string[]) => {
    return usersList.filter(user=> {
        let found = false;
        for (let key in fields) {
            if (user[fields[key]].toString().toLowerCase().includes(text.toLowerCase())) {
                found = true
                break
            }
        }
        return found
    })
}