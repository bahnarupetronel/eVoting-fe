"use client";

import DeleteEventModal from "@/_components/modal/DeleteEventModal";
import styles from "../id/election.module.css";
import PublishEventModal from "@/_components/modal/PublishEventModal";
import { useState } from "react";
import { Button } from "@mui/material";

const Controls = ({ election, status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handlePublishModalOpen = () => {
    setIsPublishModalOpen(true);
  };
  return (
    <div>
      <div className={styles["container-btn"]}>
        <Button
          onClick={handlePublishModalOpen}
          type="button"
          variant="outlined"
          disabled={status !== "Urmeaza"}
        >
          Publica
        </Button>

        <Button
          type="button"
          variant="outlined"
          color="error"
          onClick={handleOpen}
        >
          Sterge
        </Button>
      </div>

      <DeleteEventModal
        election={election}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <PublishEventModal
        election={election}
        isModalOpen={isPublishModalOpen}
        setIsModalOpen={setIsPublishModalOpen}
      />
    </div>
  );
};
export default Controls;
