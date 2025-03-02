"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

import Header from "./Header";
import { Editor } from "./editor/Editor";
import ActiveCollaborators from "./ActiveCollaborators";
import { Input } from "./ui/input";
import Loader from "./Loader";
import { UserPermision } from "./constants";
import { useEditDocumentTitle } from "./customHooks";
import ShareModal from "./ShareModal";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
  users,
  currentUserType,
}: CollaborativeRoomProps) => {
  const {
    containerRef,
    editing,
    loading,
    documentTitle,
    inputRef,
    setDocumentTitle,
    setEditing,
    updateTitleHandler,
  } = useEditDocumentTitle(roomMetadata.title, roomId);

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div
              className="flex w-fit items-center justify-center gap-2"
              ref={containerRef}
            >
              {editing && !loading ? (
                <Input
                  className="document-title-input"
                  type="text"
                  value={documentTitle}
                  ref={inputRef}
                  placeholder="Enter title"
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onKeyDown={updateTitleHandler}
                  disabled={!editing}
                />
              ) : (
                <>
                  <p className="document-title">{documentTitle}</p>
                </>
              )}
              {currentUserType === UserPermision.EDITOR && !editing && (
                <Image
                  className="cursor-pointer"
                  src={"/assets/icons/edit.svg"}
                  height={24}
                  width={24}
                  alt="edit"
                  onClick={() => setEditing(true)}
                />
              )}
              {currentUserType !== UserPermision.EDITOR && !editing && (
                <p className="view-only-tag">View only</p>
              )}
              {loading && <p className="text-sm text-gray-400">saving...</p>}
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />
              <ShareModal
                roomId={roomId}
                collaborators={users}
                creatorId={roomMetadata.creatorId}
                currentUserType={currentUserType}
              />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor roomId={roomId} currentUserType={currentUserType} />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
