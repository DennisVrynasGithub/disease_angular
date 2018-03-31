import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = "http://83.212.101.67:8010"; // Development Domain - Not Needed in Production
  authToken;
  user;
  user_email;
  loged_in;
  close = true;
  taken_user_email;
  taken_user_id;
  a;
admin;
sum;
taken_user_password;

  constructor(private http: Http) {
  }


  // history add disease
  add_disease_history(user) {
    return this.http.post(this.domain + '/index/addHistory', user).map(res => res.json());
  }

  // View list history
  delete_disease_history(id, disease_id) {
    return this.http.delete(this.domain + '/index/deleteHistory?id=' + id +'&disease_id=' + disease_id).map(response => response.json());
  }

  // View list history
  get_disease_history(user_id) {
    return this.http.get(this.domain + '/index/getHistory?user_id=' + user_id).map(response => response.json());
  }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(
      this.domain + '/index/createUser',
      user).map(res => res.json());
  }
  
  // quest1
  admin_quest1(user_id) {
    return this.http.get(
      this.domain + '/index/result_quest_1?user_id=' + user_id).map(res => res.json());
  }
  
  // quest1
  admin_quest2(user_id) {
    return this.http.get(
      this.domain + '/index/result_quest_2?user_id=' + user_id).map(res => res.json());
  }
  
  // quest1
  admin_quest3(user_id) {
    return this.http.get(
      this.domain + '/index/result_quest_3?user_id=' + user_id).map(res => res.json());
  }
  
  // quest1
  admin_quest4(user_id) {
    return this.http.get(
      this.domain + '/index/result_quest_4?user_id=' + user_id).map(res => res.json());
  }
  
  // quest1
  admin_quest5(user_id) {
    return this.http.get(
      this.domain + '/index/result_quest_5?user_id=' + user_id).map(res => res.json());
  }
  
  // quest1
  admin_quest6(user_id) {
    return this.http.get(
      this.domain + '/index/result_quest_6?user_id=' + user_id).map(res => res.json());
  }

    adminlogin(){
    if (this.loggedIn()){
      if (localStorage.getItem('user_email') === 'dionisis@gmail.com') {
        if (localStorage.getItem('user_password') === 'dennis') {
          this.admin = true;
		  console.log('yes');
          return this.admin;
        }
      }
    }else{
      this.admin = false;
	  console.log('no');
      return this.admin;
    }
  }
  
  // Function to register user accounts
  quest1(user) {
    return this.http.post(this.domain + '/index/quest1', user).map(response => response.json());
  }

  // Function to register user accounts
  quest2(user) {
    return this.http.post(this.domain + '/index/quest2', user).map(res => res.json());
  }

  // Function to register user accounts
  quest3(user) {
    return this.http.post(this.domain + '/index/quest3', user).map(res => res.json());
  }

  // Function to register user accounts
  quest4(user) {
    return this.http.post(this.domain + '/index/quest4', user).map(res => res.json());
  }

  // Function to register user accounts
  quest5(user) {
    return this.http.post(this.domain + '/index/quest5', user).map(res => res.json());
  }

  // Function to register user accounts
  quest6(user) {
    return this.http.post(this.domain + '/index/quest6', user).map(res => res.json());
  }

  // View only one disease
  getDisease(disease) {
    return this.http.get(this.domain + '/index/getDisease?disease=' + disease).map(response => response.json());
  }

  // View user list
  view_list() {
    return this.http.get(this.domain + '/index/getListUsers').map(response => response.json());
  }


  getDiseaseFromLetter(letter) {
    return this.http.get(this.domain + '/index/getDiseaseFromLetter?letter=' + letter).map(response => response.json());
  }

  // View all disease
  getAllDisease() {
    return this.http.get(this.domain + '/index/getDiseases').map(response => response.json());
  }

  // View only one disease
  getSymptom(symptom) {
    return this.http.get(this.domain + '/index/getSymptoms?symptom=' + symptom).map(response => response.json());
  }

  // View only one disease
    getSymptomSix(a,b,c,d,e,f) {
    return this.http.get(this.domain + '/index/getSymptomsSix?a=' + a+'&b='+ b+'&c='+ c+'&d='+ d+'&e='+ e+'&f='+ f).map(response => response.json());
  }
  // View only one disease
  getSymptomFive(a,b,c,d,e) {
    return this.http.get(this.domain + '/index/getSymptomsFive?a=' + a+'&b='+ b+'&c='+ c+'&d='+ d+'&e='+ e).map(response => response.json());
  }
  // View only one disease
  getSymptomFour(a,b,c,d) {
    return this.http.get(this.domain + '/index/getSymptomsFour?a=' + a+'&b='+ b+'&c='+ c+'&d='+ d).map(response => response.json());
  }
  // View only one disease
  getSymptomThree(a,b,c) {
    return this.http.get(this.domain + '/index/getSymptomsThree?a=' + a+'&b='+ b+'&c='+ c).map(response => response.json());
  }
  // View only one disease
  getSymptomTwo(a,b) {
    return this.http.get(this.domain + '/index/getSymptomsTwo?a=' + a+'&b='+ b).map(response => response.json());
  }
  // View only one disease
  getSymptomOne(a) {
    return this.http.get(this.domain + '/index/getSymptomsOne?a=' + a).map(response => response.json());
  }


  // View only one user
  getProfileUser(user_email) {
    return this.http.get(this.domain + '/index/getProfileUser?user_email=' + user_email).map(response => response.json());
  }

  // Function to login user
  login(user) {
    return this.http.post(this.domain + '/index/loginUser', user).map(response => response.json());
  }

  // Function to store user's data in client local storage
  storeUserData(naming, loged_in) {
    localStorage.setItem('user_email', String(naming)); // Set user in local storage as string
    localStorage.setItem('loged_in', loged_in); // Set user in local storage as string
    this.loged_in = loged_in;
  }

  storeUserLoginData(login_user) {
    localStorage.removeItem('loged_in'); // Set user in local storage as string
    localStorage.removeItem('user_email'); // Set user in local storage as string
    localStorage.removeItem('user_password'); // Set user in local storage as string
    localStorage.removeItem('user_id'); // Set user in local storage as string
  }

  putChangeName(user) {
    return this.http.put(this.domain + '/index/getChangeUserName', user).map(res => res.json());
  }

  putChangePassword(user) {
    return this.http.put(this.domain + '/index/getChangeUserPassword', user).map(res => res.json());
  }

  putChangeAge(user) {
    return this.http.put(this.domain + '/index/getChangeUserAge', user).map(res => res.json());
  }

  take_user_id(user_email) {
    return this.http.get(this.domain + '/index/getUsersid?user_email=' + user_email).map(res => res.json());
  }

  // Function to check if user is logged in
  loggedIn() {
    this.authToken = localStorage.getItem('loged_in'); // Get token and asssign to variable to be used elsewhere
    return this.authToken;
  }

  takeEmail(user_email) {
	  localStorage.setItem('user_email', user_email);
    this.taken_user_email = user_email;
  }

  takepassword(user_password) {
	  localStorage.setItem('user_password', user_password);
    this.taken_user_password = user_password;
  }
  
  sendEmail(){
	  this.taken_user_email = localStorage.getItem('user_email');
   return  this.taken_user_email;
  }

  takeId(user_id){
	  console.log(user_id);
	  localStorage.setItem('user_id', user_id);
    this.taken_user_id = user_id;
  }

  sendId(){
	  this.taken_user_id = localStorage.getItem('user_id');
    return  this.taken_user_id;
  }
  
  saveSum(sum){
	  localStorage.setItem('sum', sum);
	  this.sum = sum;
  }
  
  loadSum(){
	  this.sum = localStorage.getItem('sum');
    return  this.sum;
  }
  
  takediseasename(a){
    this.a = a;
  }
  senddiseasename(){
    return this.a;
  }
}
