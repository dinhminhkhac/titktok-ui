import classNames from 'classnames/bind'; //avaiable input className with x-y (e.g className ={styles.item-post})
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
