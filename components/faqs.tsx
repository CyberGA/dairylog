import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqsList: {
    trigger: string;
    content: string;
}[] = [
        {
            "trigger": "What can I use DairyLog for?",
            "content": "At DairyLog, you can write private entries of all kinds, safely encrypted and protected from prying eyes. The secure online diary serves as a personal diary or journal, virtual notebook or storage location for spontaneous ideas and thoughts. In order to use dairylog all you need is an Internet connection. You can access your data from anywhere on the web."
        },
        {
            "trigger": "Is DairyLog really free of charge?",
            "content": "DairyLog is free of charge and should remain free. Therefore, we depend on your donations. Donations are used to pay the bills for our server hosting costs and also allow us to constantly develop new features."
        },
        {
            "trigger": "Does DairyLog also run on my smartphone or tablet PC?",
            "content": "Yes, all common mobile browsers are supported so that dairylog's complete range of functions can also be used on smartphones and tablets. There are, however, no plans to develop a dedicated mobile app in the near future."
        },
        {
            "trigger": "Which browsers are supported?",
            "content": "DairyLog works with the following browsers: Firefox (from 3.5), Chrome, Internet Explorer (from 10.0), Safari (from 4.0), Opera (from 10.6), iOS Safari (from 5.0), Blackberry Browser, Opera Mobile (from 11.0), Chrome for Android, Firefox for Android."
        },
        {
            "trigger": "Can I change the date of a journal entry?",
            "content": "Yes, you can"
        },
        {
            "trigger": "Will my data be transferred and stored securely?",
            "content": "The secure online diary dairylog uses state-of-the-art security standards to safely transfer and store your data. For example, your data is only transmitted in encrypted form and is stored on secure servers. The encryption of your data takes place directly on your computer or mobile device, i.e. before being transferred to the server. With this approach dairylog set themselves apart from other providers who do not encrypt user data at all or only provide server-side encryption."
        },
        {
            "trigger": "Can my entries be read by others?",
            "content": "No. dairlog can only be used in private and only you can read your entries. As a matter of principle, the application does not offer any features that allow publishing or sharing of entries. This ensures that your data remains safe from prying eyes. Just as in a good old paper diary."
        },
    ]


const FAQs = () => {
    return (
        <Accordion type="single" collapsible className="max-w-2xl mx-auto px-5">
            {
                faqsList.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-cBlue">{item.trigger}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
}

export default FAQs;