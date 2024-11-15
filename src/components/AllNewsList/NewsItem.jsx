import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function NewsItem({ item }) {
  const { title, date, description } = item;
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div className="flex flex-col gap-2">
            <span className="text-sky-600">{date}</span>
            <h3 className="font-bold">{title}</h3>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>{description}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
