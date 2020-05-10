import { Component} from '@angular/core'
import { compileComponentFromMetadata } from '@angular/compiler';
import { ApiService } from './api.service';
import { ActivatedRoute} from '@angular/router'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent{

    question = { id: 0, text: "", correctAnswer: "", answer1: "", answer2: "", answer3:"", quizId: 0  }
    quizId = 0

    constructor(public api: ApiService, private route: ActivatedRoute) {}

    ngOnInit()
    {
        this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
        console.log(this.quizId)
        this.api.questionSelected.subscribe(question => this.question = question);
    }

    post(question)
    {
        question.quizId = this.quizId;
        this.api.postQuestion(question)
        console.log(question)
    }

}