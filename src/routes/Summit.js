import React, { useContext, useEffect, useState } from "react";
import { SummitMain } from "../components/SummitMain";
import { SummitPending } from "../components/SummitPending";
import { SummitCreate } from "../components/SummitCreate";
import { WebAppWrapper } from "../components/WebAppWrapper";
import { UserInfoContext } from "../components/UserInfoProvider";
import { useSummit } from "../hooks/useSummit";
import { useSummitRoomInfo } from "../hooks/useSummitRoomInfo";
import { useUid } from "../hooks/useUid";

export const Summit = () => {
  const [view, setView] = useState("pending");
  const [isInvited, setIsInvited] = useState(false);
  const [{ summitStatus }] = useContext(UserInfoContext);
  const { uid } = useUid();
  const [{ roomId }, approve] = useSummit();
  const { roomInfo } = useSummitRoomInfo(roomId);

  const switchView = () => setView(view === "pending" ? "create" : "pending");

  useEffect(() => {
    //if (summitStatus.affiliation) setView("main");
    if (summitStatus.invitation) setIsInvited(true);
  }, [summitStatus]);

  return (
    <WebAppWrapper title="サミットモード">
      {view === "pending" && (
        <SummitPending
          approve={approve}
          setCreate={switchView}
          isInvited={isInvited}
          roomInfo={roomInfo}
        />
      )}
      {view === "main" && (
        <SummitMain uid={uid} roomId={roomId} roomInfo={roomInfo} />
      )}
      {view === "create" && <SummitCreate setPending={switchView} />}
    </WebAppWrapper>
  );
};
