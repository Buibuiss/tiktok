// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import Tippy from '@tippyjs/react/headless';
import AccountReview from './AccountReview';

const cx = classNames.bind(styles);

function AccountItem() {
    const rederReview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountReview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[1000, 0]} placement="bottom" render={rederReview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/52d24b797e5681612d7e58452808e6eb.jpeg?lk3s=30310797&nonce=19669&refresh_token=39efb34a3b683287a8ada3bf1365666c&x-expires=1715760000&x-signature=0eFeoZhLUD2BDj%2FF64Ro8a%2B6dwA%3D&shp=30310797&shcp=811c9dc5"
                        alt="aaa"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>BUBU</strong>
                            <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>NGTHINHUNG</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
