import { Component} from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})

export class QuizComponent{

    quiz = {
        title: "",
        id:0
    }

    constructor(public api: ApiService) {}

    ngOnInit()
    {
        this.api.quizSelected.subscribe(quiz => this.quiz = quiz)
    }

    

}