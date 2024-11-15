import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function FAQ() {
  return (
    <section className="py-10">
      <div className="cont">
        <h2 className="mb-5 text-center">Відповіді на часто задані питання</h2>

        <Accordion className="overflow-hidden rounded-lg shadow-md">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Що потрібно від абонента для підключення до мережі FRACTAL?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Гроші та роутер чи комп’ютер, чи телевізор.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Який тариф рекомендуєте обрати?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Якщо Ваш роутер підтримує на провідних роз’ємах 100 Мбіт/с, то
                переплачувати за вищу швидкість немає сенсу. Якщо роутер на
                дротяних роз’ємах підтримує 1000 Мбіт/с, тоді на ваш власний
                вибір. Якщо ви не впевнені у виборі, можна спробувати 100
                Мбіт/с, а якщо буде мало, то перейти на тариф з більшою
                швидкістю.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Чи укладається договір між мережею FRACTAL та абонентом?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Так, укладається публічний договір-оферта. З текстом договору
                можна ознайомитись на нашому сайті.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>І так далі...</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Далі буде...</p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
