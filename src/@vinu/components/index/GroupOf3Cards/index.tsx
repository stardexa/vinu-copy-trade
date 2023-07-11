import {useTranslation} from 'next-i18next'
import styles from './GroupOf3Cards.module.scss'
import Lvl1List from "./Lvl1List";
import HeaderBox from "../../general-components/HeaderBox";

const GroupOf3Cards = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className={'container'}>
                <div className={'card-wrapper-item-3'}>
                    <div className={styles.customFlex}>
                        <HeaderBox
                            title={'En Az Düşüş Gösteren'}
                            date={'7gün'}
                        />
                        <Lvl1List/>
                    </div>

                    <div className={styles.customFlex}>
                        <HeaderBox
                            title={'Gün İçi En iyi Yatırımcılar'}
                            date={'7gün'}
                        />
                        <Lvl1List/>
                    </div>

                    <div className={styles.customFlex}>
                        <HeaderBox
                            title={'İstikrarlı Yatırımcılar'}
                            date={'7gün'}
                        />
                        <Lvl1List/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GroupOf3Cards