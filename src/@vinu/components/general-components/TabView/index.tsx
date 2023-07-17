// import { useState } from 'react';
// import styles from './TabView.module.scss'
// import CryptoTable from "../../watchlist/CryptoTable";
// import PeopleTable from "../../watchlist/PeopleTable";
//
// const TabView = () => {
//     const [activeTab, setActiveTab] = useState(0);
//
//     const handleTabClick = (index) => {
//         setActiveTab(index);
//     };
//
//     return (
//         <div className={'container mt-2'}>
//             <div className={styles.tabButtons}>
//                 <button
//                     className={activeTab === 0 ? styles.activeTab : ''}
//                     onClick={() => handleTabClick(0)}
//                 >
//                     Tab 1
//                 </button>
//                 <button
//                     className={activeTab === 1 ? styles.activeTab : ''}
//                     onClick={() => handleTabClick(1)}
//                 >
//                     Tab 2
//                 </button>
//                 <button
//                     className={activeTab === 2 ? styles.activeTab : ''}
//                     onClick={() => handleTabClick(2)}
//                 >
//                     Tab 3
//                 </button>
//             </div>
//
//             <div className="tab-content">
//                 {activeTab === 0 && <CryptoTable/>}
//                 {activeTab === 1 && <PeopleTable/>}
//                 {activeTab === 2 && <div>Content for Tab 3</div>}
//             </div>
//         </div>
//     );
// };
//
// export default TabView;


import React, { useState } from 'react';
import styles from './TabView.module.scss'

function TabView({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={'container mt-2'}>
            <div className={styles.tabButtons}>
                {data.map((item, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? styles.activeTab : ''}
                        onClick={() => handleTabClick(index)}
                    >
                        {item.tabTitle}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {data[activeTab].type === 'component' ? (
                    React.createElement(data[activeTab].content)
                ) : (
                    data[activeTab].content
                )}
            </div>
        </div>
    );
}

export default TabView;