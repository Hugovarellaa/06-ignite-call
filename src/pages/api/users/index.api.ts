// http://localhost:3000/api/users

import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, username } = req.body

    const usernameAlreadyExists = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (usernameAlreadyExists) {
      return res
        .status(400)
        .json({ message: `User ${usernameAlreadyExists} already exists` })
    }

    const user = await prisma.user.create({
      data: {
        name,
        username,
      },
    })

    setCookie(
      {
        res,
      },
      '@ignite-call:userID',
      user.id,
      {
        maxAge: 60 * 60 * 24 * 7, // 7days
        path: '/',
      },
    )

    return res.status(201).json(user)
  } else {
    return res.status(405).end()
  }
}
