import styles from './StatsRightHorizontalCard.module.scss'
import {BsArrowDown, BsCurrencyDollar} from 'react-icons/bs';
import {IoStatsChart} from 'react-icons/io5';
import {FaUserAlt} from 'react-icons/fa';

const StatsRightHorizontalCard = ({color,title,icon,value,percent}) => {
    return (
        <>
            <div className={styles.card}>
                <div>
                    <p className={'text-xxs'}>{title}</p>
                    <div className={'flex-center gap-05'}>
                        <span className={'fw-700 text-s'}>{value}</span>
                        <h4 className={color == 'success' ? 'color-success text-xxs':'color-danger text-xxs'}>▲ {percent}%</h4>
                    </div>
                </div>
                <div className={styles.icons} datatype={color == 'success' ? 'success':'danger'}>
                    {icon == 'dollar' ? <BsCurrencyDollar /> :(icon == 'stats' ? <IoStatsChart/>: <FaUserAlt/>)}
                </div>
            </div>
        </>
    )
}
export default StatsRightHorizontalCard