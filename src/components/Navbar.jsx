import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import {BsCart} from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const {count} = useContext(CartContext);
    const [state] = useContext(AuthContext);

const links = [
    {
        link:"Home",
        to:"/"
    },
    {
        link:"About",
        to:"/about"
    },
    {
        link:"FAQ",
        to:"/faq"
    },
    {
        link:"ContactUs",
        to:"/contactus"
    },
    {
        link:"Products",
        to:"/products"
    },
    {
        link:"Login",
        to:"/login"
    },
    {
        link:"Cart",
        to:"/cart"
    }
]

const activeStyle = {
    color:"red",
    textDecoration: "none",
    cursour:"pointer",
    fontSize: "24px"
}

const style = {
    color: "white",
    textDecoration: "none",
    cursour:"pointer",
    fontSize: "24px"
}

  return (
    <div className={styles.Navbar}>
          {links.map(link=>{
            if(link.link ==='Cart'){
                return <div>
                        <NavLink key={link.link} to={link.to} style={({isActive}) => isActive ? activeStyle : style}>
                               <BsCart />:{count}
                         </NavLink>
                        </div>
            }else if(link.link==='Login'){
                return <div>
                <NavLink key={link.link} to={link.to} style={({isActive}) => isActive ? activeStyle : style}>
                       {state.isAuth ? "LogOut" : "Login"}
                 </NavLink>
                </div>
            }
           return <div>
                     <NavLink key={link.link} to={link.to} style={({isActive}) => isActive ? activeStyle : style}>
                        {link.link}
                     </NavLink>
                  </div>
          })}
    </div>
  )
}

export default Navbar