import styles from './Chart.module.scss'
import Image from "next/image";
import AreaChart from "../../charts/AreaChart";
import StatsHorizontalCard from "../../cards/StatsHorizontalCard";
import StatsVerticalCard from "../../cards/StatsVerticalCard";

const Chart = ()=> {
    return (
        <>
            <div className={styles.cardChart}>
                <div className={'pl-2 pb-2'}>
                    <h1>Chart</h1>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı </p>
                </div>
                <AreaChart
                    title={'chart test'}
                    label={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                    data1={[31,42,35,34,41,27,37]}
                    data2={[30,50,45,34,21,39,51]}
                />
            </div>
            <div className={'card-wrapper-item-4 mt-4'}>
                <StatsHorizontalCard
                    title={"Total X"}
                    value={'20.500'}
                    percent={'22,2%'}
                    color={'success'}
                />
                <StatsHorizontalCard
                    title={"Total Y"}
                    value={'32.100'}
                    percent={'14,2%'}
                    color={'danger'}
                />
                <StatsHorizontalCard
                    title={"Total Z"}
                    value={'29.500'}
                    percent={'42,2%'}
                    color={'success'}
                />
                <StatsHorizontalCard
                    title={"Total S"}
                    value={'20.500'}
                    percent={'82,2%'}
                    color={'success'}
                />
            </div>
            <div className={styles.customVerticalCard}>
                <StatsVerticalCard
                    title={"New Tasks"}
                    value={'12.550'}
                    color={'success'}
                />
                <StatsVerticalCard
                    title={"New Tasks"}
                    value={'24.500'}
                    color={'success'}
                />
                <StatsVerticalCard
                    title={"New Tasks"}
                    value={'20.500'}
                    color={'orange'}
                />
                <StatsVerticalCard
                    title={"New Tasks"}
                    value={'42.300'}
                    color={'orange'}
                />
                <StatsVerticalCard
                    title={"New Tasks"}
                    value={'9.500'}
                    color={'success'}
                />
                <StatsVerticalCard
                    title={"New Tasks"}
                    value={'15.650'}
                    color={'orange'}
                />
            </div>
        </>
    )
}
export default Chart