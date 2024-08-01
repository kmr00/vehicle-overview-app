import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginCommand} from "../core/models/login.command";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'api/login';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  private hasToken(): boolean {
    return !!sessionStorage.getItem('username');
  }

  login(command: LoginCommand): Observable<{ success: boolean, message?: string }> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.loginUrl, command, {headers}).pipe(
      map(response => {
        console.log('res', response)
        if (response && response.token) {
          sessionStorage.setItem('username', command.username);
          this.isLoggedInSubject.next(true);
          return {success: true};
        } else {
          return {success: false, message: 'Incorrect username or password. Please try again.'};
        }
      }),
      catchError(this.handleError<{ success: boolean, message?: string }>('login',
        {success: false, message: 'Sign in failed. Please try again.'}))
    );
  }

  logout(): void {
    sessionStorage.removeItem('username');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
