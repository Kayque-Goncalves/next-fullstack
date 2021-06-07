import { NextApiRequest, NextApiResponse } from 'next'

import connect from '../../utils/databaseConnection'

export default async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
  const { db } = await connect()

  const test = await db.collection('users').insertOne({
    name: 'Kayque'
  })

  response.status(200).json(test.ops[0])
}
