import styles from './Portfolio.module.scss'
import Image from "next/image";
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