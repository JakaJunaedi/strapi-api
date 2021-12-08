'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async score(ctx){
        const {id} = ctx.params;
        let userAnswers = ctx.request.body;

        let quiz = await strapi.services.quiz.findOne({id}, ['questions']);
        //console.log(quiz);
        let question;
        let score = 0;

        if(quiz) {
            userAnswers.map((userAnsw) => {
                question = quiz.questions.find((qst) => qst.id === userAnsw.questionId);
                if(question){
                    if(question.answer === userAnsw.value){
                        userAnsw.correct = true;
                        score += 1;
                    }else{
                        userAnsw.correctValue = false;
                    }
                    userAnsw.correctValue = question.answer;
                }
                return userAnsw;
            });
        }
        const questionCount = quiz.questions.length;
        delete quiz.questions;
        return {quiz, score, scoredAnswers: userAnswers, questionCount};
    }
};
