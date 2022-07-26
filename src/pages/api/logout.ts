import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { validateRoute } from '@/lib/auth';

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(
  validateRoute(async (_req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
      'Set-Cookie',
      'CREATINGG_ACCESS_TOKEN=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    );
    res.send({});
  })
);

export default apiRoute;
