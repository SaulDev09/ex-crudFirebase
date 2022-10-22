import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/model/userModel';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user = new UserModel();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id != 'new') {
      this.usersService.getUser(id).subscribe((rpta_: any) => {
        this.user = { id: id, ...rpta_ };
      });
    }
  }

  ngOnInit(): void {
  }

  onSave(f: NgForm) {
    if (f.invalid) { return; }

    Swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading()

    let request: Observable<any>;

    if (this.user.id) {
      request = this.usersService.updateUser(this.user);
    } else {
      request = this.usersService.createUser(this.user);
    }

    request.subscribe(rpta => {
      Swal.fire({
        title: this.user.name,
        text: 'Data updated',
        icon: 'success',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      });
    });
  }
}
