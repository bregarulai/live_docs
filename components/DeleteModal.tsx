"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { deleteDocument } from "@/lib/actions/room.actions";

const DeleteModal = ({ roomId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteDocumentHandler = async () => {
    setLoading(true);
    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.error(
        `Something went wrong while deleting the document: ${error}`
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
          <Image
            className="mt-1"
            src={"/assets/icons/delete.svg"}
            height={20}
            width={20}
            alt="delete"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <Image
            className="mb-4"
            src={"/assets/icons/delete-modal.svg"}
            height={48}
            width={48}
            alt="delete"
          />
          <DialogTitle>Delete document</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this document? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-5">
          <DialogClose asChild className="w-full bg-dark-400 text-white">
            Cancel
          </DialogClose>
          <div className="w-full">
            <Button
              className="gradient-red w-full"
              variant={"destructive"}
              onClick={deleteDocumentHandler}
            >
              {loading ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
