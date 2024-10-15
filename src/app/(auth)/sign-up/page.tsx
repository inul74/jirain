import { ReactElement } from "react";
import { Models } from "node-appwrite";
import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";

const SignUpPage: () => Promise<ReactElement> =
  async (): Promise<ReactElement> => {
    const user: Models.User<Models.Preferences> | null = await getCurrent();

    if (user) {
      redirect("/");
    }

    return <SignUpCard />;
  };

export default SignUpPage;
