import React from 'react';
import Link from 'next/link';

import { SettingsIcon, NotificationIcon } from '../Icons/Icons';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__menu">
                <div className="sidebar__menu--item">
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="notification">
                        3
                    </div>
                </div>
                <div className="sidebar__menu--item">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar__menu--item">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="sidebar__menu--item">
                    <Link href='/'>
                        <a>Dashboard</a>
                    </Link>
                </div>
                <div className="sidebar__menu--item">
                    <Link href='/jobs'>
                        <a>Jobs</a>
                    </Link>
                </div>
                <div className="sidebar__menu--item">
                    <Link href='/update-ad'>
                        <a>Update Ad</a>
                    </Link>
                </div>
            </div>
            <div className="sidebar__cta">
                <div className="sidebar__cta--content">
                    <div className="box">
                        <SettingsIcon />
                    </div>
                    <div className="box">
                        <NotificationIcon />
                    </div>
                    <div className="box">
                        <img src="/images/user.png" alt="user" className="user-img"/>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;