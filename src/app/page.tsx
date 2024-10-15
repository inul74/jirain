import { Models } from "node-appwrite";
import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";

export default async function Home() {
  const user: Models.User<Models.Preferences> | null = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <UserButton />
    </div>
  );
}
