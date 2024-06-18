import classNames from 'classnames/bind';
import styles from './AccountReview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountReview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/52d24b797e5681612d7e58452808e6eb.jpeg?lk3s=a5d48078&nonce=24734&refresh_token=083451a3e8ca4b1a08cf45c49e1c7ef1&x-expires=1717167600&x-signature=1NT5CSxDVpz349Jnp18K3P1ZgYY%3D&shp=a5d48078&shcp=b59d6b55"
                    alt="aa"
                />
                <Button primary className={cx('button-custom')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>BUBU</strong>
                    <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>NGTHINHUNG</p>
            </div>

            <p className={cx('analytics')}>
                <div>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('lable')}>Followers</span>
                </div>
                <div>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('lable')}>Likes</span>
                </div>
            </p>
        </div>
    );
}

export default AccountReview;
