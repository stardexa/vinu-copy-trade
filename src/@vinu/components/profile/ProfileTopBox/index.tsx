import styles from './ProfileTopBox.module.scss'
import Image from "next/image";
import user1img from "../../../../../public/assets/images/profile/user1.svg";
import GreenFire from "../../../../../public/assets/images/others/greenFire.svg";
import user4img from "../../../../../public/assets/images/profile/user4.svg";
// import TR from "../../../../../public/assets/images/f";

const ProfileTopBox = ()=> {
    return (
        <>
            <div className={styles.profileBox}>
               <div className={'d-flex gap-2'}>
                   <div className={styles.nameWrapped}>
                       <Image src={user1img} width={150} alt={''} />
                       <div>
                           <h1>Barış Akarsu</h1>
                           <p>@barisakarsu</p>
                       </div>
                   </div>
                   <div className={styles.featureBox}>
                       <div>
                           <p>Follower</p>
                           <h3>0</h3>
                       </div>
                       <div >
                           <p>Copies</p>
                           <h3>23</h3>
                       </div>
                       <div >
                           <p>Transaction Day</p>
                           <h3>192</h3>
                       </div>
                       <div>
                           <p>Stability Index</p>
                           <h3>0.0/5.0</h3>
                       </div>
                   </div>
               </div>

                <div className={'flex-center gap-05'}>
                    <img src={'https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/tr.svg'} width={'20'}/>
                    Turkey
                </div>

            </div>
        </>
    )
}
export default ProfileTopBox