import styles from './Portfolio.module.scss'
import Image from "next/image";
import DataTable from "../../general-components/DataTable";

const Portfolio = ()=> {
    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Age',
            accessor: 'age',
        },
        // Diğer sütunlar...
    ];

    const data = [
        {
            name: 'John Doe',
            age: 28,
        },
        {
            name: 'Jane Smith',
            age: 32,
        },
        // Diğer veriler...
    ];

    return (
        <>
            Portfolio
            <DataTable columns={columns} data={data} />
        </>
    )
}
export default Portfolio