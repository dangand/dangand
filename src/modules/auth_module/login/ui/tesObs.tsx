import React from "react";

import UserStore from "@/store/UserStore";
import { observer } from "mobx-react";

const TestState = observer(() => {
  return <div>{UserStore.userData.accessToken}</div>;
});

export default TestState;
