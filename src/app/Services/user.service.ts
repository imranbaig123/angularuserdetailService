import { EventEmitter } from "@angular/core"

export class UserService{
    users = [
        {name:'John', job: 'Teacher', gender:'Male', country:'USA', age:'33', avatar:'assets/avatar/john.png'},
        {name:'linda', job: 'Doctor', gender:'Female', country:'Germany', age:'28', avatar:'assets/avatar/linda.png'},
        {name:'marcos', job: 'Engineer', gender:'Male', country:'UK', age:'25', avatar:'assets/avatar/marcos.png'},
        {name:'lei ha', job: 'Lawyer', gender:'Female', country:'Brazil', age:'22', avatar:'assets/avatar/lei ha.png'}
    ]

    OnShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

    ShowUserDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) {
        this.OnShowDetailsClicked.emit(user);
    }
}