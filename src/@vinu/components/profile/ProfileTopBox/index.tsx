import styles from './ProfileTopBox.module.scss'
import Image from "next/image";
import user1img from "../../../../../public/assets/images/profile/user1.svg";
import GreenFire from "../../../../../public/assets/images/others/greenFire.svg";
import user4img from "../../../../../public/assets/images/profile/user4.svg";

const ProfileTopBox = ()=> {
    return (
        <>
            <div className={styles.profileBox}>
                <div className={styles.nameWrapped}>
                    <Image src={user1img} width={150} alt={''} />
                    <div>
                        <h1>Barış Akarsu</h1>
                        <p>@barisakarsu</p>
                    </div>
                </div>
                <div className={styles.featureBox}>
                    <p>Follower</p>
                    <h3>0</h3>
                </div>
                <div className={styles.featureBox}>
                    <p>Copies</p>
                    <h3>23</h3>
                </div>
                <div className={styles.featureBox}>
                    <p>Transaction Day</p>
                    <h3>192</h3>
                </div>
                <div className={styles.featureBox}>
                    <p>Stability Index</p>
                    <h3>0.0/5.0</h3>
                </div>
            </div>

        </>
    )
}
export default ProfileTopBox