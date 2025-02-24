import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    number: "01",
    question: "How do I create an account on the job board?",
    answer:
      "Creating an account is simple! Click the 'Sign Up' button in the top right corner, fill in your basic information including email and password, and verify your email address. You can then complete your profile with your professional details and start exploring opportunities.",
  },
  {
    id: "item-2",
    number: "02",
    question: "How do I apply for a job through the platform?",
    answer:
      "To apply for a job, first ensure you're logged in. Browse the job listings and click on one that interests you. Review the details and click the 'Apply Now' button. You can use your saved resume or create a new application. Follow the prompts to complete and submit your application.",
  },
  {
    id: "item-3",
    number: "03",
    question: "How can I track the status of my job applications?",
    answer:
      "You can track your applications in the 'My Applications' section of your dashboard. This shows the status of each application (Submitted, Under Review, Interview Scheduled, etc.) and any messages from employers. You'll also receive email notifications for important updates.",
  },
  {
    id: "item-4",
    number: "04",
    question: "What features are available in my account?",
    answer:
      "Your account includes features like resume building, portfolio creation, job application tracking, saved job searches, and professional networking tools. Premium members also get access to skills assessments, priority application status, and direct messaging with employers.",
  },
  {
    id: "item-5",
    number: "05",
    question:
      "Is there a cost to use the job board, and what features are free?",
    answer:
      "Basic features are free, including job searching, profile creation, and applying to jobs. Premium features like advanced search filters, priority applications, and direct employer messaging are available through our subscription plans. Check our pricing page for detailed information.",
  },
];

export function FaqSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 sm:mb-8 md:mb-12 text-black">
        Frequently asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
        <div>
          <Accordion type="single" collapsible className="space-y-4 ">
            {faqData.slice(0, 3).map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-muted/20 rounded-lg px-4 "
              >
                <AccordionTrigger className="text-base sm:text-lg text-foreground text-black">
                  <div className="flex items-center">
                    <span className="text-primary mr-2 sm:mr-4 ">
                      {faq.number}
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.slice(3).map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-muted/20 rounded-lg px-4"
              >
                <AccordionTrigger className="text-base sm:text-lg text-foreground text-black">
                  <div className="flex items-center">
                    <span className="text-primary mr-2 sm:mr-4">
                      {faq.number}
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
