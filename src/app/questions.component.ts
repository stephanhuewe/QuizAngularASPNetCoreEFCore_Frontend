import { Component } from '@angular/core'
import { compileComponentFromMetadata } from '@angular/compiler';
import { ApiService } from './api.service';
import { ActivatedRoute} from '@angular/router'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent {

    question = {};
    questions

    constructor(public api: ApiService, private route: ActivatedRoute) { }

    ngOnInit() {
        var quizId = this.route.snapshot.paramMap.get('quizId')

        console.log('called once')
        this.api.getQuestions(quizId).subscribe(res => { this.questions = res })
    }

    post(question) {
        this.api.postQuestion(question)
        console.log(question)
    }

}