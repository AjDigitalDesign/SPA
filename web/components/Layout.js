import React, { Fragment } from 'react';
import Head from "./head";
import Nav from "./nav";


export default ({ children, title='LeoSpa'}) =>{

    return(
        <div className="site-main">
            <Head title={title}/>
            <Nav/>
            <div className="main-content">
                {children}
            </div>
            <footer>{'this is the footer'}</footer>
            <style jsx global>{`
                *{
                    margin: 0;
                    padding: 0;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                } 
                body{
                    color: #6c6c6f;
                    background-color: #fff;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-size: 1rem;
                    line-height: 27px;
                } 
                a{
                  -webkit-transition: all 300ms ease-in-out;
                  -o-transition: all 300ms ease-in-out;
                  transition: all 300ms ease-in-out;
                }
                a:hover, a:focus {
                  text-decoration: none;
                  outline: 0;
                }
                h1, h2, h3, h4, h5, h6 {
                  font-family: 'Rufina', serif;
                  font-weight: 700;
                }
                img {
                  display: block;
                  width: 100%;
                  height: auto;
                }
                
                ul {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                }
                
                figure {
                  margin: 0;
                }
                
                section {
                  display: block;
                  position: relative;
                  padding: 50px 0;
                  width: 100%;
                }
                
                @media screen and (min-width: 768px) {
                  .nopadd-ltf {
                    padding-left: 0;
                  }
                  .nopadd-rth {
                    padding-right: 0;
                  }
                  .nopadd {
                    padding-left: 0;
                    padding-right: 0;
                  }
                }
                /**
                 *  Common CSS
                 */
                .bg-lightred {
                  background-color: #fff9f8;
                }
                
                .btn {
                  background-color: #ff817e;
                  border-radius: 0;
                  color: #fff;
                  display: inline-block;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 0.8;
                  text-transform: uppercase;
                  min-width: 170px;
                  padding: 20px 15px;
                }
                
                .btn-round {
                  border-radius: 50px;
                }
                
                .btn-outline {
                  background-color: transparent;
                  border: 1px solid #fff;
                }
                
                .btn:focus {
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }
                
                .btn.icon-left i {
                  font-size: 20px;
                  line-height: .8;
                  margin-right: 10px;
                }
                
                .video-btn {
                  color: #555;
                  font-size: 15px;
                  font-weight: 400;
                }
                
                .video-btn:hover {
                  color: #ff817e;
                }
                
                .video-btn i {
                  border-radius: 50%;
                  background-color: #fcf5ee;
                  color: #ff817e;
                  display: inline-block;
                  line-height: 44px;
                  text-align: center;
                  margin-right: 10px;
                  height: 44px;
                  width: 44px;
                }

            `}</style>
        </div>
    )
};
