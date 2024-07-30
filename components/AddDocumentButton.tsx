"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentButton = ({ userId, email }: AddDocumentButtonProps) => {
  const router = useRouter();

  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.error(`Error happened while adding a document: ${error}`);
    }
  };
  return (
    <Button
      className="gradient-blue flex gap-1 shadow-md"
      type="submit"
      onClick={addDocumentHandler}
    >
      <Image src={"/assets/icons/add.svg"} height={24} width={24} alt="add" />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentButton;
