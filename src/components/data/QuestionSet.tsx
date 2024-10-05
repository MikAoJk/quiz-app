export type Quiz = {
    questions: Question[]
}

export type Question = {
    question: {
        id: number
        questionText: string
        answers: string[]
        correctAnswer: string
    }
}

export const quiz: Quiz = {
    questions: [
        {
            question: {
                id: 1,
                questionText: 'What does API stand for?',
                answers: ['Application Programming Interface',
                    'Advanced Programming Interface',
                    'Application Program Interface',
                    'Automated Programming Interface'],
                correctAnswer: 'Application Programming Interface',
            }
        },

        {
            question: {
                id: 3,
                questionText: `Which programming language is often 
			used for building web servers?`,
                answers: ['Java', 'Python', 'JavaScript', 'C#'],
                correctAnswer: 'JavaScript',
            }
        },
        {
            question: {
                id: 4,
                questionText: 'What is the purpose of SQL?',
                answers: ['Styling web pages', 'Querying databases',
                    'Creating animations', 'Developing mobile apps'],
                correctAnswer: 'Querying databases',
            }
        },
        {
            question: {
                id: 5,
                questionText: 'What does MVC stand for in web development?',
                answers: ['Model View Controller', 'Model Visual Controller',
                    'Model View Component', 'Model Visual Component'],
                correctAnswer: 'Model View Controller',
            }

        },
    ],
};
