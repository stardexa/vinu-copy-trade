import {useTranslation} from 'next-i18next'
import styles from './CryptoTable.module.scss'
import Image from 'next/image';
import btcImg from '../../../../../public/assets/images/coin/btc.svg'
import ethImg from '../../../../../public/assets/images/coin/eth.svg'
import usdtImg from '../../../../../public/assets/images/coin/usdt.svg'
import xrpImg from '../../../../../public/assets/images/coin/xrp.svg'
import LongGreenChart from '../../../../../public/assets/images/others/longGreenChart.svg'
import AddList from "../AddList";

const CryptoTable = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className={'container'}>
                <div className={styles.tableBox}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th >AD</th>
                                <th >GRAFİK</th>
                                <th >24 SAAT DEGİŞİM</th>
                                <th >SATIŞ</th>
                                <th >ALIŞ</th>
                                <th >52W RANGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="AD">
                                  <div className={styles.coinWrapped} >
                                      <Image src={btcImg} alt={''} />
                                      <h4>BTC /</h4>
                                      <p className={'text-xxs'}>Bitcoin</p>
                                  </div>
                                </td>
                                <td data-label="GRAFİK">
                                    <Image src={LongGreenChart} alt={''} />
                                </td>
                                <td data-label="24 SAAT DEGİŞİM">
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                </td>
                                <td data-label="SATIŞ">$29,611,21</td>
                                <td data-label="ALIŞ">$30,611,21</td>
                                <td data-label="52W RANGE">
                                    <div className={styles.rangeBox}>
                                        <p>15%</p>
                                        <div> <span/> </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="AD">
                                  <div className={styles.coinWrapped} >
                                      <Image src={ethImg} alt={''} />
                                      <h4>ETH /</h4>
                                      <p className={'text-xxs'}>Bitcoin</p>
                                  </div>
                                </td>
                                <td data-label="GRAFİK">
                                    <Image src={LongGreenChart} alt={''} />
                                </td>
                                <td data-label="24 SAAT DEGİŞİM">
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                </td>
                                <td data-label="SATIŞ">$29,611,21</td>
                                <td data-label="ALIŞ">$30,611,21</td>
                                <td data-label="52W RANGE">
                                    <div className={styles.rangeBox}>
                                        <p>15%</p>
                                        <div> <span/> </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="AD">
                                  <div className={styles.coinWrapped} >
                                      <Image src={usdtImg} alt={''} />
                                      <h4>USDT /</h4>
                                      <p className={'text-xxs'}>Bitcoin</p>
                                  </div>
                                </td>
                                <td data-label="GRAFİK">
                                    <Image src={LongGreenChart} alt={''} />
                                </td>
                                <td data-label="24 SAAT DEGİŞİM">
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                </td>
                                <td data-label="SATIŞ">$29,611,21</td>
                                <td data-label="ALIŞ">$30,611,21</td>
                                <td data-label="52W RANGE">
                                    <div className={styles.rangeBox}>
                                        <p>15%</p>
                                        <div> <span/> </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="AD">
                                  <div className={styles.coinWrapped} >
                                      <Image src={xrpImg} alt={''} />
                                      <h4>XRP /</h4>
                                      <p className={'text-xxs'}>Bitcoin</p>
                                  </div>
                                </td>
                                <td data-label="GRAFİK">
                                    <Image src={LongGreenChart} alt={''} />
                                </td>
                                <td data-label="24 SAAT DEGİŞİM">
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                </td>
                                <td data-label="SATIŞ">$29,611,21</td>
                                <td data-label="ALIŞ">$30,611,21</td>
                                <td data-label="52W RANGE">
                                    <div className={styles.rangeBox}>
                                        <p>15%</p>
                                        <div> <span/> </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddList title={'Add Watch Crypto List'}/>
            </div>
        </>
    )
}
export default CryptoTable