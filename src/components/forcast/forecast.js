import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion/dist/types/components/AccordionItemHeading";

const Forecast = ({ data }) => {
  return (
    <div>
      <label className="title"> Daily  </label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => {
            <AccordionItem key={idx}>
              <AccordionItemHeading>


                <AccordionItemButton>
                    Hello
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>;
          })}
        </Accordion>
     
    </div>
  );
};

export default Forecast;
