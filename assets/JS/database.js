const baseUrl = "./assets/img/"
const dataWords = 
[
    {
        key: "1",
        word: "Gesture",
        wordType: "Noun",
        define: "A movement that you make with your hands, your head or your face to show a particular meaning",
        urlImg: baseUrl + "1_Gestures.webp",
        question: "He made a rude ___ at the driver of the other car.",
        answer: "He made a rude gesture at the driver of the other car."
    },
    {
        key: "2",
        word: "Means",
        wordType: "Noun",
        define: "A way of achieving or doing something",
        urlImg: baseUrl + "2_Means.webp",
        question: "The state is in control of the ___ of production.",
        answer: "The state is in control of the means of production."
    },
    {
        key: "3",
        word: "Facilitate",
        wordType: "Verb",
        define: "To make an action or a process possible or easier",
        urlImg: baseUrl + "3_Facilitate.jpeg",
        question: "The new trade agreement should ___ more rapid economic growth.",
        answer: "The new trade agreement should facilitate more rapid economic growth."
    },
    {
        key: "4",
        word: "Systematic",
        wordType: "Adjective",
        define: "Done according to a system or plan, in a complete, efficient or determined way",
        urlImg: baseUrl + "4_Systematic.jpeg",
        question: "A ___ approach to solving the problem",
        answer: "A systematic approach to solving the problem"
    },
    {
        key: "5",
        word: "Myth",
        wordType: "Noun",
        define: "A story from ancient times, especially one that was told to explain natural events or to describe the early history of a people",
        urlImg: baseUrl + "5_Myth.jpeg",
        question: "The heroes of ___ and legend",
        answer: "The heroes of myth and legend"
    },
    {
        key: "6",
        word: "Inferior",
        wordType: "Adjective",
        define: "Not good or not as good as somebody/something else",
        urlImg: baseUrl + "6_Inferior.jpeg",
        question: "Modern music is often considered ___ to that of the past.",
        answer: "Modern music is often considered inferior to that of the past."
    },
    {
        key: "7",
        word: "Comparative",
        wordType: "Adjective",
        define: "Connected with studying things to find out how similar or different they are",
        urlImg: baseUrl + "7_Comparative.jpeg",
        question: "'More difficult' is the ___ of 'difficult'.",
        answer: "'More difficult' is the comparative of 'difficult'."
    },
    {
        key: "8",
        word: "Cognition",
        wordType: "Noun",
        define: "The process by which knowledge and understanding is developed in the mind",
        urlImg: baseUrl + "8_Cognition.jpeg",
        question: "He has done extensive research into theories of human ___.",
        answer: "He has done extensive research into theories of human cognition."
    },
    {
        key: "9",
        word: "Quip",
        wordType: "Verb",
        define: "to make a quick and clever remark",
        urlImg: baseUrl + "9_Quip.jpeg",
        question: "It was Oscar Wilde who made the famous ___ about life mimicking art.",
        answer: "It was Oscar Wilde who made the famous quip about life mimicking art."
    },
    {
        key: "10",
        word: "Imply",
        wordType: "Verb",
        define: "to suggest that something is true or that you feel or think something, without saying so directly",
        urlImg: baseUrl + "10_Imply.jpeg",
        question: "His silence seemed to ___ agreement.",
        answer: "His silence seemed to imply agreement."
    },
    {
        key: "11",
        word: "Classification",
        wordType: "Noun",
        define: "A group, class, division, etc. into which somebody or something is put",
        urlImg: baseUrl + "11_Classification.webp",
        question: "The material was put into the highest security ___.",
        answer: "The material was put into the highest security Classification."
    },
    {
        key: "12",
        word: "Evolve",
        wordType: "Verb",
        define: "To develop gradually, especially from a simple to a more complicated form; to develop something in this way",
        urlImg: baseUrl + "12_Evolve.jpeg",
        question: "The company has ___ into a major chemical manufacturer.",
        answer: "The company has evolve into a major chemical manufacturer."
    },
    {
        key: "13",
        word: "Distinction",
        wordType: "Noun",
        define: "The act of separating people or things into different groups",
        urlImg: baseUrl + "13_Distinction.webp",
        question: "Philosophers did not use to make a ___ between arts and science",
        answer: "Philosophers did not use to make a distinction  between arts and science"
    },
    {
        key: "14",
        word: "Blur",
        wordType: "Verb",
        define: "To become or make it become difficult to recognize a clear difference between things",
        urlImg: baseUrl + "14_Blur.jpeg",
        question: "The writing ___ and danced before his eyes.",
        answer: "The writing blur and danced before his eyes."
    },
    {
        key: "15",
        word: "Complexities",
        wordType: "Noun",
        define: "The features of a problem or situation that are difficult to understand",
        urlImg: baseUrl + "15_Complexities.jpeg",
        question: "The increasing ___ of modern telecommunication systems",
        answer: "The increasing ___ of modern telecommunication systems"
    },
    {
        key: "16",
        word: "Stem from",
        wordType: "Verb",
        define: "To be the result of something",
        urlImg: baseUrl + "16_stemFrom.png",
        question: "Most people’s insecurities ___ something that happened in their childhood.",
        answer: "Most people’s insecurities stem from something that happened in their childhood."
    },
    {
        key: "17",
        word: "Alternate",
        wordType: "Verb",
        define: "To make things or people follow one after the other in a repeated pattern",
        urlImg: baseUrl + "17_Alternate.jpeg",
        question: "Her music ___ moments of sudden quiet with moments of dramatic intensity",
        answer: "Her music alternate moments of sudden quiet with moments of dramatic intensity"
    },
    {
        key: "18",
        word: "Fit in",
        wordType: "Verb",
        define: "to feel that you belong to a particular group and are accepted by that group",
        urlImg: baseUrl + "18_FitIn.jpeg",
        question: "I had to ___ ten appointments into one morning.",
        answer: "I had to fin ten appointments into one morning."
    },
    {
        key: "19",
        word: "Convey",
        wordType: "Verb",
        define: "to make ideas, feelings, etc. known to somebody",
        urlImg: baseUrl + "19_Convey.jpeg",
        question: "Pipes ___ hot water from the boiler to the radiators.",
        answer: "Pipes convey hot water from the boiler to the radiators."
    },
    {
        key: "20",
        word: "Taboo",
        wordType: "Adjective",
        define: "avoided for religious or social reasons",
        urlImg: baseUrl + "20_Taboo.jpeg",
        question: "For some people, death is a ___ subject.",
        answer: "For some people, death is a taboo subject."
    },
]

