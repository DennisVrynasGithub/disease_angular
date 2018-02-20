import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = "http://localhost:8010"; // Development Domain - Not Needed in Production
  authToken;
  user;
  user_email;
  loged_in;
  close = true;
  taken_user_email;
  taken_user_id;

  constructor(private http: Http) {
  }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(
      this.domain + '/index/createUser',
      user).map(res => res.json());
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
  getSymptomTwo(user) {
    return this.http.get(this.domain + '/index/getSymptomsTwo?symptom=' + user.symptom+'&symptom1='+ user.symptom1).map(response => response.json());
  }


  // View only one user
  getProfileUser(user_email) {
    return this.http.get(this.domain + '/index/getProfileUser?user_email=' + user_email).map(response => response.json());
  }

  // Function to login user
  login(user) {
    return this.http.get(this.domain + '/index/loginUser?user_email=' + user.user_email + '&user_password=' + user.user_password).map(response => response.json());
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
    this.taken_user_email = user_email;
  }

  sendEmail(){
   return  this.taken_user_email;
  }

  takeId(user_id){
    this.taken_user_id = user_id;
  }

  sendId(){
    return  this.taken_user_id;
  }
}
