import React from "react";
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';

import logo from '../assets/img/logo.svg';
import "../assets/css/styles.scss";

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <ToolBar>
            <img src={ logo } alt="logo" width="150" height="100" style={{color:'white'}}></img>&nbsp;&nbsp;
            <h1>Rent a Car</h1>
          <div className="options header-options">
            <Link className="option" to="/cars"><Button variant="contained" color="primary">Cars</Button></Link>&nbsp;&nbsp;
            <Link className="option" to="/categories"><Button variant="contained" color="primary">Categories</Button></Link>&nbsp;&nbsp;
            <Link className="option" to="/contact"><Button variant="contained" color="primary">Contact</Button></Link>&nbsp;&nbsp;
          </div>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
