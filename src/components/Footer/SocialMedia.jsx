import telegram from "src/assets/icons/telegram.png";

export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-3 text-white">
      <h3 className="underline">Соціальні мережі</h3>
      <a
        href="https://t.me/+U0fKju3cJ1QRhWZF"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={telegram}
          alt="phone icon"
          className="w-6 transition-all duration-300 hover:scale-110"
        />
      </a>
    </div>
  );
}
