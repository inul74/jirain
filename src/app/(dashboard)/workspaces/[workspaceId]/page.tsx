import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdpage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>Workspace Id</div>;
};

export default WorkspaceIdpage;
