import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { LINKS_HEADER_ADMIN } from '../utils/links';
import Anchor from '../components/Anchor';

const AdminLayout = (props) => {
    return (
        <div className='main-layout'>
            <header>
                <nav>
                    {/* <Anchor href="/" content="home"></Anchor>
        <Anchor href="/about" content="about"></Anchor>
        <Anchor href="/contact" content="contact" ></Anchor> */}

                    {
                        LINKS_HEADER_ADMIN.map((link) => {
                            return (
                                <Anchor key={link.href} href={link.href} text={link.name}>
                                    <span style={{ fontWeight: "bold" }}>{link.name}</span>
                                </Anchor>)
                        })
                    }
                </nav>
            </header>            <Outlet />
            <footer>
                Footer admin
            </footer>
        </div>
    )
}

export default AdminLayout