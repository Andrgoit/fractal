import logo from "src/assets/logo.png";

export default function Logo() {
  return (
    <div className="flex flex-col gap-3 text-white">
      <div className="flex items-center gap-2">
        <div className="w-12">
          <img src={logo} alt="logo" />
        </div>
        <p className="uppercase">fractal</p>
      </div>
      <p>с. Мала Рогань, пров. Комінтерну, 20</p>
    </div>
  );
}
