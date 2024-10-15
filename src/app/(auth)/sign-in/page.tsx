import { ReactElement } from "react";
import { Models } from "node-appwrite";
import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/sign-in-card";

const SignInPage: () => Promise<ReactElement> =
  async (): Promise<ReactElement> => {
    const user: Models.User<Models.Preferences> | null = await getCurrent();

    if (user) {
      redirect("/");
    }

    return <SignInCard />;
  };

export default SignInPage;
