import { useState } from 'react';
import Header from './components/Header.js';
import Questions from './components/Questions.js';
import quizService from './quizService';
import "./assets/style.css";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Results from './components/Result.js';

class QuizTest extends Component {

  state = {
    questionBank: [],
    score: 0,
    clickedEvent: 0
  };

  
  
  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  isValidAns = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
      console.log("Passed")
      console.log(this.state.score);
    }
    this.setState ({
      clickedEvent: this.state.clickedEvent + 1
    });
  }

  resetQuiz = () => {
    this.getQuestions();
    this.setState({
      clickedEvent: 0,
      score: 0
    })
  }
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <>
      <Header />
        <div className = 'content'>
        {this.state.questionBank.length > 0 && this.state.clickedEvent < 5 && this.state.questionBank.map(({question, answers, correct, questionId}) => (<Questions questions={question} answer={answers} selected={answer => this.isValidAns(answer,correct)}/>))}
        {this.state.clickedEvent === 5 ? <Results score={this.state.score}  playAgain={this.resetQuiz}/> : null}
        </div>
      </>
    )
  }
}

ReactDOM.render(<QuizTest />, document.getElementById("root"));