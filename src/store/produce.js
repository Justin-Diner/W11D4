const POPULATE = `produce/POPULATE`

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const populateProduce = () => {
    return {type: POPULATE}
}