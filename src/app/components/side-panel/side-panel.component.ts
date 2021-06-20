import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global.service';
import { AuthChatroomDialogComponent } from '../dialog/auth-chatroom-dialog/auth-chatroom-dialog.component';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

    public navigationItems = [
        'Home',
        'Message',
        'Gallery',
        'Wishlist'
    ];

    constructor(
        public global: Global,
        private router: Router,
        public dialog: MatDialog,
    ) { }

    ngOnInit(): void {
    }

    openDialog() {
        const dialogRef = this.dialog.open(AuthChatroomDialogComponent, {
            width: '300px',
            height: '150px'
        });

        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    }

    navigate(link): void {
        if (link === 'unlock') {
            this.openDialog();
        } else {
            this.router.navigate(['/overview/' + link]);
        }
    }

}
