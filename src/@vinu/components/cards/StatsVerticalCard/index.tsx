import styles from './StatsVerticalCard.module.scss'
import {BsArrowDown, BsArrowUp} from "react-icons/bs";

const StatsVerticalCard = ({title,value,color}) => {
    return (
        <>
            <div className={styles.card}>
                <img src={color == 'success' ?
                    '../../../../../../assets/images/others/blueStats.svg':
                    '../../../../../../assets/images/others/orangeStats.svg' } alt={''} />
                <div>
                    <p>{title}</p>
                    <div className={'flex-center gap-05'}>
                        <span className={'fw-700 text-s'}>{value}</span>
                     </div>
                </div>
            </div>
        </>
    )
}
export default StatsVerticalCard