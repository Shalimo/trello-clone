import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: 1,
		title: 'To Do',
		cards: [
			{
				id: 1,
				description: 'Lorem blablabla'
			},
			{
				id: 2,
				description: 'Lorem blablablabla'
			}
		]
	},
	{
		id: 2,
		title: 'Backlog',
		cards: [
			{
				id: 1,
				description: 'Lorem blablabla'
			},
			{
				id: 2,
				description: 'Lorem blablablabla'
			},
			{
				id: 3,
				description: 'Lorem blablablablabla'
			}
		]
	}
]

export const deskSlice = createSlice({
	name: 'trello',
	initialState,
	reducers: {
		addTitle: (state, { payload }) => {
			const newTitle = {
				id: Math.random() * (100 - 4) + 4,
				title: payload,
				cards: []
			}
			return [...state, newTitle]
		},
		addCard: (state, action) => {
			const newCard = {
				id: Math.random() * (100 - 4) + 4,
				description: action.payload.text
			}

			const newState = state.map(list => {
				if (list.id === action.payload.listID) {
					return {
						...list,
						cards: [...list.cards, newCard]
					}
				} else {
					return list
				}
			})

			console.log(action.payload)

			return newState
		}
	}
})

export const { addTitle, addCard } = deskSlice.actions

export default deskSlice.reducer
