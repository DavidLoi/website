import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="pathplanner" onClick={toggle} smooth={true} duration={500} exact='true' offset={-80}>Path Planner</SidebarLink>
                    <SidebarLink to="stocksimulation" onClick={toggle} smooth={true} duration={500} exact='true' offset={-80}>Stock Simulation</SidebarLink>
                    <SidebarLink to="tictactoe" onClick={toggle} smooth={true} duration={500} exact='true' offset={-80}>Tic Tac Toe</SidebarLink>
                    <SidebarLink to="hobbies" onClick={toggle} smooth={true} duration={500} exact='true' offset={-80}>Hobbies</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
