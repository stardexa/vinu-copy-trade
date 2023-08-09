import styles from './Statistics.module.scss'
import AreaChart from "../../charts/AreaChart";
import DonutChart from "../../charts/DonutChart";
import StatsHorizontalCard from "../../cards/StatsHorizontalCard";
import StatsVerticalCard from "../../cards/StatsVerticalCard";
import StatsRightHorizontalCard from "../../cards/StatsRightHorizontalCard";
import PolarAreaChart from "../../charts/PolarAreaChart";
import VerticalBarChart from "../../charts/VerticalBarChart";
import {BsClipboard} from "react-icons/bs";
import StackedBarChart from "../../charts/StackedBarChart";
import GaugeDonutChart from "../../charts/GaugeDonutChart";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

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
           <div className={styles.capBox}>
              <div className={' flex-column gap-2'}>
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
               <div className={styles.donutCard}>
                  <h2>Copies</h2>
                   <DonutChart/>
                   <div className={'flex-center gap-1'}>
                       <div className={styles.donutSubTitle}>
                           <span className={styles.orange} />
                           <h2>420</h2>
                           <p>Ongoing</p>
                       </div>
                       <div className={styles.donutSubTitle}>
                           <span className={styles.primary}/>
                           <h2>420</h2>
                           <p>Hold</p>
                       </div>
                       <div className={styles.donutSubTitle}>
                           <span className={styles.yellow}/>
                           <h2>420</h2>
                           <p>Done</p>
                       </div>
                   </div>
               </div>
               <div className={styles.polarCard}>
                   <h2 className={'mb-2'}>Statistics</h2>
                   <VerticalBarChart/>
                   <div className={styles.subArea}>
                      <div className={'flex-center gap-1'}>
                          <div className={styles.iconBox}><BsClipboard/></div>
                          <div>
                              <h4>Completed Project</h4>
                              <p>Current Week</p>
                          </div>
                      </div>
                       <h2>874</h2>
                   </div>
               </div>
           </div>

           <div className={'card-wrapper-item-2'}>
               <div className={styles.donutCard}>
                   <h2 className={'mb-2'}>X Statistics</h2>
                   <StackedBarChart/>
               </div>
               <div className={styles.donutCard}>
                   <h2 className={'mb-2'}>Y Analystics</h2>
                   <AreaChart
                       title={'chart test'}
                       label={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                       data1={[31,42,35,34,41,27,37]}
                       data2={[30,50,45,34,21,39,51]}
                   />
               </div>
           </div>

           <div className={'d-flex gap-1'}>
               <div className={styles.gaugeDonutCard}>
                   <h2 className={'mb-2'}>Sales</h2>
                    <GaugeDonutChart/>
                   <div className={styles.gaugeDonutSubTitle}>
                       <span className={styles.primary} />
                       <p className={'text-xxs'}>Current Week</p>
                       <h5>250</h5>
                       <span className={'text-xxs color-success'}>4,5%</span>
                   </div>
                   <div className={styles.gaugeDonutSubTitle}>
                       <span className={styles.orange} />
                       <p className={'text-xxs'}>Current Week</p>
                       <h5>250</h5>
                       <span className={'text-xxs color-success'}>4,5%</span>
                   </div>
                </div>
               <div className={styles.donutCard} style={{width:'100%'}}>
                   <h2 className={'mb-2'}>Y Analystics</h2>
                   <HorizontalBarChart/>
                </div>
           </div>
       </>
    );
};

export default Statistics;



