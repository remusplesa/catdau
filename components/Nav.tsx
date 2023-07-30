import { Button, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export const Nav = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <nav className="absolute left-0 right-0 top-0 z-10 m-auto flex w-11/12 flex-row justify-end gap-1 rounded-b-lg bg-slate-50 p-4 shadow-md sm:w-5/6">
      <Link href="/" className="mr-auto cursor-pointer">
        <h1 className="text-3xl font-bold text-amber-500">💸 catdau.eu</h1>
      </Link>
      <ul className="hidden flex-row justify-end gap-1 md:flex">
        <li>
          <Button variant="subtle" color="yellow">
            <a href="#about">Despre</a>
          </Button>
        </li>
        {/* <li>
          <Button variant="subtle" color="yellow">
            Contact
          </Button>

        </li> */}
      </ul>
      <span className="md:hidden">
        <Burger opened={opened} onClick={toggle} aria-label={label} />
        {opened && (
          <div className="-bottom-18 absolute left-0 right-0 rounded-b-lg bg-slate-50 p-2">
            <ul className="flexflex-col gap-1">
              <li>
                <NavLink
                  label="Despre"
                  color="yellow"
                  variant="subtle"
                  active
                  onClick={() => {}}
                />
              </li>
              {/* <li>
              <NavLink 
                 label="Contact"
                 color="yellow"
                 variant="subtle"
                 active
                />

              </li> */}
            </ul>
          </div>
        )}
      </span>
    </nav>
  );
};
