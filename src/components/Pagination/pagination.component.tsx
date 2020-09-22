import React, {useEffect, useState} from 'react';


import {PaginationContainer, Page} from './pagination.styles';

export interface PaginationProps {
    pagination: {
        perPage:number,
        currentPage: number
    },
    rowNumber: number,
    setCurrentPage: (page:number) => void
}

const Pagination: React.FC<PaginationProps> = ({pagination, rowNumber, setCurrentPage}) => {
    const numberOfPages = Math.ceil(rowNumber/pagination.perPage)
    
    const [displayedPages, setDisplayedPages] = useState<number[]>([])
    
    useEffect(()=> {
        if (numberOfPages<6) {
            setDisplayedPages(Array.from(Array(numberOfPages).keys()))
        } else if (pagination.currentPage<4) {
            setDisplayedPages([0,1,2,3,4])
        } else if (pagination.currentPage>numberOfPages-5) {
            const newPages = []
            for (let i=5; i>0; i--) {
                newPages.push(numberOfPages-i)
            }
            setDisplayedPages(newPages)
        } else {
            const {currentPage} = pagination
            setDisplayedPages([currentPage-2,currentPage-1,currentPage,currentPage+1, currentPage+2])
        }
    }, [pagination, rowNumber, numberOfPages])


    return(
        <PaginationContainer>
            <div>
                <Page onClick={()=> setCurrentPage(0)}>&#171;</Page>
                <Page 
                disabled={pagination.currentPage===0}
                onClick={pagination.currentPage===0?undefined : () => setCurrentPage(pagination.currentPage-1)}
                >
                    &#8249;
                </Page>
                {
                    displayedPages.map((page, index) => {
                        return (
                            <Page
                            key={index}
                            onClick={()=> setCurrentPage(page)}
                            active={pagination.currentPage===page}
                            >
                                {page+1}
                            </Page>
                        )
                    })
                }
                <Page 
                disabled={pagination.currentPage===numberOfPages-1}
                onClick={pagination.currentPage===numberOfPages-1?undefined : () => setCurrentPage(pagination.currentPage+1)}
                >
                    &#8250;
                </Page>
                <Page onClick={()=> setCurrentPage(numberOfPages-1)} >&#187;</Page>
            </div>
        </PaginationContainer>
    )
}

export default Pagination;