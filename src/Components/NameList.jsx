import React  from 'react'

function NameList() {
    const persons = [
    	{
    		id : 1,
    		age :29,
    		name : 'Mg Mg',
    		skill : 'React'    	
    	},
    	{
    		id : 2,
    		age :32,
    		name : 'Aung Aung',
    		skill : 'Vue'
    	}

    ]
	const personsList = persons.map(person => (
		<h3>
			I am {person.name}. I am {person.age} year old. I know {person.skill}.
		</h3>

	))

	return <div>{personsList}</div>
}


export default NameList
