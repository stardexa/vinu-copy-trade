import styles from './StatsHorizontalCard.module.scss'
import {BsArrowDown, BsArrowUp} from 'react-icons/bs';

const StatsHorizontalCard = ({color,title,value,percent}) => {
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
                        {color == 'success' ? (
                            <h4 className={'color-success'}>▲ {percent}%</h4>
                        ):(

                            <h4 className={'color-danger'}>▲ {percent}%</h4>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default StatsHorizontalCard