import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})

export class QuizzesComponent {

    quiz = {};
    quizzes

    constructor(public api: ApiService) { }

    ngOnInit() {
        console.log('called once quizzes')
        this.api.getQuizzes().subscribe(res => { this.quizzes = res })
    }

    post(quiz) {
        this.api.postQuiz(quiz)
        console.log(quiz)
    }

}