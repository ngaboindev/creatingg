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

apiRoute.delete(
  validateRoute(
    async (req: NextApiRequest, res: NextApiResponse, user: User) => {
      try {
        const resumeId = req?.query?.id as string;
        const resume = await prisma.resume.deleteMany({
          where: {
            AND: [
              {
                id: +resumeId,
              },
              {
                userId: user.id,
              },
            ],
          },
        });

        return res
          .status(200)
          .json({ message: 'resume deleted successful', resume });
      } catch (error) {
        res.status(400).json({ error });
      }
      return res.status(400).json({ error: 'Resume Not found' });
    }
  )
);

export default apiRoute;
