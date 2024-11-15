import phone from "src/assets/icons/phone.png";
import email from "src/assets/icons/email.png";
import telegram from "src/assets/icons/telegram.png";
import viber from "src/assets/icons/viber.png";
import whatsapp from "src/assets/icons/whatsapp.png";

export default function Support() {
  return (
    <div className="flex flex-col gap-3 text-white">
      <h3 className="underline">Технічна підтримка ( з 9:00 до 21:00.)</h3>
      <div className="flex items-center gap-2">
        <img src={email} alt="phone icon" className="w-6" />
        <a href="mailto:support@fractal.net.ua">support@fractal.net.ua</a>
      </div>

      <div className="flex items-center gap-2">
        <img src={phone} alt="phone icon" className="w-6" />
        <a href="tel:+380673934477">+38(067) 393-44-77</a>
        <div className="flex items-center gap-1">
          ({" "}
          <img
            src={telegram}
            alt="telegram icon"
            title="Telegram"
            className="w-4"
          />{" "}
          <img src={viber} alt="viber icon" title="Viber" className="w-4" />{" "}
          <img
            src={whatsapp}
            alt="whatsapp icon"
            title="Whatsapp"
            className="w-4"
          />
          )
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src={phone} alt="phone icon" className="w-6" />
        <a href="tel:+380503094477">+38(050) 309-44-77</a>
        <div className="flex items-center gap-1">
          ({" "}
          <img
            src={telegram}
            alt="telegram icon"
            title="Telegram"
            className="w-4"
          />{" "}
          <img src={viber} alt="viber icon" title="Viber" className="w-4" />{" "}
          <img
            src={whatsapp}
            alt="whatsapp icon"
            title="Whatsapp"
            className="w-4"
          />
          )
        </div>
      </div>
    </div>
  );
}
