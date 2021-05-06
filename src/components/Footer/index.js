import React, { useState } from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
import { FaGithub, FaLinkedin, FaFile, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import resume from "../../documents/resume.pdf";

const Footer = () => {
  let phoneNumber = "647-765-7895";
  let email = "d2loi@uwaterloo.ca";
  const [show, setShow] = useState(false);

  return (
    <FooterContainer id="info">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Info</FooterLinkTitle>
              <FooterLink
                onClick={() =>
                  window.open("https://github.com/DavidLoi", "_blank")
                }
              >
                <FaGithub /> Github
              </FooterLink>
              <FooterLink
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/david-loi-406180206/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin /> Linkedin
              </FooterLink>
              <FooterLink onClick={() => window.open(resume, "_blank")}>
                <FaFile /> Resume
              </FooterLink>
              <FooterLink
                onClick={() => {
                  navigator.clipboard.writeText(phoneNumber);
                  setShow(true);
                }}
              >
                <FaPhone /> {phoneNumber}
              </FooterLink>
              <FooterLink
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  setShow(true);
                }}
              >
                <MdEmail /> {email}
              </FooterLink>
              <Toast
                style={{ position: "fixed", bottom: 16 }}
                onClose={() => setShow(false)}
                show={show}
                delay={1000}
                autohide
              >
                <ToastHeader closeButton={false}>
                  <strong className="mr-auto" style={{ color: "white" }}>
                    Copied to clipboard!
                  </strong>
                </ToastHeader>
              </Toast>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
