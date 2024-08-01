declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type AddDocumentButtonProps = {
  userId: string;
  email: string;
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchPrams: { [key: string]: string | string[] | undefined };
};

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type UserType = "creator" | "editor" | "viewer";

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users?: User[];
  currentUserType?: UserType;
};

declare type DocumentData = {
  type: string;
  id: string;
  lastConnectionAt: Date;
  createdAt: string;
  metadata: RoomMetadata;
  defaultAccesses: string[];
  groupsAccesses?: null;
  usersAccesses?: null;
};

declare type DocumentListProps = {
  roomDocuments: DocumentData[];
};

declare type DocumentCardProps = {
  document: {
    type: string;
    id: string;
    lastConnectionAt: Date;
    createdAt: string;
    metadata: RoomMetadata;
    defaultAccesses: string[];
    groupsAccesses?: null;
    usersAccesses?: null;
  };
};

declare type ThreadWrapperProps = {
  thread: ThreadData<BaseMetadata>;
};

declare type GetDocumentUsersProps = {
  roomId: string;
  currentUser: string;
  text: string;
};

declare type ShareModalProps = {
  roomId: string;
  collaborators: User[] | undefined;
  creatorId: string;
  currentUserType: UserType | undefined;
};

declare type UserTypeSelectorProps = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  onClickHandler?: (value: UserType) => void;
};

declare type CollaboratorProps = {
  roomId: string;
  creatorId: string;
  email: string;
  collaborator: User;
  user: User;
};

declare type UpdateDocumentAccessParams = {
  roomId: string;
  email: string;
  userType: UserType;
  updatedBy: User;
};

declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];
