"use client";



import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from 'react';
import LinkFiles from "./LinkFiles";

const Hamburger = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const hamburgerHandle = () => {

        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button
                onClick={() => hamburgerHandle()}
            ><GiHamburgerMenu />
            </button>
            {isOpen && (
                <LinkFiles></LinkFiles>
            )}
        </div>
    );
};

export default Hamburger;