import { useEffect, useRef, useState } from "react";

export const useEditDocumentTitle = (roomTitle: string) => {
  const [documentTitle, setDocumentTitle] = useState(roomTitle);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    documentTitle,
    setDocumentTitle,
    editing,
    setEditing,
    loading,
    setLoading,
    containerRef,
    inputRef,
    updateTitleHandler,
  };
};
