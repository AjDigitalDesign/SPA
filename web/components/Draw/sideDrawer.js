import React from 'react';

const SideDraw = (props) => {

    let drawerClasses = 'sidedraw';
    if(props.show){
        drawerClasses ='sidedraw open';
    }


    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
            </ul>

            <style jsx>{`
                .sidedraw{
                  height: 100%;
                  background: #fff;
                  box-shadow: 2px 0px 5px rgba(0, 0, 0,0.5) ;
                  position:fixed;
                  top: 0;
                  left: 0;
                  width: 70%;
                  max-width: 400px;
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
        </nav>
    )
}


export default SideDraw;