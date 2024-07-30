import DocumentCard from "./DocumentCard";

const DocumentList = ({ roomDocuments }: DocumentListProps) => {
  return (
    <>
      {" "}
      {roomDocuments.map((document) => (
        <DocumentCard document={document} />
      ))}
    </>
  );
};

export default DocumentList;
