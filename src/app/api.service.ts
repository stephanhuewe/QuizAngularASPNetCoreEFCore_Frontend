import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject} from 'rxjs'

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();
    
    constructor(private http: HttpClient) {}

    // Questions

    postQuestion(question)
    {
        this.http.post('https://localhost:44331/question', question).subscribe(res => {
            console.log(res)
        })
    }

    getQuestions(quizId)
    {
        return this.http.get(`https://localhost:44331/question/${quizId}`);        
    }

    selectQuestion(question)
    {
        console.log(question.text);
        this.selectedQuestion.next(question);
    }

    putQuestion(question)
    {
        this.http.put('https://localhost:44331/question/' + question.id, question).subscribe(res => {
            console.log(res)
        })
    }

    // Quiz
    postQuiz(quiz)
    {
        this.http.post('https://localhost:44331/quizzes', quiz).subscribe(res => {
            console.log(res)
        })
    }

    getQuizzes()
    {
        return this.http.get('https://localhost:44331/quizzes');        
    }

    selectQuiz(quiz)
    {
        console.log(quiz.title);
        this.selectedQuiz.next(quiz);
    }

    putQuiz(quiz)
    {
        this.http.put('https://localhost:44331/quizzes/' + quiz.id, quiz).subscribe(res => {
            console.log(res)
        })
    }

}