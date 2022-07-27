/* eslint-disable consistent-return */
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import slugify from 'slugify';

import { validateRoute } from '@/lib/auth';
import prisma from '@/lib/prisma';
import type { User } from '@/types/user';

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method - '${req.method}' Not Allowed` });
  },
});

apiRoute.get(
  validateRoute(
    async (_req: NextApiRequest, res: NextApiResponse, user: User) => {
      try {
        const projects = await prisma.project.findMany({
          where: {
            userId: user.id,
          },
        });

        res.json({ ...projects });
      } catch (error) {
        return res.status(400).json({ error: 'error occured!' });
      }
    }
  )
);

apiRoute.post(
  validateRoute(
    async (req: NextApiRequest, res: NextApiResponse, user: User) => {
      try {
        const { title, projectLink, description } = req.body;
        const slug = slugify(title, { lower: true });
        const project = await prisma.project.create({
          data: {
            title,
            projectLink,
            description,
            slug,
            userId: user.id,
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
