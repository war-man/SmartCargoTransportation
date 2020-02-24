import React, { Component, Fragment } from 'react';
import { MDBInput, MDBNavbar, MDBNavLink,MDBNavbarNav, MDBNavItem, MDBCol, MDBRow, MDBFooter, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";
import { LoginMenu } from './api-authorization/LoginMenu';
import { UserManageMenu } from './api-userManage/UserManageMenu';

export class Layout extends React.Component {
    static displayName = Layout.name;
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            breakWidth: 1300,
            windowWidth: 0
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () =>
        this.setState({
            windowWidth: window.innerWidth
        });

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };

    render() {
        const navStyle = {
            paddingLeft:
                this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
        };

        const mainStyle = {
            margin: "0 6%",
            paddingTop: "5.5rem",
            paddingLeft:
                this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
        };

        const specialCaseNavbarStyles = {
            WebkitBoxOrient: "horizontal",
            flexDirection: "row"
        };

        return (
            <div className="fixed-sn white-skin">
                <MDBSideNav
                    logo="https://smartcargotransport.com/wp-content/uploads/2019/05/SmartCargo-Logo.jpg"
                    triggerOpening={this.state.toggleStateA}
                    breakWidth={this.state.breakWidth}
                    bg="https://images3.alphacoders.com/279/thumb-1920-279395.jpg"
                    mask="strong"
                    fixed
                >
                    <MDBInput
                        type="text"
                        hint="Search"
                        style={{
                            color: "#fff",
                            padding: "0 10px 8px 30px",
                            boxSizing: "border-box"
                        }}
                    />

                    <MDBSideNavNav>
                        <MDBSideNavCat
                            name="Message"
                            id="Message-cat"
                            icon="chevron-right"
                        >
                            <MDBSideNavItem >Email messages</MDBSideNavItem>
                        </MDBSideNavCat>
                        <MDBSideNavCat
                            iconRegular
                            name="Calendar"
                            id="calendar-cat"
                            icon="calendar"
                        >
                            <MDBNavLink to="/calendar"><MDBIcon icon="calendar" />Job Calendar</MDBNavLink>
                        </MDBSideNavCat>
                        <MDBSideNavCat name="Objects" id="objects-cat" icon="eye">
                            <MDBNavLink to="/job"><MDBIcon icon="calendar" />Jobs</MDBNavLink>
                        </MDBSideNavCat>
                        <MDBSideNavCat
                            name="Contact me"
                            id="contact-me-cat"
                            icon="envelope"
                        >
                            <MDBSideNavItem>Contact</MDBSideNavItem>
                        </MDBSideNavCat>
                    </MDBSideNavNav>
                </MDBSideNav>
                <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <div
                                onClick={this.handleToggleClickA}
                                key="sideNavToggleA"
                                style={{
                                    lineHeight: "32px",
                                    marginRight: "1em",
                                    verticalAlign: "middle"
                                }}
                            >
                                <MDBIcon icon="bars" color="white" size="2x" />
                            </div>
                        </MDBNavItem>
                        <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                            Smart Cargo Transportation CRM
              </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right style={specialCaseNavbarStyles}>
                        <UserManageMenu>
                        </UserManageMenu>
                    </MDBNavbarNav>
                    <MDBNavbarNav right style={specialCaseNavbarStyles}>
                        <LoginMenu>
                        </LoginMenu>
                    </MDBNavbarNav>
                </MDBNavbar>
                <main style={mainStyle}>
                    <MDBContainer fluid style={{ height: 1200 }} className="mt-5">
                        {this.props.children}
                    </MDBContainer>
                    
                </main>
                <FooterPage />
            </div>

        );
    }
}


export const FooterPage = () => {
    return (
        <MDBFooter color="gray" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
            </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.xdevs.io"> XDEVS.IO </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}