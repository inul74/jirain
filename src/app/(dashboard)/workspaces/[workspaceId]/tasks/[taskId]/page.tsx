import { redirect } from "next/navigation";

import { TaskIdClient } from "./client";
import { getCurrent } from "@/features/auth/queries";


const TaskIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <TaskIdClient />;
};

export default TaskIdPage;
