import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import logo from "./1.png"

import "./Navigation.scss"

export default function Navigation() {
    return (
        <nav className="navigation-content">
            <div className="navigation-content__logo logo">
                <img className="logo__img" src={logo} alt="Logo CALIFORNIA" />
            </div>
            <div className="navigation-content__links-container">
                <a className="navigation-content__link" href="#">ALL PRODUCTS</a>
                <div className="navigation-content__dropdown ">
                    <div className="navigation-content__dropdown-selector">
                        <span className="navigation-content__dropdown-text">SOLUTIONS</span>
                        <div className="navigation-content__dropdown-arrow">
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="navigation-content__dropdown-wrap">
                        <div className="navigation-content__dropdown-links">
                            <a className="navigation-content__dropdown-link" href="#">first</a>
                            <a className="navigation-content__dropdown-link" href="#">second</a>
                            <a className="navigation-content__dropdown-link" href="#">third</a>
                        </div>
                    </div> 
                </div>
                <a className="navigation-content__link" href="#">ABOUT</a>
                <a className="navigation-content__link" href="#">SUPPORT</a>
            </div>
            <div className="navigation-content__icons">
            <AiOutlineSearch className="navigation-content__icon-search" size='1.5rem'/>
            <SlBasket className="navigation-content__icon-basket" size='1.5rem'/>
            </div>
        </nav>
    )
}