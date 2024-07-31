import DocumentCard from "./DocumentCard";

const DocumentList = ({ roomDocuments }: DocumentListProps) => {
  return (
    <>
      {roomDocuments.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </>
  );
};

export default DocumentList;
