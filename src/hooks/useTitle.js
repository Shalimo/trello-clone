import { useState } from 'react'

export const useTitle = () => {
	const [isFormTitleOpen, setIsFormTitleOpen] = useState(false)
	const [text, setText] = useState('')

	const toggleForm = () => {
		setIsFormTitleOpen(!isFormTitleOpen)
	}

	const handleInputChange = value => {
		setText(value)
	}

	return { isFormTitleOpen, toggleForm, text, handleInputChange }
}
