import React, {useState} from 'react';
import styles from './mobile-menu.module.css';
import {getAllMenu} from "../../data/menu";
import Link from "next/link";
import HamburIcon from "../icons/hambur";
import MenuCross from "../icons/menu-cross";
import MenuArrow from "../icons/menu-arrow";

const HamburMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [submenu, setSubmenu] = useState(false);

    const showSidebar = () => {
        setShowMenu(!showMenu);
    };

    const showSubmenu = () => {
        setSubmenu(!submenu);
    }

    const [opened, setOpened] = useState(null);

    const toggle = (id) => {
        if (opened === id) {
            return setOpened(null)
        }
        setOpened(id);
    };

    const menuItems = getAllMenu();

    return (
        <div className={styles.menu}>
            <div>
                <HamburIcon onClick={showSidebar}/>
                <div className={showMenu ? 'overlay active' : 'overlay'} onClick={showSidebar}>

                </div>
            </div>
            <nav className={showMenu ? 'nav active' : 'nav'}>
                <ul>
                    <li onClick={showSidebar}>
                        <MenuCross />
                    </li>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <Link href={menuItem.link !== '' ? `/${menuItem.link}` : ''}>
                                <a onClick={() => {toggle(menuItem.id)}}>
                                    <span onClick={menuItem.link !== '' ? showSidebar : null}>
                                        {menuItem.title}
                                    </span>
                                    {menuItem.children ? <span className={`${opened === (menuItem.id) ? 'arrow active' : 'arrow'}`}><MenuArrow /></span> : null}
                                </a>
                            </Link>
                            {menuItem.children && <ul className={`${opened === (menuItem.id) ? 'submenu active': 'submenu'}`}>
                                {menuItem.children.map((item) => (
                                    <li key={item.id}>
                                        <Link href={`/${item.link}`}>
                                            <a onClick={showSidebar}>
                                                {item.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>}
                        </li>
                    ))}
                </ul>
            </nav>
            {/*<nav className={showMenu ? 'nav active' : 'nav'}>
                <ul onClick={showSidebar}>
                    <li>
                        <MenuCross />
                    </li>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <Link href={`/${menuItem.link}`}>
                                <a onClick={menuItem.children && showSubmenu} className={menuItem.children && 'has-children'}>
                                    {menuItem.title}
                                </a>
                            </Link>
                            {menuItem.children && <ul className={submenu ? 'submenu active' : 'submenu'}>
                                {menuItem.children.map((item,index) => (
                                    <li key={index}>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>}
                        </li>
                    ))}
                </ul>
            </nav>*/}
        </div>
    );
};

export default HamburMenu;