import React from 'react';
import Layout from "../Layout";
import Nav from "./nav";
import SideDraw from "./Draw/sideDrawer";
import MainBackdrop from "./Draw/mainBackdrop";


class MainMenu extends React.Component{
    state = {
        sideDrawOpen: false
    };

    drawToggleClickHandler = () => {
        this.setState((prevState) => {
            return{ sideDrawOpen: !prevState.sideDrawOpen}
        });
    };

    backdropHandler = () => {
        this.setState({sideDrawOpen: false})
    };

    render() {
        let mainBackdrop;
        if(this.state.sideDrawOpen){
            mainBackdrop = <MainBackdrop backdropClick={this.backdropHandler}/>
        }
        return(
            <Layout>
                <Nav drowserClickHandler={this.drawToggleClickHandler} />
                <SideDraw show={this.state.sideDrawOpen} />
                {mainBackdrop}
            </Layout>
        )
    }

};


export default MainMenu;