"use client";

import ChiefComplaintQuestionnaire from "@components/chief-complaint-questionnaries";
import { Modal } from "antd";

export default function ChiefComplaintQuestionnairePage() {

  return (
    <Modal
      open={true}
      width={"100%"}
      centered
    >
      <ChiefComplaintQuestionnaire />
    </Modal>
  );
}
