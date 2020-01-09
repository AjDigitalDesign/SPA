import React from 'react';
import Link from "next/link";

const SideDraw = (props) => {

    let drawerClasses = 'sidedraw';
    if(props.show){
        drawerClasses ='sidedraw open';
    }


    return(
        <header className="side_draw_container">
            <div className="container">
                <nav className={drawerClasses}>
                    <div className="sidedraw-logo">
                        <Link href="/">
                            <a>
                                <img src="logo.png" alt=""/>
                            </a>
                        </Link>
                    </div>
                    <div className="sidedraw_menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <style jsx>{`
                .sidedraw{
                  display: flex;
                  flex-flow: column;
                  justify-content: space-evenly;
                  align-items: center;
                  height: 100%;
                  background: #fff;
                  box-shadow: 2px 0px 5px rgba(0, 0, 0,0.5) ;
                  position:fixed;
                  top: 0;
                  left: 0;
                  width: 60%;
                  max-width: 300px;
                  z-index: 200;
                  transform: translateX(-101%);
                  transition: transfrom 0.3s ease-out;
                }
                
                .sidedraw.open{
                    transform: translateX(0);
                }
                .sidedraw ul{
                    height: 100%;
                    list-style: none;
                    display: flex;
                    flex-flow: column;
                    justify-content: center; 
                }
                .sidedraw li a{
                    color: #263a41;
                    display: block;
                    font-size: 14px;
                    font-weight: 500;
                    text-transform: uppercase;
                    padding: 0 20px;
                    outline: none;
                    text-decoration: none;
                }
                
                .sidedraw a:hover,
                .sidedraw a:focus{
                  color: #ff817e;
                }
                
                .sidedraw li{
                    margin: 0.5rem 0;
                }
                .sidedraw a{
                    color: #521751;
                    text-decoration: none;
                    font-size: 1.2rem;
                }
                
                .sidedraw a:hover,
                .sidedraw a:active{
                    
                }
                
                @media(min-width: 769px){
                  .sidedraw{
                    display: none;
                  }
                }
                
            `}</style>
        </header>
    )
};


export default SideDraw;