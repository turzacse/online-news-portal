import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import LeftNav from "../../Components/LeftNav/LeftNav";
import Navber from "../../Components/Navber/Navber";
import RightNav from "../../Components/RightNav/RightNav";

const Home = () => {

    

    return (
        <div>
            <Header></Header>
            this is home
            <Navber></Navber>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                <div className="border">
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2 border">Middle</div>
                <div className="">
                <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;