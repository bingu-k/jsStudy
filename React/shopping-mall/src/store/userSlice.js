import { createSlice } from '@reduxjs/toolkit'

let sample = createSlice({
	name: 'sample',
	initialState : [ ],
	reducers : {
		addCount(state, idx){
			state[idx.payload].count += 1;
		},
		addSample(state, sample){
            console.log(sample.payload);
			//state.push(sample.payload);
		}
	}
})

export let { addCount, addSample } = sample.actions

export default sample;