import classNames from 'classnames/bind'; //avaiable input className with x-y (e.g className ={styles.item-post})
import Tippy from '@tippyjs/react/headless'; //the complete tooltip, popover, dropdown, and menu solution for the web
import MenuItems from './MenuItems';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItems key={index} data={item} />;
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive //Determines if the tippy is interactive, i.e. it can be hovered over or clicked without hiding.
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
