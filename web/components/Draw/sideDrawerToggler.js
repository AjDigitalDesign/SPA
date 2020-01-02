import React from 'react'


const DrawToggle = (props) => {

    return(
        <button className="toggle_button" onClick={props.click}>
            <div className="toggle_button-line"/>
            <div className="toggle_button-line"/>
            <div className="toggle_button-line"/>

            <style jsx>{`
                .toggle_button{
                  display: flex;
                  flex-flow: column;
                  justify-content: space-around;
                  height: 25px;
                  width: 36px;
                  background: transparent;
                  border: none;
                  cursor: pointer;
                  padding: 0;
                  box-sizing: border-box;
                }
                .toggle_button:focus{
                  outline: none;
                }
                
                .toggle_button-line{
                  width: 30px;
                  height: 2px;
                  background: #ff817e;
                  
                }
                
                
            `}</style>
        </button>
    )
};

export default DrawToggle;