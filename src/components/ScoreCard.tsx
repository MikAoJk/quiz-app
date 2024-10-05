import React from 'react';
import {QuizResult} from "@/components/Quiz";
import {Question} from "@/components/data/QuestionSet";

interface ScoreCardProps {
    quizResult: QuizResult;
    questions: Question[];
    name: string
}


const ScoreCard = (scoreCardProps: ScoreCardProps) => {
    const passPercentage = 60;

    const percentage = (scoreCardProps.quizResult.score / (scoreCardProps.questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';

    return (
        <>
            <div className='card p-4'>
                <h3>Hello, {scoreCardProps.name}. Here is your Result Analysis</h3>
                <table className='table'>
                    <tbody>
                    <tr>
                        <td>Total Questions:</td>
                        <td>{scoreCardProps.questions.length}</td>
                    </tr>
                    <tr>
                        <td>Total Score:</td>
                        <td>{scoreCardProps.quizResult.score}</td>
                    </tr>
                    <tr>
                        <td>Correct Answers:</td>
                        <td>{scoreCardProps.quizResult.correctAnswers}</td>
                    </tr>
                    <tr>
                        <td>Wrong Answers:</td>
                        <td>{scoreCardProps.quizResult.wrongAnswers}</td>
                    </tr>
                    <tr>
                        <td>Percentage:</td>
                        <td>{percentage}%</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>{status}</td>
                    </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => window.location.reload()}
                    className='btn btn-primary mt-3'
                >
                    Restart
                </button>
            </div>
        </>
    );
};

export default ScoreCard;
