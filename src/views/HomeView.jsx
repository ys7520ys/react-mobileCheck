import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MobileStart from "../components/MobileStart";

const HomeView = () => {
    return (
        <>
            {/* <Header /> */}
            <Main>
                <MobileStart />
            </Main>
            {/* <Footer /> */}
        </>
    )
}

export default HomeView;