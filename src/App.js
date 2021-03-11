import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {userDataLayerValue} from "./DataLayer";
import SmallDevice from "./SmallDevice";

const spotify = new SpotifyWebApi();

function App() {
    const [{token}, dispatch] = userDataLayerValue()

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {

            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
            });

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

            // 37i9dQZEVXcIJazRV9ISoM
            spotify.getPlaylist("3Gb6g6U9JJJHKP01l4JH23").then((response) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            })

            spotify.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            )


        }


    }, [])

    if (isMobile()) {
        return (
            <div className="App">
                <SmallDevice/>
            </div>
        );
    }

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

function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


export default App;
