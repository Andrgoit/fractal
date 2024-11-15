import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import internet from "src/assets/img/internet.jpeg";

export default function PriceInternet() {
  return (
    <div className="flex flex-col gap-4">
      <a name="price_internet"></a>
      <h2 className="bg-red-500 text-center uppercase text-white">
        тарифний план «internet»
      </h2>
      <p>
        <span className="font-bold uppercase">опис плану:</span> План
        складається з бандлів за послуги з доступу до мережі Інтернет та
        інформаційно-консультаційних послуг. Канал доступу в інтернет
        безлімітний симетричний за технологією GEPON. Для некомерційного
        використання. Технічна підтримка абонентів з 9:00 до 21:00. Тарифікація
        по добова.
      </p>
      <Accordion className="overflow-hidden rounded-lg shadow-md">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Ціни</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <img src={internet} alt="price internet" />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
