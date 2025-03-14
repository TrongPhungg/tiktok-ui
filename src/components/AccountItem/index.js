import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/df93d073a542c5fb0cc617fa373a4734~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=3a30f61b&x-expires=1742090400&x-signature=WFZl5PBLFWS5B0x%2BfAJ%2FaEQfmyM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="Phung"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Trong Phung</span>
                    <FontAwesomeIcon className={cx('check-icon')}  icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Hello</span>
            </div>
        </div>
    );
}

export default AccountItem;