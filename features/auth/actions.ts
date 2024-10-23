'use server';

import { cookies } from 'next/headers';
import { Account, Client } from 'node-appwrite';
import { AUTH_COOKIE } from './constants';

export const getCurrent = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const sesion = await cookies().get(AUTH_COOKIE);

    if (!sesion) {
      return null;
    }

    const account = new Account(client);

    return await account.get();
  } catch (err) {
    return console.log('Something went wrong: ', err);
  }
};
