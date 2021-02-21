import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username = '';
  role = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
  }

  myprofilePage() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/myprofile']);
  }

  logout() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Αποσύνδεση',
        icon: 'warning',
        text: 'Είστε σίγουρος;',
        showCancelButton: true,
        confirmButtonText: 'Ναι',
        cancelButtonText: 'Ακύρωση',
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.router.navigate(['/']);
        }
      });
  }

  editprofile() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/editprofile']);
  }

  allstudentsPage() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/allstudentsprofile']);
  }

  sqlquestionsedit() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/sqlquestionstable']);
  }

  fillfieldquestionsedit() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/handlefillfieldquestions']);
  }

  myscores() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/myscores']);
  }

  start15Quiz() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    Swal.fire({
      title:
        'Επιλέξτε τον βαθμό δυσκολίας για την εκκίνηση του Κουίζ 15 Ερωτήσεων',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Εύκολο`,
      denyButtonText: `Δύσκολο`,
      cancelButtonText: 'Ακύρωση',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('difficulty', 'easy');
        localStorage.setItem('numberofquestions', '15');
        this.router.navigate(['/sqlquiz']);
      } else if (result.isDenied) {
        localStorage.setItem('difficulty', 'hard');
        localStorage.setItem('numberofquestions', '15');
        this.router.navigate(['/sqlquiz']);
      }
    });
  }

  start25Quiz() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    Swal.fire({
      title:
        'Επιλέξτε τον βαθμό δυσκολίας για την εκκίνηση του Κουίζ 25 Ερωτήσεων',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Εύκολο`,
      denyButtonText: `Δύσκολο`,
      cancelButtonText: 'Ακύρωση',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('difficulty', 'easy');
        localStorage.setItem('numberofquestions', '25');
        this.router.navigate(['/sqlquiz']);
      } else if (result.isDenied) {
        localStorage.setItem('difficulty', 'hard');
        localStorage.setItem('numberofquestions', '25');
        this.router.navigate(['/sqlquiz']);
      }
    });
  }

  sqlQuestionsToTables(){
    if(localStorage.getItem('insideFillFieldQuestionsTable')=='yes'){
      localStorage.setItem('insideFillFieldQuestionsTable', 'no');
      this.router.navigate(['/myprofile']);
    }else{
      localStorage.setItem('insideFillFieldQuestionsTable', 'yes');
      this.router.navigate(['/questionsToTables/0']);
    }
  }

  sqlfillfieldquestions() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/fillfieldsqlquestions/0']);
  }

  generateNewSchema() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/generateNewSchema']);
  }

  goToExistingShcema() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/editExistingSchema']);
  }

  rankingPage() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/ranking']);
  }

  introSQL() {
    localStorage.setItem('insideFillFieldQuestionsTable', 'no');
    this.router.navigate(['/theorySql']);
  }

}
