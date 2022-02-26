export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token:"BQAx9cK6DthCY52hBXK5WDnigV1DPVEHlCijyyJZn641yoDb7FEsf6ofiVqGBFt5GbH8URAa6PJBYkqnpPxfdAmZZGuEGYb1BwKabgkonlVouxvr2btF8pKH15vY607JWveCcbZLIVl7T5l3cet1Yh3ADiyPMk3T",
};

const reducer = (state, action) => {
    console.log(action);


    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            } 

        case  'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        
        default : 
            return state;
    }
}

export default reducer;