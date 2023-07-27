import styles from './Statistics.module.scss'
import AreaChart from "../../charts/AreaChart";
import DonutChart from "../../charts/DonutChart";
import StatsHorizontalCard from "../../cards/StatsHorizontalCard";
import StatsVerticalCard from "../../cards/StatsVerticalCard";
import StatsRightHorizontalCard from "../../cards/StatsRightHorizontalCard";
import PolarAreaChart from "../../charts/PolarAreaChart";
import VerticalBarChart from "../../charts/VerticalBarChart";


const Statistics = () => {
    return (
       <>
           <div className={'card-wrapper-item-3 mt-4'}>
               <StatsRightHorizontalCard
                   title={"New Tasks"}
                   value={'$24.500'}
                   percent={'42,2%'}
                   color={'success'}
                   icon={'dollar'}
               />
               <StatsRightHorizontalCard
                   title={"New Tasks"}
                   value={'$24.500'}
                   percent={'42,2%'}
                   color={'success'}
                   icon={'stats'}
               />
               <StatsRightHorizontalCard
                   title={"New Tasks"}
                   value={'$24.500'}
                   percent={'42,2%'}
                   color={'user'}
                   icon={'user'}
               />
           </div>
           <div className={'card-wrapper'}>
              <div className={'my-2 flex-column gap-1'}>
                  <StatsVerticalCard
                      title={"New Tasks"}
                      value={'780'}
                      color={'success'}
                  />
                  <StatsVerticalCard
                      title={"New Tasks"}
                      value={'740'}
                      color={'orange'}
                  />
              </div>
               <div className={styles.polarCard}>
                   {/*<PolarAreaChart/>*/}

                   <DonutChart/>
               </div>
               <div className={styles.polarCard}>
                   <VerticalBarChart/>
               </div>
           </div>
           <AreaChart
               title={'chart test'}
               label={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
               data1={[31,42,35,34,41,27,37]}
               data2={[30,50,45,34,21,39,51]}
           />
           <DonutChart/>
       </>
    );
};

export default Statistics;



