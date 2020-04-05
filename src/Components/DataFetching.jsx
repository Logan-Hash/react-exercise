import React, { useState,useEffect } from 'react'
import Axios from 'axios'

function DataFetching() {

	const [post,setPost] = useState({})
	const [id,setId] = useState(1)
	const [idFromButtonClick,setIdFromButtonClick] = useState(1)

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	useEffect(() => {
		Axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
				setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])



	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<h1>Title</h1>
			<div style={{Color:"red"}}>{post.title}</div>
			<h1>Body</h1>
			<div>{post.body}</div>

		</div>
	)
}

export default DataFetching