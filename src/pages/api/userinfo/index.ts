import type { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import slugify from 'slugify';

import { validateRoute } from '@/lib/auth';
import prisma from '@/lib/prisma';

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// creating or updating user personal info
apiRoute.post(
  validateRoute(
    async (req: NextApiRequest, res: NextApiResponse, user: User) => {
      const { names, githubUrl, linkedInUrl, twitterUrl, domain } = req.body;
      const slug = slugify(domain, { lower: true });

      let userInfo;
      try {
        userInfo = await prisma.userInfo.upsert({
          where: {
            userId: user.id,
          },
          update: {
            names,
            githubUrl,
            linkedInUrl,
            twitterUrl,
            slug,
          },
          create: {
            names,
            githubUrl,
            linkedInUrl,
            twitterUrl,
            slug,
            domain,
            userId: user.id,
          },
        });
      } catch (error) {
        res.status(401).json({ error: 'Domain already exists' });
        return;
      }

      res.json(userInfo);
    }
  )
);

export default apiRoute;
