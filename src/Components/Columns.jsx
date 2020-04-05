import React from 'React'

function Columns() {

	const usersList = [
		{name : 'mg mg' , id = 1},
		{name : 'aun aun', id = 2}
	]
	return (
		<>
			const names = usersList.map( userList => (
				<td>{userList.name}</td>
			) )
		</>
	)
}

export default Columns