/* eslint-disable consistent-return */
import type { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { validateRoute } from '@/lib/auth';
import prisma from '@/lib/prisma';

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method - '${req.method}' Not Allowed` });
  },
});

apiRoute.get(
  validateRoute(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const id = req?.query?.id as unknown as number;
      const project = await prisma.project.findFirst({
        where: {
          id,
        },
      });

      res.json({ project });
    } catch (error) {
      return res.status(400).json({ error: 'error occured!' });
    }
  })
);

apiRoute.delete(
  validateRoute(
    async (req: NextApiRequest, res: NextApiResponse, user: User) => {
      try {
        const projectID = req?.query?.id as unknown as number;
        const project = await prisma.project.deleteMany({
          where: {
            AND: [
              {
                id: +projectID,
              },
              {
                userId: user.id,
              },
            ],
          },
        });

        res.json(project);
      } catch (error) {
        return res.status(400).json({ error: 'error occured!' });
      }
    }
  )
);

export default apiRoute;
