import { useState } from "react";
import Image from "next/image";

import { UserPermision } from "./constants";
import UserTypeSelector from "./UserTypeSelector";
import { Button } from "./ui/button";
import {
  removeCollaborator,
  updateDocumentAccess,
} from "@/lib/actions/room.actions";

const Collaborator = ({
  roomId,
  creatorId,
  email,
  collaborator,
  user,
}: CollaboratorProps) => {
  const [userType, setUserType] = useState(
    collaborator.userType || UserPermision.VIEWER
  );
  const [loading, setLoading] = useState(false);

  const shareDocumentHandler = async (type: UserType) => {
    setLoading(true);

    await updateDocumentAccess({
      roomId,
      email,
      userType: type as UserType,
      updatedBy: user,
    });

    setLoading(false);
  };
  const removeCollaboratorHandler = async (email: string) => {
    setLoading(true);

    await removeCollaborator({ roomId, email });

    setLoading(false);
  };

  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-2">
        <Image
          className="size-9 rounded-full"
          src={collaborator.avatar}
          height={36}
          width={36}
          alt={collaborator.name}
        />
        <div>
          <p className="line-clamp-1 text-sm font-semibold leading-4 text-white">
            {collaborator.name}
            <span className="text-10-regular pl-2 text-blue-100">
              {loading && "updating..."}
            </span>
          </p>
          <p className="text-sm font-light text-blue-100">
            {collaborator.email}
          </p>
        </div>
      </div>
      {creatorId === collaborator.id ? (
        <p className="text-sm text-blue-100">Owner</p>
      ) : (
        <div className="flex items-center">
          <UserTypeSelector
            userType={userType as UserType}
            setUserType={setUserType || UserPermision.VIEWER}
            onClickHandler={shareDocumentHandler}
          />
          <Button
            className="max-w-[76px]"
            type="button"
            onClick={() => removeCollaboratorHandler(collaborator.email)}
          >
            Remove
          </Button>
        </div>
      )}
    </li>
  );
};

export default Collaborator;
