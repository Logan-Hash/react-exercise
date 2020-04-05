import React, { useState , useEffect } from 'react'

function CountingClass() {

	const [ count, setCount ] = useState(0)
	useEffect( () => {
		document.title = `Your Count is ${count}`
	}
	)


	return (
		<div>
			<button onClick={() => setCount( count + 1 )} > Count {count} </button>
		</div>
	)
}

export default CountingClass