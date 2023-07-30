import { Button } from "@mantine/core";
import { Background } from "./Background";
import Link from "next/link";

export const Hero = () => {
  return (
    <Background>
      <div className="relative  mx-auto  h-full max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className=" flex  h-full w-full flex-col items-center justify-center text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="font-bld text-4xl sm:text-5xl">
            În curând răspundem la întrebarea
            <strong className="block pt-2 font-extrabold text-amber-500">
              cât dau?
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-xl/relaxed">
            O nouă versiune a vechiului site care nu mai este disponibil.
          </p>
          <span>
          <Button variant="light" size="lg" radius="lg" className="mt-4 bg-[#fff3bf8c]">
            <Link href="/chestionar">Ajută-ne să colectăm date</Link>
          </Button>
          </span>
        </div>
      </div>
    </Background>
  );
};
