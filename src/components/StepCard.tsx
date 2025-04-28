// src/components/StepCard.tsx
import { useState } from "react";
import type { Step } from "../data/steps";

interface StepCardProps {
    step: Step;
}

/**
 * React.FC<StepCardProps> gives us type-checking on props.
 * In JS you'd write: const StepCard = ({ step }) => { ... }
 */
const StepCard: React.FC<StepCardProps> = ({ step }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between
                 w-full md:w-1/3 mb-6 md:mb-0"
        >
            <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700 mb-4">{step.shortDesc}</p>
            </div>

            <button
                onClick={() => setOpen(!open)}
                className="text-blue-600 hover:underline self-start"
            >
                {open ? "Hide details" : "More info"}
            </button>

            {open && (
                <div className="mt-4 text-gray-600 text-sm">
                    <p>{step.details}</p>
                    {step.link && (
                        <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline block mt-2"
                        >
                            Learn more
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default StepCard;
