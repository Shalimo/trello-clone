import { useState } from 'react'

export const useForm = () => {
	const [isFormOpen, setIsForOpen] = useState(false)
	const [text, setText] = useState('')

	const toggleForm = () => {
		setIsForOpen(!isFormOpen)
	}

	const handleInputChange = value => {
		setText(value)
	}

	return { isFormOpen, toggleForm, text, handleInputChange }
}
