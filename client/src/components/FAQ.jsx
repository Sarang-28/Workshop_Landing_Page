import { useState } from "react";

function FAQ() {

  const [open,setOpen]=useState(null);

  const faqs = [
    {
      question:"Do I need coding knowledge?",
      answer:"No, beginners are welcome."
    },
    {
      question:"Will I get a certificate?",
      answer:"Yes, after completion."
    },
    {
      question:"Are sessions live?",
      answer:"Yes, all sessions are live."
    }
  ];

  return (
    <section id="faq">

      <h2>FAQs</h2>

      {faqs.map((faq,index)=>(
        <div
          key={index}
          className="faq-card"
        >
          <h3
            onClick={() =>
              setOpen(open===index ? null : index)
            }
          >
            {faq.question}
          </h3>

          {open===index &&
            <p>{faq.answer}</p>
          }

        </div>
      ))}

    </section>
  );
}

export default FAQ;