// // src/data/steps.ts
// export interface Step {
//     id: number;
//     title: string;
//     shortDesc: string;
//     details?: string;
//     link?: {
//         url: string;
//         text: string;
//     }[];
//     icon: string;
// }

// export const steps: Step[] = [
//     {
//         id: 1,
//         title: "הנפקת שובר",
//         shortDesc: "אם קבלתם סמס עם זכאות לשובר תיכנסו לקישור שמופיע שם, ואם לא תיכנסו לקישור הזה",
//         details:
//             "אם קבלתם סמס עם זכאות לשובר תיכנסו לקישור שמופיע שם, ואם לא״ תיכנסו לקישור הזה: www.linkvoucher.co.il ותעקבו אחרי הפעולות. למי שרוצה יש מדריך של חברת cal שמסביר צעד אחרי צעד מה לעשות. בסוף התהליך אתם תכניסו ל Google Wallet or to the Apple Pay שלכם כרטיס אשראי צהוב. שאיתו תשלמו לבית העסק. מזל טוב עברתם את השלב המסובך, ועכשיו עוברים לשלב הכיפי...",
//         link: [
//             {
//                 url: "https://www.linkvoucher.co.il",
//                 text: "קישור להנפקת שובר"
//             },
//             {
//                 url: "https://example.com/cal-guide",
//                 text: "מדריך CAL המלא"
//             }
//         ],
//         icon: "VoucherIcon",
//     },
//     {
//         id: 2,
//         title: "בחירת מלון או צימר למימוש השובר",
//         shortDesc: "עכשיו, עליכם לבחור מקום בו תוכלו לממש את השובר",
//         details:
//             "עכשיו, עליכם לבחור מקום בו תוכלו לממש את השובר. שימו לב, למרות שהשובר נראה כמו אשראי הוא יעבוד לכם רק בעסקים שנחשבים לינה לפי סליקת האשראי ובישראל. (בוקינג או airbnb לא יעבוד באמצעות השובר. גם מורים פרטיים להיסטוריה שתורמים להירדמות לא נכללים בשובר...) כל בעל עסק יידע להגיד לכם טלפונית איך הוא מוגדר, אז אם אתם לא יודעים שווה להתקשר או לשלוח מייל.",
//         link: [
//             {
//                 url: "https://docs.google.com/spreadsheets/...",
//                 text: "גוגל דוקס עם מידע מפורט"
//             },
//             {
//                 url: "https://example.com/link2",
//                 text: "לינק נוסף"
//             },
//             {
//                 url: "https://example.com/link3",
//                 text: "לינק שלישי"
//             }
//         ],
//         icon: "HotelIcon",
//     },
//     {
//         id: 3,
//         title: "מימוש השובר בחופשה",
//         shortDesc: "שמגיעים לבית העסק יש לציין שאתם רוצים להשתמש בשובר החופשה של המילואים",
//         details:
//             "שמגיעים לבית העסק יש לציין שאתם רוצים הלשתמש בשובר החופשה של המילואים, הם יבקשו ממכם תעודת זהות ואשראי נוסף לביטחון. לאחר מכן תוכלו לסלוק בעזרת אפליקצית ה apple pay / google wallet שלכם ואחר שהעסקה תאושר תוכלו לראות תמונה עם סכום התשלום ובית העסק שבו בוצע התשלום. תהנו!",
//         icon: "PaymentIcon",
//     },
// ];
// src/data/steps.ts
export interface Step {
    id: number;
    title: string;
    shortDesc: string;
    details: string;
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
        shortDesc: "הנפקה של השובר וחיבורו לארנק הדיגיטלי",
        details: `1. נכנסים להודעת SMS עם הקישור של הנפקת השובר. 
        אם עוד לא קיבלתם ‑ נסו להנפיק ידנית מהקישור למטה.
  2. לאחר שסיימתם את השלבים בהנפקה, קיבלתם כרטיס אשראי דיגיטלי צהוב של חברת כאל.
  3. כעת עליכם להוסיף אותו לארנק הדיגיטלי של המכשיר (Android → Google Wallet, iPhone → Apple Pay).
  4. אם אתם מתקשים ‑ עקבו אחרי המדריך בקישור למטה.
  5. מזל טוב! עברתם את החלק המסובך, עכשיו מתחיל החלק הכיפי.`,
        link: [
            {
                url: "https://s.cal-platform.com/MyNofesh",
                text: "קישור להנפקת שובר",
            },
            {
                url:
                    "https://api.miluim.idf.il/api/v1/Media/1fjajdtx/%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%94%D7%9E%D7%A9%D7%AA%D7%9E%D7%A9-%D7%A9%D7%9C-cal.pdf",
                text: "מדריך מפורט",
            },
        ],
        icon: "VoucherIcon",
    },
    {
        id: 2,
        title: "בחירת נופש",
        shortDesc:
            "בחירת מלון, צימר או כל מקום אחר שעומד בקריטריונים למימוש השובר",
        details: `1. השובר נראה כמו אשראי דיגיטלי רגיל, אך יעבוד רק בעסקים המסווגים כלינה בישראל.    (למשל Booking או Airbnb לא יעבדו).
  2. כל בעל עסק יכול לומר לכם איך הוא מוגדר; אם לא בטוחים ‑ תתקשרו או שלחו אליהם מייל.
  3. לנוחיותכם מצורפים מקורות עם רשימות של בתי נופש שמכבדים את השובר. כמובן שאפשר לממש בכל עסק אחר שעומד בקריטריונים, ההחלטה רק שלכם...
  4. שימו לב: יש עסקים שמציעים הנחות/תוספות מיוחדות דווקא למי שמשלם בשובר מילואים.
  5. לא חייבים לממש את כל הסכום בפעם אחת!`,
      link: [
          {
              url:
                  "https://docs.google.com/spreadsheets/d/11jAygCf9VSJKNNSiWpnnkzoCwAZFT-n-09jgyDLOIuM/edit?gid=0#gid=0",
                    text: "רשימה של עסקים קטנים למימוש השובר",
            }, 
        {
      url: "https://t.me/miluim_vacation",
        text: "קבוצת טלגרם עם מקומות והטבות למשלמשים בשובר",
    }, 
],
      icon: "HotelIcon",
    }, 
    {
  id: 3,
    title: "תשלום עם השובר",
        shortDesc: "תשלום בבית העסק באמצעות השובר שבארנק הדיגיטלי",
          details: `1. בנוסף לתשלום בשובר בדרך כלל יבקשו תעודת זהות, וייתכן ויבקשו אשראי רגיל לביטחון
2. לרוב המכשירים יש שבב NFC, המאפשר תשלום באמצעות הצמדה של המכשיר (שימו לב שבארנק הדיגיטלי מופיע השובר ולא אשראי רגיל)
3. מכשירים ללא NFC: צריך להוריד את אפליקציית CAL, להזין פרטים ואז מקבלים את מספר הכרטיס ידנית.
4. בעלי מכשירים כשרים יקבלו כרטיס פיזי לתיבת הדואר כשבועיים לאחר ההנפקה.
5. תהנו בנופש 😊`,
        icon: "PaymentIcon",
    },
  ];
