import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from './ApiUserManageConstants';

export class UserManageMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const userManagePath = `${ApplicationPaths.UserManage}`;
        const roleManagePath = `${ApplicationPaths.RoleManage}`;
        return (
            <Fragment>
                <NavItem>
                    <a href={userManagePath}>User Manager</a>
                </NavItem>
                <br/>
                <NavItem>
                    <a href={roleManagePath}>Role Manager</a>
                </NavItem>
            </Fragment>);
    }

}
