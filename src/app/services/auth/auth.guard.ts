import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthChatroomDialogComponent } from 'src/app/components/dialog/auth-chatroom-dialog/auth-chatroom-dialog.component';
import { Global } from '../global.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(
        private global: Global,
        private router: Router,
        private dialog: MatDialog,
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.global.chatRoomUnlocked) {
            this.router.navigate(['/overview/home']);
            const dialogRef = this.dialog.open(AuthChatroomDialogComponent,{
                    width: '300px',
                    height: '150px'
                });
            return false;
        }
        return true;
    }
}