const initialState = {
    searchResults: {
        blogPosts: [],
        insurances: []
    },
    generatedUrl: ''
};

export default function searchState(state = initialState, action){
    const {type, payload} = action;

    switch (type){
        case 'cms/common/Search':
            
            return {
                ...state,
                searchResults: payload?.result,
                generatedUrl: `?${payload.url.split('?')[1]}`
            }
        default:
            return state
    }
}