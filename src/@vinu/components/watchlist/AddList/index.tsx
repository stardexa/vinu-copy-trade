import styles from './AddList.module.scss'

const AddList = ({title}:any)=> {
    return (
        <>
            <button className={styles.addListButton}>
                <span>＋</span> {title}
            </button>
        </>
    )
}
export default AddList