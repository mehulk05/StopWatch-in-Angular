import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  initialState = {
    mm:0,
    ss:0,
    ms:0
  }
  nextState = {...this.initialState}
  listData =[]
  timerData = new BehaviorSubject(this.initialState)
  savedTimerData = new BehaviorSubject(this.listData)
  constructor(private localStorageService:LocalStorageService) { }


  incrementTimer(){
    console.log(this.nextState)
     this.nextState.ms++;
        
        if (this.nextState.ms >= 100) {
          this.nextState.ss++;
          this.nextState.ms = 0;
        }
        if (this.nextState.ss >= 60) {
          this.nextState.mm++;
          this.nextState.ss = 0
        }
        this.timerData.next(this.nextState)
        this.localStorageService.setTimerData(this.nextState)
  }

  addtimerToList(timer){
    console.log("from 21",timer)
    this.listData.push({
      mm:timer.mm,
      ss:timer.ss,
      ms:timer.ms
    })
    this.savedTimerData.next(this.listData)
    this.localStorageService.setTimerList(this.listData)
  }

  removeSingleTimerByIndex(index){
    for(let i=0 ;i<= this.listData.length ;i++){
  		if(index== this.listData[i]){
  			this.listData.splice(i,1)
  		}
  	}
    this.localStorageService.setTimerList(this.listData)
  }


  clearAll() {
    this.nextState = this.initialState
    this.listData = []
    this.savedTimerData.next([])
    this.timerData.next(this.initialState)
    localStorage.clear()
  }

  getValuesFromLocalStorage(){
    this.listData = this.localStorageService.getTimerList()
    this.nextState =this.localStorageService.getTimerData()  || this.nextState;

    this.savedTimerData.next(this.listData)
    this.timerData.next(this.nextState)
  }
}
