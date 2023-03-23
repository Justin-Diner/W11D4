import produceData from '../mockData/produce.json';

const POPULATE = `produce/POPULATE`

export default function produceReducer(state = {}, action) {

	switch (action.type) {
			case POPULATE:
				// Normalizing Data!
				const newState = {};
				action.produce.forEach(produce => {
					newState[produce.id] = produce;
				}) 
				return newState
			default:
				return state;
	}
}

// Action Creator
export const populateProduce = () => {
    return {
			type: POPULATE,
			produce: produceData
		}
}