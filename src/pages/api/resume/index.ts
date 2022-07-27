/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-console */
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { validateRoute } from '@/lib/auth';
import prisma from '@/lib/prisma';
import type { User } from '@/types/user';

interface FileWithPath extends File {
  file: any;
  filepath: string;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(
  validateRoute(
    async (req: NextApiRequest, res: NextApiResponse, user: User) => {
      try {
        const form = formidable({});
        // @ts-ignore
        form.parse(req, async function (error, _fields, files: FileWithPath) {
          if (error) return res.status(400).json({ error });
          cloudinary.uploader.upload(
            files?.file?.filepath,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            async (error: {}, result: { url: string }) => {
              if (error) return res.status(400).json({ error });
              // save it to the database
              const { url } = result;
              const resume = await prisma.resume.create({
                data: {
                  userId: user.id,
                  url,
                },
              });
              return res.status(200).json({ success: true, resume });
            }
          );
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'error occured!' });
      }
    }
  )
);

export default apiRoute;
