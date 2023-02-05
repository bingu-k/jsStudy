import { configureStore, createSlice } from '@reduxjs/toolkit'

let sample = createSlice({
	name: 'sample',
	initialState : [ ],
	reducers : {
		addCount(state, idx){
			state[idx.payload].count += 1;
		},
		addState(state, sample){
			state.push(sample.payload);
		}
	}
})

let user = createSlice({
	name : 'user',
	initialState : 'Kim',
	reducers : {
		changeName(){
			return 'John';
		}
	}
})

export let { changeName } = user.actions
export let { addCount, addState } = sample.actions

export default configureStore({
  reducer: {
		sample : sample.reducer,
		user : user.reducer,
	}
})