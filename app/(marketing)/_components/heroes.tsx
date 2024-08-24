import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center gap-10 justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            fill
            src="/documents.webp"
            className="object-contain dark:invert"
            alt="Documents"
          />
        </div>
        <div className="relative h-[300px] w-[300px] hidden md:block">
          <Image
            fill
            src="/reading.png"
            className="object-contain dark:invert"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
