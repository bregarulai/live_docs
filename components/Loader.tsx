import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        className="animate-spin"
        src="/assets/icons/loader.svg"
        height={32}
        width={32}
        alt="loader"
      />
      Loading...
    </div>
  );
};

export default Loader;
