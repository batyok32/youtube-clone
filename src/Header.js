import React, {useState} from 'react'
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    const classes = useStyles();
    return (
        

        <div className='header'>
        

            <div className="header__left">
                <MenuIcon className="header__menuIcon" />
                <Link to="/">
                    <img
                        id='header__logo' 
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                        alt="youtube"
                    />
                </Link>
                
            </div>

            <div className="header__input">
                <input 

                    onChange={e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"
                />
                <Link to={`search/${inputSearch}`} >
                    <SearchIcon className="header__inputButton" />
                </Link>
            
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon header__iconsVideo" />
                <AppsIcon className="header__icon header__iconsApps" />
                <NotificationsIcon className="header__icon header__iconsNotification" />
                <Avatar
                    className='avatar' 
                    alt="Batyr Bet"
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                />
            </div>
        
        </div>
    )
}

export default Header
