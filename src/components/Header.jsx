import { KeyIcon } from "../icons";

const Header = () => {
  return (
    <header className="flex justify-between mb-5 items-center">
      <div className="flex items-center gap-2">
        <div className="border border-emerald-300 px-[2px] flex items-center rounded-md">
          <KeyIcon width={"1.5em"} height={"1.5em"} fill={"#86efac"} />
        </div>
        <h1 className="font-bold tracking-wide">
          Pass<span className="text-emerald-300">G</span>
        </h1>
      </div>
      <a
        href="https://github.com/itsJosephV/pass-generator"
        rel="noreferrer"
        target="_blank"
        className="font-mono text-[13px] text-zinc-500 hover:text-zinc-300 duration-200"
      >
        source
      </a>
    </header>
  );
};

export default Header;
