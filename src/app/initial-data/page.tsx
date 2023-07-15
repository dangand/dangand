import { useEffect } from "react";

import ListUsers from "./list-users";

import type { User } from "../types";

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = (await res.json()) as User[];
//   return users;
// }

export default async function InitialData() {
  return <ListUsers />;
}
