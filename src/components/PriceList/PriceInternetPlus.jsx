import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import nacionalne from "src/assets/img/nacionalne.jpeg";
import legkiy from "src/assets/img/legkiy.jpeg";
import optimal from "src/assets/img/optimal.jpeg";
import maximal from "src/assets/img/maximal.jpeg";

export default function PriceInternetPlus() {
  return (
    <div className="flex flex-col gap-4">
      <a name="price_internet_plus"></a>
      <h2 className="bg-red-500 text-center uppercase text-white">
        тарифний план «internet + iptv»
      </h2>
      <p>
        <span className="font-bold uppercase">опис плану:</span> Тарифний план
        складається з бандлів за Тарифний план «INTERNET» та послуги
        ІР-телебачення від компанії Мегого. На вибір абонента чотире тарифні
        телевізійні пакети. Телебачення можна переглядати на 5 пристроях (смарт
        телевізорах, IPTV приставках, комп'ютерах, планшетах чи телефонах)
        одночасно. Схема абонентської плати гібридна: частина плати стягується
        щомісячно першого числа, решта щоденно. Перехід на інший тариф можливий
        лише з першого числа місяця. Для некомерційного використання.
      </p>

      <Accordion className="overflow-hidden rounded-lg shadow-md">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Пакет «НАЦІОНАЛЬНЕ ТБ» – 200 ТБ каналів та 6200 фільмів.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <img src={nacionalne} alt="price internet" />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Пакет «ЛЕГКИЙ» – 290 ТБ каналів та 10500 фільмів.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <img src={legkiy} alt="price internet" />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Пакет «ОПТИМАЛЬНИЙ» - 380 ТБ каналів та 11500 фільмів.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <img src={optimal} alt="price internet" />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Пакет «МАКСИМАЛЬНИЙ» - 420 ТБ каналів та 15900 фільмів.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <img src={maximal} alt="price internet" />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
