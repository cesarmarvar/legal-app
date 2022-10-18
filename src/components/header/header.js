import { useNavigate } from "react-router-dom";
import { FlexRow } from "../../utils";
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Title, Menu, MenuOption } from "./styles";
import './header.css'
import { useAuth } from "../../context/auth-context";

function Header() {

  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [ isOpen, setOpen ] = useState(false)
  const [ menuClass, setMenuClass ] = useState("menu hidden")
  const [ isMenuClicked, setIsMenuClicked ] = useState(false)

  function updateMenu() {
    if(!isMenuClicked){
      setMenuClass("menu visible")
    }
    else {
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  

  function handleNavClick(opt) {
    switch (opt) {
      case 1:
        navigate('/');
        setOpen(false);
        setIsMenuClicked(false);
        updateMenu();
        break;
      case 2:
        navigate('/questions')
        setOpen(false);
        setIsMenuClicked(false);
        updateMenu();
        break;
      case 3:
        navigate('/lawyers')
        setOpen(false);
        setIsMenuClicked(false);
        updateMenu();
        break;
      case 5:
        navigate('/signup')
        setOpen(false);
        setIsMenuClicked(false);
        updateMenu();
        break;
      case 6:
        navigate('/')
        setOpen(false);
        setIsMenuClicked(false);
        updateMenu();
        logout();
        break;
      case 7:
        navigate('/show-profile')
        setOpen(false);
        setIsMenuClicked(false);
        updateMenu();
        break;
    }
  }

  return(
    <>
      <header style={{padding: "1rem"}}>
        <Menu className="burger-menu" onClick={updateMenu}>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20}/>
        </Menu>
        <FlexRow style={{justifyContent: "center"}}>
          <Title
          onClick={() => navigate(`/`)}
          style={{cursor: "pointer"}}>Legal</Title>
        </FlexRow>
      </header>
      <div className={menuClass}>
        <div className="menu-content">
          <MenuOption onClick={() => handleNavClick(1)}>Lawyer Directory</MenuOption>
          <MenuOption onClick={() => handleNavClick(2)}>Free QA </MenuOption>
          <MenuOption onClick={() => handleNavClick(3)}>Abogados, Contact me</MenuOption>
          <MenuOption onClick={() => handleNavClick(4)}>Im a lawyer</MenuOption>
          {!user ? <MenuOption onClick={() => handleNavClick(5)}><strong>Sign in</strong></MenuOption> : 
          <><MenuOption onClick={() => handleNavClick(7)}>My profile</MenuOption>
          <MenuOption onClick={() => handleNavClick(6)}><strong>Logout</strong></MenuOption></>}
        </div>
      </div>
    </>
  )
}

export default Header;