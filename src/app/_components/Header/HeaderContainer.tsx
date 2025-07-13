"use client";

import { useState } from "react";

import Header from "./Header";

const HeaderContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return <Header isOpen={isOpen} onToggle={handleToggle} />;
}

export default HeaderContainer;
