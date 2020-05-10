import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject} from 'rxjs'

@Injectable()
export class AuthService {
    
    constructor(private http: HttpClient) {}

    // Questions

    register(credentials)
    {
        this.http.post<any>('https://localhost:44331/account', credentials).subscribe(res => {
            localStorage.setItem('token', res)
        })
    }

  

}