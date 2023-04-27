import React, { useRef, useState } from "react";
import logo from "../assets/a-logo.svg";
import dollar from "../assets/icons/dollar.svg";
import vector from "../assets/icons/vector.svg";
import vector_ from "../assets/icons/vector_.svg";
import cart from "../assets/icons/cart.svg";
import { Link, NavLink } from "react-router-dom";
import MiniCart from '../components/MiniCart';
import Currency from '../components/Currency';

const Header = () => {

  const activeLink = window.location.pathname.split('/');

  const [isopenCurrency, setIsOpenCurrency] = useState(false);
  const [isopenCart, setIsOpenCart] = useState(false);
  const cartRef = useRef(null)
  const currencyRef = useRef(null)

  function handleClickCurrency() {
    setIsOpenCurrency((preVal) => !preVal);
  }

  function handleClickCart() {
    setIsOpenCart((preVal) => !preVal);
  }


  function handleClickOutside(e) {

    if (isopenCurrency && currencyRef.current && !currencyRef.current.contains(e.target)) {
      setIsOpenCurrency(false)
    }

    if (isopenCart && cartRef.current && !cartRef.current.contains(e.target)) {
      setIsOpenCart(false)
    }
  }


  // closes the dropdown menu when clicking anywhere on the page
  document.addEventListener('mousedown', handleClickOutside)

  return (
    <div className="header-container">
      <header className="container relative flex justify-content-between header mx-auto">

        <div className="flex relative" >
          <NavLink exact to="/all" className={` header-item flex justify-content-around px-16 relative`}>
            ALL
          </NavLink>

          <NavLink to='/clothes' className={`header-item flex justify-content-around px-16 relative`}>
            CLOTHES
          </NavLink>

          <NavLink to='/tech' className={`header-item flex justify-content-around px-16 relative`}>
            TECH
          </NavLink>
        </div>

        <div>
          <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
        </div>


        <div>
          <div className="flex cursor-pointer">
            <div className="dollar-vector" onClick={() => handleClickCurrency()}>
              <img src={dollar} alt="dollar" className="dollar-logo pr-10" />
              <img src={vector_} alt="vector" className="vector-logo" style={isopenCurrency ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' }} />
              <MiniCart isopen={isopenCart} ref={cartRef} />
            </div>

            <span className="relative cursor-pointer" onClick={() => handleClickCart()}>
              <img alt="" className="cart-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACAklEQVR4nO3aP2sUURSH4dcmhSIKInZaW0nQQmNvJRrLdAFBAqK9hVgZYy0WgoWKvaCgXcg3MKApRKx0U4iFIIp/WRkywmEc10Ry5m6c94FpFu7cO+e3M2d374IkSZIkSZIkSZIkSZIkSdKWNfzD8R54AhwtvcC+BjCsj6/AdOlF9jmAIfAO2Fl6oX2zH3gdQpgpvaA+uh4CuFR6MX10IQRws/Ri+mg6BPCw9GL66HAI4GnpxfTRvsYnIXVsG/B5nR9VM45jJg6vChX/O7DDAGCpUADPLP6a+6Eos+S6GOa6kzzXlnEtFOVy8lx3w1zVdxAB50NRbiVX5HmYa8rqrzkVivKYPNuBbzbg30121BiP24Db7W1s0mSxAY/4MvYphJC1L2ADHuFlCOBgUgA24BEWQwAnEopvA/6LeyGAswkBTIXzV3eCGq6GAl0htwFXYathLhToNpvrALASzn9uk8//XzjZ0Q9wH4BdpS92HB3qoPg/gDOlL3Rc7Uks/FvgEXCk9EWOu4+haLtLL6aPXoQAqkeSOvagsVnidmHHTif2Aa3TDQMobwZYBr54B5QxUf9pdxUYAAv1a9ljVVtoeYZXG/fZY1VbbSli9Vr2WNUGLUV8Q/5YtfxP6NcxT/5Y1SbqQg7qd+/8Bpvwv46VJEmSJEmSJEmSJEmSJEmSJLERPwE7Y54h8NcB/wAAAABJRU5ErkJggg=="></img>
              <span className="quantity-bubble">3</span>
              <Currency isopen={isopenCurrency} ref={currencyRef} />
            </span>
          </div>
        </div>

      </header>

    </div>
  );
};

export default Header;
