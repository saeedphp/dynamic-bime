const initialState = {
    searchResults: {},
    generatedUrl: {}
};

export default function searchState(state = initialState, action){
    const {type, payload} = action;

    switch (type){
        case 'cms/common/Search':
            return {
                ...state,
                searchResults: payload?.result
            }
        default:
            return state
    }
}