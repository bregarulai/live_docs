import DocumentCard from "./DocumentCard";

const DocumentList = ({ roomDocuments }: DocumentListProps) => {
  console.log("Room Documents Data List: ", roomDocuments);
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
