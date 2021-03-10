import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {userDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    // const [token, setToken] = useState(null)
    const [{ user, token, playlists }, dispatch] = userDataLayerValue()

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            // setToken(_token)
            dispatch({
                type: "SET_TOKEN",
                token: _token
            })

            spotify.setAccessToken(_token)

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user
                })
            })

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                })
            })
        }
    }, [])

    console.log('Here my token', token)

    console.log('Here I am', user)

    console.log('Here my playlist', playlists)


  return (
    <div className="App">
        {
            token ? (
                <Player spotify={spotify}/>
            ) : (
                <Login/>
            )
        }

    </div>
  );
}


export default App;
