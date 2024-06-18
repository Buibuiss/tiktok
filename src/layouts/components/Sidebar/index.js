import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons/index';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />}></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />}></MenuItem>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />}></MenuItem>
            </Menu>

            <SuggestedAccounts label="Suggested Account" />
            <SuggestedAccounts label="Suggested Account" />
        </aside>
    );
}

export default Sidebar;
