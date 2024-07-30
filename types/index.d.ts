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
