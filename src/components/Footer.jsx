import React from 'react'
import styles from './Footer.module.css'
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import {NavLink} from 'react-router-dom';

const Footer = () => {


    const activeStyle = {
        color:"red",
        textDecoration: "none",
        cursour:"pointer",
        // fontSize: "24px"
    }
    
    const style = {
        color: "white",
        textDecoration: "none",
        cursour:"pointer",
        // fontSize: "24px"
    }

  return (
    <div className={styles.MainContainer}>
        <div className={styles.Social}>
        <Row>
        <Col md="4" >
          <ul className={styles.footerIcons}>
            <li className={styles.socialIcons}>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="#"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMediumM />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
        </div>
        <div className={styles.Info}>
            <div>
                <p><NavLink style={({isActive}) => isActive ? activeStyle : style} to='/about'>About Us</NavLink></p>
                <p><NavLink style={({isActive}) => isActive ? activeStyle : style} to='/contactus'>Contact Us</NavLink></p>
            </div>
            <div>
            <p><NavLink style={({isActive}) => isActive ? activeStyle : style} to='/faq'>FAQ</NavLink></p>
             <p><NavLink style={({isActive}) => isActive ? activeStyle : style} to='/error'>Job Description</NavLink></p>
            </div>
        </div>
    </div>
  )
}

export default Footer