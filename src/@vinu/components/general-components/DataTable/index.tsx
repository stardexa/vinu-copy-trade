import React, { useState } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import styles from './DataTable.module.scss'

//üst sayfa için
// const columns = [
//     {
//         Header: 'Name',
//         accessor: 'name',
//     },
//     {
//         Header: 'Age',
//         accessor: 'age',
//     },
//     // Diğer sütunlar...
// ];
//
// const data = [
//     {
//         name: 'John Doe',
//         age: 28,
//     },
//     {
//         name: 'Jane Smith',
//         age: 32,
//     },
//     // Diğer veriler...
// ];

const DataTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state;


    //5 sayfa max kodu
    const MAX_PAGE_ITEMS = 4;



    const getPaginationGroup = () => {
        if (pageCount <= MAX_PAGE_ITEMS) {
            return Array.from({ length: pageCount }, (_, index) => index);
        }

        const middleIndex = Math.floor(MAX_PAGE_ITEMS / 2);
        const startPage =
            pageIndex >= middleIndex
                ? Math.min(pageCount - MAX_PAGE_ITEMS, pageIndex - middleIndex)
                : 0;

        return Array.from({ length: MAX_PAGE_ITEMS }, (_, index) => startPage + index);
    };
    return (
        <div className={styles.tableBox}>
            <div >
                <input
                    type="text"
                    className={styles.searchInput}
                    value={globalFilter || ''}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </div>
            <table {...getTableProps()} className={styles.table}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <div className={styles.pageBox}>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                {pageIndex > 0 && (
                    <>
                        <button onClick={() => gotoPage(0)}>1</button>
                        {pageIndex > 1 && <span>...</span>}
                    </>
                )}
                {getPaginationGroup().map(pageIdx => (
                    <button
                        key={pageIdx}
                        onClick={() => gotoPage(pageIdx)}
                        className={pageIndex === pageIdx ? 'active' : ''}
                    >
                        {pageIdx + 1}
                    </button>
                ))}
                {pageIndex < pageCount - 2 && (
                    <>
                        {pageIndex < pageCount - 3 && <span>...</span>}
                        <button onClick={() => gotoPage(pageCount - 1)}>{pageCount}</button>
                    </>
                )}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>

                {/*<button onClick={() => previousPage()} disabled={!canPreviousPage} className={styles.prev}>*/}
                {/*    ≺*/}
                {/*</button>*/}
                {/*{Array.from({ length: pageCount }, (_, index) => (*/}
                {/*    <button key={index} onClick={() => gotoPage(index)}*/}
                {/*            className={pageIndex === index ? styles.buttonActive : ''}*/}
                {/*    >*/}
                {/*        {index + 1}*/}
                {/*    </button>*/}
                {/*))}*/}
                {/*<button onClick={() => nextPage()} disabled={!canNextPage} className={styles.next}>*/}
                {/*    ≻*/}
                {/*</button>*/}
            </div>
            <div>
                <p>
                    Page
                    {pageIndex + 1}
                    of {pageOptions.length}
                </p>
                <div>
                    Show{' '}
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 25, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>{' '}
                    entries
                </div>
            </div>
        </div>
    );
};

export default DataTable;
