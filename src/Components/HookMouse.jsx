import React, { useState,useEffect } from 'react'

function HookMouse() {

	const [ x, setX ] = useState(0)
	const [ y, setY ] = useState(0)

	const logMousePointer = e => {
		setX(e.clientX)
		setY(e.clientY)
		console.log('MOuse Event')
	}

	useEffect(() => {
		window.addEventListener('mousemove', logMousePointer)
	}, [])

	return (
		<div>
			Hooks X - {x} Y - {y}
		</div>
	)
}

export default HookMouse