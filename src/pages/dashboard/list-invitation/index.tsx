import React from "react";

import { MetaData } from "@/components/data-display";
import ListInvitationModule from "@/modules/list_invitation_module/ui";

const ListInvitation = () => {
  return (
    <>
      <MetaData
        title="List Undangan - Dangand"
        description="Undangan digital, buat undangan dengan cepat, mudah dan efisien"
      />
      <ListInvitationModule />
    </>
  );
};

export default ListInvitation;
