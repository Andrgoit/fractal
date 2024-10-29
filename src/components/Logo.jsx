import logo from "src/assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <a href="/">
          <img src={logo} alt="logo fractal" />
        </a>
      </div>
      <div>
        <p className="max-w-[200px] text-center">
          Оптоволоконний Інтернет в Xарківській області.
        </p>
      </div>
    </div>
  );
}
