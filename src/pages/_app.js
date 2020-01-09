import React from "react";
import App from "next/app";
import client from "../client";

import Nav from "../components/Navigation/nav";





function myApp ({ Component, pageProps, customize}){

    return(
        <React.Fragment>
            <Nav {...customize}/>
            <Component {...pageProps} />
        </React.Fragment>
    );
}


myApp.getInitialProps = async appContext => {
    const customize = await client.fetch(
        `
            *[_type == "customize"][0]{
                ...
            }
        `
    )
    try{
        const appProps = await  App.getInitialProps(appContext);
        if(!appProps.pageProps.page) throw new Error("404");
        return { ...appProps, customize};
    }catch (e) {
        if(appContext.ctx?.res) appContext.ctx.res.statusCode = 404;
        return {customize}
    }
};

export default myApp;