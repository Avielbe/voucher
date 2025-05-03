// src/data/faq.ts
export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        id: 1,
        question: "מי זכאי להטבה הזאת?",
        answer: "תשובה 1"
    },
    {
        id: 2,
        question: "כמה גודל השובר?",
        answer: "תשובה 2"
    },
    {
        id: 3,
        question: "האם ניתן לפצל את השובר?",
        answer: "תשובה 2"
    },
    {
        id: 4,
        question: "עד מתי ניתן לממש?",
        answer: "תשובה 2"
    },
    {
        id: 5,
        question: "האם ניתן להשתמש בשובר לחופש בחו״ל?",
        answer: "תשובה 2"
    },
    {
        id: 6,
        question: "האם ניתן להעביר את השובר?",
        answer: "תשובה 2"
    },
    {
        id: 2,
        question: "",
        answer: "תשובה 2"
    },
];