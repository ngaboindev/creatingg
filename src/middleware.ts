/* eslint-disable consistent-return */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const signedinPages = ['/dashboard', '/projects'];
const authPages = ['/signin', '/signup'];

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('CREATINGG_ACCESS_TOKEN');
  const { url } = req;

  if (!verify && signedinPages.some((path) => url.includes(path))) {
    return NextResponse.redirect(`${req.nextUrl.origin}/signin`);
  }

  if (verify && authPages.some((path) => url.includes(path))) {
    return NextResponse.redirect(`${req.nextUrl.origin}/dashboard`);
  }
}
