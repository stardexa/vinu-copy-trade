import React, { useState } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import styles from './DataTable.module.scss'

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
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                {Array.from({ length: pageCount }, (_, index) => (
                    <button key={index} onClick={() => gotoPage(index)}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
            </div>
            <div>
                <div>
                    Page{' '}
                    <input
                        type="number"
                        value={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(pageNumber);
                        }}
                    />{' '}
                    of {pageOptions.length}
                </div>
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
