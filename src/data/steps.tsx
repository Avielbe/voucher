// // src/data/steps.ts

// /**
//  * Step describes each of the three main voucher steps.
//  * In JS you'd omit the interface and just use plain objects.
//  */
// export interface Step {
//     id: number;
//     title: string;
//     shortDesc: string;
//     /**
//      * details shown when you click “More info”
//      * JS: you could omit the `?` and allow undefined anyway.
//      */
//     details?: string;
//     /**
//      * optional link for extra resources (e.g. Telegram, Google Doc)
//      */
//     link?: string;
// }

// export const steps: Step[] = [
//     {
//         id: 1,
//         title: "Issue Your Voucher",
//         shortDesc: "Who’s eligible & how to apply in a click.",
//         details:
//             "You qualify if you served at least 90 days... click here for the Ministry’s full guide.",
//         link: "https://example.com/issuing-guide",
//     },
//     {
//         id: 2,
//         title: "Find a Participating Business",
//         shortDesc: "Tips, Telegram groups, and our curated Google Doc list.",
//         details:
//             "Join the ‘Reserve Voucher Deals’ Telegram group and check out our live-updated sheet.",
//         link: "https://docs.google.com/spreadsheet/…",
//     },
//     {
//         id: 3,
//         title: "Redeem at the Business",
//         shortDesc: "Google Wallet, Apple Pay, or physical card options.",
//         details:
//             "Tap “Pay” in Wallet or show your card code. No smartphone? Request a printed voucher at the front desk.",
//     },
// ];


// src/data/steps.ts
export interface Step {
    id: number;
    title: string;
    shortDesc: string;
    details?: string;
    link?: {
        url: string;
        text: string;
    }[];
    icon: string;
}

export const steps: Step[] = [
    {
        id: 1,
        title: "הנפקת שובר",
        shortDesc: "אם קבלתם סמס עם זכאות לשובר תיכנסו לקישור שמופיע שם, ואם לא תיכנסו לקישור הזה",
        details:
            "אם קבלתם סמס עם זכאות לשובר תיכנסו לקישור שמופיע שם, ואם לא תיכנסו לקישור הזה: www.linkvoucher.co.il ותעקבו אחרי הפעולות. למי שרוצה יש מדריך של חברת cal שמסביר צעד אחרי צעד מה לעשות. בסוף התהליך אתם תכניסו ל Google Wallet or to the Apple Pay שלכם כרטיס אשראי צהוב. שאיתו תשלמו לבית העסק. מזל טוב עברתם את השלב המסובך, ועכשיו עוברים לשלב הכיפי...",
        link: [
            {
                url: "https://www.linkvoucher.co.il",
                text: "קישור להנפקת שובר"
            },
            {
                url: "https://example.com/cal-guide",
                text: "מדריך CAL המלא"
            }
        ],
        icon: "VoucherIcon",
    },
    {
        id: 2,
        title: "בחירת מלון או צימר למימוש השובר",
        shortDesc: "עכשיו, עליכם לבחור מקום בו תוכלו לממש את השובר",
        details:
            "עכשיו, עליכם לבחור מקום בו תוכלו לממש את השובר. שימו לב, למרות שהשובר נראה כמו אשראי הוא יעבוד לכם רק בעסקים שנחשבים לינה לפי סליקת האשראי ובישראל. (בוקינג או airbnb לא יעבוד באמצעות השובר. גם מורים פרטיים להיסטוריה שתורמים להירדמות לא נכללים בשובר...) כל בעל עסק יידע להגיד לכם טלפונית איך הוא מוגדר, אז אם אתם לא יודעים שווה להתקשר או לשלוח מייל.",
        link: [
            {
                url: "https://docs.google.com/spreadsheets/...",
                text: "גוגל דוקס עם מידע מפורט"
            },
            {
                url: "https://example.com/link2",
                text: "לינק נוסף"
            },
            {
                url: "https://example.com/link3",
                text: "לינק שלישי"
            }
        ],
        icon: "HotelIcon",
    },
    {
        id: 3,
        title: "מימוש השובר בחופשה",
        shortDesc: "שמגיעים לבית העסק יש לציין שאתם רוצים להשתמש בשובר החופשה של המילואים",
        details:
            "שמגיעים לבית העסק יש לציין שאתם רוצים הלשתמש בשובר החופשה של המילואים, הם יבקשו ממכם תעודת זהות ואשראי נוסף לביטחון. לאחר מכן תוכלו לסלוק בעזרת אפליקצית ה apple pay / google wallet שלכם ואחר שהעסקה תאושר תוכלו לראות תמונה עם סכום התשלום ובית העסק שבו בוצע התשלום. תהנו!",
        icon: "PaymentIcon",
    },
];