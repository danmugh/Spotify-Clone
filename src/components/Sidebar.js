import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from "./SidebarOption";
import {userDataLayerValue} from "../DataLayer";
import Logo from "../img/img_1.jpg";

const Sidebar = () => {

    const [{ playlists }, dispatch] = userDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                 // src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
                 src={Logo}
                 alt=""

            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            { playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

            <SidebarOption title="Hip Hop" />
            <SidebarOption title="Rock"  />
            <SidebarOption title="RnB" />

        </div>
    );
};

export default Sidebar;
