export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDu2eumG7_Xn9l2IfFuqwgaElLixvADT_xZf3QhV0VhN_OLYOxk1abRgglS0403HL1RTJxK7VMzAxV2NIVqe_DUSUyTk_jZoTC6Pj4QjtQxbYPUau-OgXYmYXGWxIcwhbmjFulfyTBIrp2NPYh3pW5ogsk7MJDDjUhrxYYzH39jXL-P'
}

const reducer = (state = initialState, action) => {
    console.log('action :', action)


    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

        default :
            return state
    }
}

export default reducer;