import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { UserModel } from 'src/app/model/userModel';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: UserModel[] = [];
  public isLoading: boolean = false;

  constructor(
    private usersService: UsersService
  ) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.isLoading = true;
    const call = this.usersService.getUsers().pipe(finalize(() => { this.isLoading = false; call.unsubscribe })).subscribe((rpta: any) => {
      this.users = rpta;
    })
  }

  deleteUser(user: UserModel, i: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${user.name} ${user.lastName}`,
      icon: 'question',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        this.usersService.deleteUser(user).subscribe();
        this.users.splice(i, 1);
      }
    })
  }
}
