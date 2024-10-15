import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>This is a home page</h1>
    </div>
  );
}
