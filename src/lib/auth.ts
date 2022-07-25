/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from './prisma';

export const validateRoute = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { CREATINGG_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;
      try {
        const { id }: any = jwt.verify(token, process.env.JWT_SECRET as string);
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("User doesn't exit");
        }
      } catch (error) {
        res.status(401).json({ error: 'Not Authorized' });
      }

      return handler(req, res, user);
    }

    res.status(401).json({ error: 'Not Authorized' });
  };
};
