import React, { useState , useEffect } from 'react'

function HookCounterThree() {

	const [ count,setCount ] = useState(0)
	useEffect (() => {
		document.title = `Your count is ${count} times`
	})

	return (
		<div>
			<button onClick={() => setCount(count +1) } >Click {count} </button>
		</div>
	)

}

export default HookCounterThree