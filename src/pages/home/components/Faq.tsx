import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const FaqList = [
  {
    question: "What does Afiari do?",
    answer:
      "Afiari is a tech company that delivers groceries to customers quickly and easily when they order online while providing a platform for stores to sell online.",
  },
  {
    question: "What locations do you currently cover?",
    answer: "We currently serve customers within the Lekki axis of Lagos.",
  },
  {
    question: "How long does it take to deliver groceries?",
    answer: "We deliver within 60 minutes of confirmation of payment.",
  },
  {
    question: "What are ‘stores around you’?",
    answer:
      "Stores around you are grocery stores that are within your location. Once you give us access to your location, we’ll show you the stores close to you that we have on our platform.",
  },
  {
    question: "How do I make payment?",
    answer:
      "All payments are made online after you checkout on the application. You could either pay with your card or transfer. You can choose which payment gateway you want once you checkout",
  },
];

const Faq = () => {
  return (
    <div className="Faq">
      <div className="container">
        <div className="Faq_heading_top">
          <h1 className="second_font_title">FAQs</h1>
        </div>

        <div className="Faq_Desktop">
          <Tabs className={"Faq_Tabs"}>
            <TabList className={"Faq_TabList"}>
              {FaqList.map((faq, index) => (
                <Tab key={index} className={"Faq_Tab"}>
                  {faq.question}
                </Tab>
              ))}
            </TabList>

            <div className="tab_panel_div">
              {FaqList.map((faq, index) => (
                <TabPanel key={index} className={"Faq_TabPanel"}>
                  <h2>{faq.question}</h2>
                  <p>{faq.answer}</p>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Faq;
