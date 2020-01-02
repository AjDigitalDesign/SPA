import React, { Fragment } from 'react'
import Link from 'next/link'

import DrawToggle from "./Draw/sideDrawerToggler";

const Nav = (props) => {
    return (
        <header className="toolbar">
            <div className="container">
                <div className="toolbar_navigation">
                    <div className="toolbar_toggle_button">
                        <DrawToggle click={props.drowserClickHandler}/>
                    </div>
                    <div className="toolbar_logo">
                        <Link href="/">
                            <a title="logo">
                                <img src="logo.png" alt=""/>
                            </a>
                        </Link>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a title="home">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a title="About">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/feature">
                                    <a title="Feature">Feature</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service">
                                    <a title="Service">Service</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a title="Contact">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .toolbar{
                position:fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #fff;
                height: 60px;
              }
              .toolbar_navigation{
                display: flex;
                height: 100%;align-items: center;
                padding: 0 1rem;
              }
              .toolbar_logo{
                position:relative;
              }
              .toolbar_logo a{
                text-decoration: none;
                outline: none;
              }
              .toolbar_logo img{
                display: block;
                max-width: 109px;
              }
              .spacer{
                flex: 1;
              }
              .toolbar_navigation-items ul{
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
              }
              .toolbar_navigation-items li{
                padding: 0 0.5rem;
              }
              .toolbar_navigation-items a{
                color: #263a41;
                display: block;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
                padding: 0 20px;
                outline: none;
                text-decoration: none;
                
              }
              .toolbar_navigation-items a:hover,
              .toolbar_navigation-items a:focus{
                color: #ff817e;
              }
              @media(max-width: 768px){
                  .toolbar_navigation-items{
                    display: none;
                  }
                }
                
                @media (min-width: 769px) {
                  .toolbar_toogle_button{
                      display: none;
                  }
                }
            `}</style>
        </header>
    )
};

export default Nav
