"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const AddDocumentButton = ({ userId, email }: AddDocumentButtonProps) => {
  const addDocumentHandler = async () => {};
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
