import Image from "next/image";
import Link from "next/link";

import { dateConverter } from "@/lib/utils";

const DocumentCard = ({ document }: DocumentCardProps) => {
  const {
    id,
    metadata: { title },
    createdAt,
  } = document;
  return (
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
  );
};

export default DocumentCard;
