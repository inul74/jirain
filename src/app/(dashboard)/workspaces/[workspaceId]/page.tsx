import { redirect } from "next/navigation";

import { WorkspaceIdClient } from "./client";
import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdpage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <WorkspaceIdClient />
};

export default WorkspaceIdpage;
