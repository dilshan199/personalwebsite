"use client";
import React, { use, useEffect, useState } from "react";

interface TypeTextProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delay?: number;
}

export default function TypeText({words, typingSpeed = 100, deletingSpeed = 50, delay = 1500} : TypeTextProps) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
            }, deletingSpeed);
        }else{
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && text === words[wordIndex % words.length]) {
            timer = setTimeout(() => setIsDeleting(true), delay);
        }else if(isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex(prev => prev + 1);
        }
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

    return (
        <h2 className="text-2xl font-medium text-blue-lagoon-500 font-poppins">
            {text}
            <span className="border-r-2 border-r-blue-500 ml-1 animate-pulse"></span>
        </h2>
    );
}