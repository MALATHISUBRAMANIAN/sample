import { Component } from '@angular/core';
import { PalindromeServiceService } from './palindrome-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PalindromeAngular';
  values: any[] = [];
  constructor(private palindromeService : PalindromeServiceService) { }

  ngOnInit(){
    this.palindromeService.getData().subscribe(data=>{});
    
  }

  sample(){
    this.palindromeService.getData().subscribe();
  }

  insert(value:any){
    this.palindromeService.insert(value);
  }
}
