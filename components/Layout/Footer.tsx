import React, {useState, useEffect} from "react";
import SocialIcon from "../Social/SocialIcon";

function Footer() {

    return (
        <>
            <div className={`bg-black py-4 custom-transition duration-300 fixed z-50 w-full bottom-0 min-h-[80px]`}>
                <div className={"flex justify-center items-start"}>
                    <SocialIcon icon={"Github"}/>
                    <SocialIcon icon={"Facebook"}/>
                    <SocialIcon icon={"LinkedIn"}/>
                </div>
                <div className={"flex justify-center"}>
                    <div className={"flex"}>
                        <span  className={"text-white"}>Crafted by</span>
                        <span className={"flex items-center"}>
                            <img className={"w-[28px]"} src={"/assets/icon.png"}  alt={"Bojan Gagaleski"}/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;