import styles from './StatsHorizontalCard.module.scss'
import {BsArrowDown, BsArrowUp} from 'react-icons/bs';


const StatsHorizontalCard = ({color,title,value,percent}:any) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.icons} datatype={color == 'success' ? 'success':'danger'}>
                    {color == 'success' ? <BsArrowUp /> : <BsArrowDown/>}
                </div>
                <div>
                    <p>{title}</p>
                    <div className={'flex-center gap-05'}>
                        <span className={'fw-700 text-s'}>{value}</span>
                        <h4 className={color == 'success' ? 'color-success':'color-danger'}>▲ {percent}%</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StatsHorizontalCard