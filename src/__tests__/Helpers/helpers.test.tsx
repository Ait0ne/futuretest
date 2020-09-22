import {compareFunction, filterFunction} from '../../helpers/index.helpers';
import {testData} from '../../testData';
import {TableColumns} from '../../components/Main/main.component';

describe('compareFunction', () => {
    it('compares correctly with sort direction "asc"', () => {
        expect(compareFunction({column:'id', direction: 'asc'})(testData[0], testData[1]))
        .toEqual(-1)
    })

    it('compares correctly with sort direction "desc"', () => {
        expect(compareFunction({column:'id', direction: 'desc'})(testData[0], testData[1]))
        .toEqual(1)
    })
})

describe('filterFunction', () => {
    it('works as intended', () => {
        expect(filterFunction(testData.slice(0,3),'Ning', Object.keys(TableColumns)))
        .toEqual([testData[0]])
    })
})

