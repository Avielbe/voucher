// src/data/faq.ts
export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        id: 1,
        question: "שאלה 1",
        answer: "תשובה 1"
    },
    {
        id: 2,
        question: "שאלה 2",
        answer: "תשובה 2"
    },
    {
        id: 2,
        question: "שאלה 2",
        answer: "תשובה 2"
    }
];