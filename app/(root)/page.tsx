import { SignedIn, UserButton } from "@clerk/nextjs";

import Header from "@/components/Header";
import Image from "next/image";
import AddDocumentButton from "@/components/AddDocumentButton";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getDocuments } from "@/lib/actions/room.actions";
import Link from "next/link";
import { dateConverter } from "@/lib/utils";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const roomDocuments = await getDocuments(
    clerkUser.emailAddresses[0].emailAddress
  );
  console.log("Room Documents: ", roomDocuments);
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
      {roomDocuments.data.length > 0 ? (
        <div className="document-list-container">
          <div className="document-list-title">
            <h3 className="text-28-semibold">All documents</h3>
            <AddDocumentButton
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
          <ul className="document-ul">
            {roomDocuments.data.map(
              ({ id, metadata: { title }, createdAt }: any) => (
                <li key={id} className="document-list-item">
                  <Link
                    href={`/documents/${id}`}
                    className="flex flex-1 items-center gap-4"
                  >
                    <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                      <Image
                        src={"/assets/icons/doc.svg"}
                        height={40}
                        width={40}
                        alt="file"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="line-clamp-1 text-lg">{title}</p>
                      <p className="text-sm font-light text-blue-100">
                        Created about {dateConverter(createdAt)}
                      </p>
                    </div>
                  </Link>
                  {/*TODO: Delete Button */}
                </li>
              )
            )}
          </ul>
        </div>
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
