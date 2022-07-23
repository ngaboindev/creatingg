import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import prisma from '@/lib/prisma';

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '8h',
      }
    );
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('CREATINGG_ACCESS_TOKEN', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    );

    res.json(user);
  } else {
    res.status(401);
    res.json({ error: 'Email or Password is wrong' });
  }
});

export default apiRoute;
