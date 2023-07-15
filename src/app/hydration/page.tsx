import Hydrate from "@/utils/hydrate-client";
import getQueryClient from "@/utils/query-client";
import { dehydrate } from "@tanstack/query-core";

import ListUsers from "./list-users";

import type { User } from "../types";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  const users = await getUsers();

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers users={users} />
    </Hydrate>
  );
}
