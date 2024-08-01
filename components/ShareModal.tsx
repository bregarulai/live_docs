"use client";

import { useSelf } from "@liveblocks/react/suspense";
import { useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPermision } from "./constants";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import UserTypeSelector from "./UserTypeSelector";

const ShareModal = ({
  roomId,
  collaborators,
  creatorId,
  currentUserType,
}: ShareModalProps) => {
  const user = useSelf();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>(UserPermision.VIEWER);

  const shareDocumentHandler = async () => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          className="gradient-blue flex h-9 gap-1 px-4"
          disabled={currentUserType !== UserPermision.EDITOR}
        >
          <Image
            className="min-w-4 md:size-5"
            src={"/assets/icons/share.svg"}
            height={20}
            width={20}
            alt="share"
          />
          <p className="mr-1 hidden sm:block">Share</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <DialogTitle>Manage who can view this project</DialogTitle>
          <DialogDescription>
            Select which users can view and edi tthis document
          </DialogDescription>
        </DialogHeader>
        <Label className="mt-6 text-blue-100" htmlFor="email">
          Email address
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 rounded-md bg-dark-400">
            <Input
              className="share-input"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <UserTypeSelector userType={userType} setUserType={setUserType} />
          </div>
          <Button
            type="submit"
            className="gradient-blue flex h-full gap-1 px-5"
            onClick={shareDocumentHandler}
            disabled={loading}
          >
            {loading ? "Sending..." : "Invite"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
