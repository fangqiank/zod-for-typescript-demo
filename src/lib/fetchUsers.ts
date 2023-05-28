import {UserSchemaWithGeo} from '../models/User'
import {z} from 'zod'

const UserResults = z.array(UserSchemaWithGeo)

type UserArray = z.infer<typeof UserResults>

export const fetchUsers = async(): Promise<UserArray | undefined> => {
	try{
		const res = await fetch('https://jsonplaceholder.typicode.com/users')

		if(!res.ok)
			return undefined
		
		const userJson: UserArray = await res.json()
		
		const parsedData = UserResults.parse(userJson)

		console.log(parsedData)

		return parsedData
	}catch(err){
		if(err instanceof Error)
			console.log(err.stack)
	}
}