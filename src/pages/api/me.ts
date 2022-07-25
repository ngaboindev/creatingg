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
      const resume = await prisma.resume.findUnique({
        where: {
          userId: user.id,
        },
      });

      return res.json({ ...user, resume });
    }
  )
);

export default apiRoute;
