import { cookies } from "next/headers";
import { Account, Client, Models } from "node-appwrite";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

import { AUTH_COOKIE } from "./constants";

export const getCurrent: () => Promise<Models.User<Models.Preferences> | null> =
  async (): Promise<Models.User<Models.Preferences> | null> => {
    try {
      const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

      const session: RequestCookie | undefined = cookies().get(AUTH_COOKIE);

      if (!session) {
        return null;
      }

      client.setSession(session.value);
      const account = new Account(client);

      return await account.get();
    } catch {
      return null;
    }
  };
