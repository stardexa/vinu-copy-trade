import {useTranslation} from 'next-i18next'
import React, { useState } from 'react';
import styles from './PortfolioTable.module.scss'
import Image from "next/image";

const PortfolioTable = () => {
    // const {t} = useTranslation('index')
    const [searchTerm, setSearchTerm] = useState("");

    const data = [
        { id: 1, name: "BTC", img:"btc", type:"Bitcoin", buysell:"Buying", invested: "▲ 42,2%", pl: "15%", buy:"$29,611,21", sell:"$29,611,21", deadline:"1 week left" },
        { id: 2, name: "ETH", img:"eth", type:"Bitcoin", buysell:"Buying", invested: "▲ 42,2%", pl: "15%", buy:"$29,611,21", sell:"$29,611,21", deadline:"1 week left" },
        { id: 3, name: "XRP", img:"xrp", type:"Bitcoin", buysell:"Buying", invested: "▲ 42,2%", pl: "15%", buy:"$29,611,21", sell:"$29,611,21", deadline:"1 week left" },
        // Diğer veri öğeleri
    ];

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase().includes(searchTerm.toLowerCase())||
            item.buysell.toLowerCase().includes(searchTerm.toLowerCase())||
            item.invested.toLowerCase().includes(searchTerm.toLowerCase())||
            item.pl.toLowerCase().includes(searchTerm.toLowerCase())||
            item.buy.toLowerCase().includes(searchTerm.toLowerCase())||
            item.sell.toLowerCase().includes(searchTerm.toLowerCase())||
            item.deadline.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className={'container'}>
                <div className={styles.tableBox}>

                    <input
                        className={styles.searchInput}
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Market Name</th>
                                <th>Buy/Sell</th>
                                <th>Invested</th>
                                <th>P/L (%)</th>
                                <th>Sell</th>
                                <th>Buy</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody >
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td data-label="Market Name">
                                    <div className={styles.coinWrapped} >
                                        <Image src={`../../../../../../assets/images/coin/${item.img}.svg`} alt={item.name} />
                                        <h4>{item.name} /</h4>
                                        <p className={'text-xxs'}>{item.type}</p>
                                    </div>
                                </td>
                                <td data-label="Buy/Sell">
                                    <button className={'tag tag-success'}>
                                        {item.buysell}
                                    </button>
                                </td>
                                <td data-label="Invested">
                                    <h4 className={'color-success'}>{item.invested}</h4>
                                </td>
                                <td data-label="P/L (%)">
                                    <div className={styles.rangeBox}>
                                        <p>{item.pl}</p>
                                        <div> <span/> </div>
                                    </div>
                                </td>
                                <td data-label="Buy">{item.buy}</td>
                                <td data-label="Sell">{item.sell}</td>
                                <td data-label="Deadline">
                                    <button className={'tag tag-gray'}>
                                        {item.deadline}
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
export default PortfolioTable