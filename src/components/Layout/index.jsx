import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import MiniDrawer from '../MiniDrawer'

const Layout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <MiniDrawer/>
            <main>{children}</main>
            <FooterStyle danger>
                Aimee Tacchi | Web Developer ©{' '}
                {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://nextjs.org/">NextJS</a>
            </FooterStyle>
        </>
    )
}

// Footer Styles ===
const FooterStyle = styled.footer`
  font-size: 1.5rem;
  padding: 5em 0;
  text-align: center;
`

export default Layout