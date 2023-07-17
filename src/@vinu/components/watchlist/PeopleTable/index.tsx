import {useTranslation} from 'next-i18next'
import styles from './PeopleTable.module.scss'
import Image from 'next/image';
import AddList from "../AddList";
import user4img from "../../../../../public/assets/images/profile/user4.svg";
import user1img from "../../../../../public/assets/images/profile/user1.svg";
import user3img from "../../../../../public/assets/images/profile/user3.svg";
import user2img from "../../../../../public/assets/images/profile/user2.svg";

const PeopleTable = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className={'container'}>
                <div className={styles.tableBox}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>AD</th>
                                <th>RISK SCORE</th>
                                <th>COPIERS</th>
                                <th>CHANGE</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="AD">
                                    <div className={styles.nameWrapped}>
                                        <Image src={user4img} width={40} alt={''} />
                                        <div>
                                            <h4>Barış Akarsu</h4>
                                            <p className={'text-xxs'}>@barisakarsu</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="RISK SCORE">
                                    <button className={styles.customRiskButton}>
                                        3 risk
                                    </button>
                                </td>
                                <td data-label="COPIERS">
                                    <h4 className={'color-success'}>▲ 529</h4>
                                </td>
                                <td data-label="CHANGE">$39,611,21</td>
                                <td data-label="">
                                    <button className={styles.customCopyButton}>
                                    COPY
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="AD">
                                    <div className={styles.nameWrapped}>
                                        <Image src={user1img} width={40} alt={''} />
                                        <div>
                                            <h4>Barış Akarsu</h4>
                                            <p className={'text-xxs'}>@barisakarsu</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="RISK SCORE">
                                    <button className={styles.customRiskButton}>
                                        3 risk
                                    </button>
                                </td>
                                <td data-label="COPIERS">
                                    <h4 className={'color-success'}>▲ 529</h4>
                                </td>
                                <td data-label="CHANGE">$39,611,21</td>
                                <td data-label="">
                                    <button className={styles.customCopyButton}>
                                        COPY
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="AD">
                                    <div className={styles.nameWrapped}>
                                        <Image src={user2img} width={40} alt={''} />
                                        <div>
                                            <h4>Barış Akarsu</h4>
                                            <p className={'text-xxs'}>@barisakarsu</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="RISK SCORE">
                                    <button className={styles.customRiskButton}>
                                        3 risk
                                    </button>
                                </td>
                                <td data-label="COPIERS">
                                    <h4 className={'color-success'}>▲ 529</h4>
                                </td>
                                <td data-label="CHANGE">$39,611,21</td>
                                <td data-label="">
                                    <button className={styles.customCopyButton}>
                                        COPY
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddList title={'Add Watch People List'}/>
            </div>
        </>
    )
}
export default PeopleTable