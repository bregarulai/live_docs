import { SignedIn, UserButton } from "@clerk/nextjs";

import Header from "@/components/Header";
import Image from "next/image";
import AddDocumentButton from "@/components/AddDocumentButton";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const documents = [];
  return (
    <div className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents.length > 0 ? (
        <div></div>
      ) : (
        <div className="document-list-empty">
          <Image
            className="mx-auto"
            src={"/assets/icons/doc.svg"}
            height={40}
            width={40}
            alt="document"
          />
          <AddDocumentButton
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
