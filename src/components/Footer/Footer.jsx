import Logo from "./Logo";
import Support from "./Support";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-[#444343] py-5">
      <div className="cont">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
          <Logo />
          <Support />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
