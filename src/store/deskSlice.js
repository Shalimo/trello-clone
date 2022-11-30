import { createSlice } from "@reduxjs/toolkit";

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
            },
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
            },
        ]
    },
]

export const deskSlice = createSlice({
    name: 'trello',
    initialState,
    reducers: {
        deskX2: (state) => {
            return [...state, ...state];
        }
    }
})

export const { deskX2 } = deskSlice.actions

export default deskSlice.reducer