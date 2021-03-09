

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "45e31c6b52e749df868189f6580b2176";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            const parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {})
}

// hash: "#access_token=BQCV1wRyo03MNQftQRjzjrSAjxYU3p2F82RcZJ_o5eCICEpv7Xz1_V_dkKN9JZBPAxurOa98JnPMnR_3ZjM3zPtEw-kPONGtJ1T7JGF7JJVg3ZqLoWXkMrgMNKRpTl7AIkgWNE4-nGiK6NH2-wR2h-WHN8gxuYfcX1VSeKodFKrk4I0Q&token_type=Bearer&expires_in=3600"


// https://accounts.spotify.com/en/authorize?client_id=45e31c6b52e749df868189f6580b2176&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;