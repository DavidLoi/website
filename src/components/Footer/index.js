import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements'
import {FaGithub, FaLinkedin, FaFile, FaPhone} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import resume from '../../documents/resume.pdf'

const Footer = () => {
  return (
    <FooterContainer id="info">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Info</FooterLinkTitle>
                <FooterLink onClick={() => window.open("https://github.com/DavidLoi", "_blank")}>
                  <FaGithub /> Github
                </FooterLink>
                <FooterLink onClick={() => window.open("https://www.linkedin.com/in/david-loi-406180206/", "_blank")}>
                  <FaLinkedin /> Linkedin
                </FooterLink>
                <FooterLink onClick={() => window.open(resume, "_blank")}>
                  <FaFile /> Resume
                </FooterLink>
                <FooterLink>
                  <FaPhone /> 647-765-7895
                </FooterLink>
                <FooterLink >
                  <MdEmail /> d2loi@uwaterloo.ca
                </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
