// src/data/steps.ts

/**
 * Step describes each of the three main voucher steps.
 * In JS you'd omit the interface and just use plain objects.
 */
export interface Step {
    id: number;
    title: string;
    shortDesc: string;
    /**
     * details shown when you click “More info”
     * JS: you could omit the `?` and allow undefined anyway.
     */
    details?: string;
    /**
     * optional link for extra resources (e.g. Telegram, Google Doc)
     */
    link?: string;
}

export const steps: Step[] = [
    {
        id: 1,
        title: "Issue Your Voucher",
        shortDesc: "Who’s eligible & how to apply in a click.",
        details:
            "You qualify if you served at least 90 days... click here for the Ministry’s full guide.",
        link: "https://example.com/issuing-guide",
    },
    {
        id: 2,
        title: "Find a Participating Business",
        shortDesc: "Tips, Telegram groups, and our curated Google Doc list.",
        details:
            "Join the ‘Reserve Voucher Deals’ Telegram group and check out our live-updated sheet.",
        link: "https://docs.google.com/spreadsheet/…",
    },
    {
        id: 3,
        title: "Redeem at the Business",
        shortDesc: "Google Wallet, Apple Pay, or physical card options.",
        details:
            "Tap “Pay” in Wallet or show your card code. No smartphone? Request a printed voucher at the front desk.",
    },
];
