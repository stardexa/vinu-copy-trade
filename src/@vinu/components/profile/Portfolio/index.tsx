import styles from './Portfolio.module.scss'
import Image from "next/image";
import DataTable from "../../general-components/DataTable";
import PortfolioTable from "./PortfolioTable";

const Portfolio = ()=> {

    return (
        <>
            <PortfolioTable/>
            {/*<DataTable columns={columns} data={data} />*/}
        </>
    )
}
export default Portfolio