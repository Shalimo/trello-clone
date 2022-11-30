import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: `list-${1}`,
		title: 'To Do',
		cards: [
			{
				id: `card-${1}`,
				description: 'Lorem blablabla'
			},
			{
				id: `card-${2}`,
				description: 'Lorem blablablabla'
			}
		]
	},
	{
		id: `list-${2}`,
		title: 'Backlog',
		cards: [
			{
				id: `card-${3}`,
				description: 'Lorem blablabla'
			},
			{
				id: `card-${4}`,
				description: 'Lorem blablablabla'
			},
			{
				id: `card-${5}`,
				description: 'Lorem blablablablabla'
			},
			{
				id: `card-${6}`,
				description: 'Lorem blablablablablablablablablabla'
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
				id: `list-${Math.random() * (100 - 3) + 3}`,
				title: payload,
				cards: []
			}
			return [...state, newTitle]
		},
		addCard: (state, action) => {
			const newCard = {
				id: `card-${Math.random() * (100 - 7) + 7}`,
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
