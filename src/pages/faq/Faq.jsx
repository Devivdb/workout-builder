import useBackground from "../../hooks/useBackground.js";
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./Faq.css";

function Faq() {
    useBackground("faq-background");

    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const questions = [
        { question: "Why choose WorkoutFlow?", answer: "Because it simplifies your workout planning!" },
        { question: "How can I create a workout routine?", answer: "Use the WorkoutFlow planner to add exercises and schedule them." },
        { question: "What is the Give Back program?", answer: "It’s a program to share workouts and tips with the community." },
        { question: "What are the upgrade options available?", answer: "You can choose between Basic, Pro, and Premium tiers." },
        { question: "Can you add a definition?", answer: "Yes, definitions can be added under the settings menu." },
        { question: "How do I cancel my subscription?", answer: "Go to your account settings and click 'Cancel Subscription'." },
        { question: "Other questions?", answer: "Feel free to contact our support team!" },
    ];

    return (
        <div className="outer-container-wrapper-faq">
            <h1>Frequently Asked Questions</h1>
            {questions.map((item, index) => (
                <div
                    key={index}
                    className={`question ${activeQuestion === index ? "expanded" : ""}`}
                    onClick={() => toggleAnswer(index)}
                    style={{ cursor: "pointer" }}
                >
                    <div className="question-header">
                        <p>{item.question}</p>
                        <ArrowDownwardIcon
                            className={`arrow ${activeQuestion === index ? "arrow-active" : ""}`}
                        />
                    </div>
                    {activeQuestion === index && (
                        <div className="answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;
