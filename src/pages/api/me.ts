import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { validateRoute } from '@/lib/auth';
import prisma from '@/lib/prisma';
import type { User } from '@/types/user';

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(
  validateRoute(
    async (_req: NextApiRequest, res: NextApiResponse, user: User) => {
      try {
        const userInfos = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
          include: {
            resume: true,
            userInfo: true,
          },
        });

        return res.json({ ...userInfos });
      } catch (error) {
        return res.status(400).json({ error: 'Error occured' });
      }
    }
  )
);

export default apiRoute;
