import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import './NewBookForm.css';

// This component allows the user to input book data into a form
// and add them as a new book object to the "books" array in the App component.
// How can you give NewBookForm access to the App's "books" state? (not just the variable)

const NewBookForm = () => {
	const [title, setTitle] = useState();
	const [author, setAuthor] = useState();
	const [datePublished, setDatePublished] = useState();
	const [pages, setPages] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newBookObj = {
			id: books.length,
			title,
			author,
			datePublished,
			pages,
		};

		books([...books, newBookObj]);
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<InputField label="Title" value={title} onChange={setTitle} />
			<InputField label="Author" value={author} onChange={author} />
			<InputField label="Date Published" value={datePublished} type="date" />
			<button type="submit">Add Book</button>
		</form>
	);
};

export default NewBookForm;
