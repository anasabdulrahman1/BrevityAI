import React from "react";
import { CheckCircle } from "lucide-react";

export function BrevityAiSmart() {
    return (
        <div className="py-24 bg-gray-50">
            {/* New Section: BrevityAI - Summarize Smarter, Comprehend Faster */}
            <section className="p-6 bg-white rounded-2xl shadow-md mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">BrevityAI - Summarize Smarter, Comprehend Faster</h2>
                <p className="text-gray-700 mb-4">
                    Supercharge your productivity with BrevityAI, your go-to article summarizer! This intelligent tool distills the essence of any lengthy text—blogs, research papers, news articles, and beyond—into concise and clear summaries. Whether you're taking notes, conducting research, writing, or simply staying informed, BrevityAI helps you save time and effort while enhancing your understanding.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Save Time: Grasp key points in seconds.
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Work Smarter: Focus on what truly matters.
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Boost Comprehension: Customize summaries to suit your needs.
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Versatile Use: Ideal for students, professionals, and avid readers alike.
                    </li>
                </ul>
                <p className="text-gray-700">
                    Make every minute count—explore more with less effort using BrevityAI!
                </p>
            </section>
        </div>
    );
}