import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Global } from 'src/app/services/global.service';

@Component({
    selector: 'app-select-role-dialog',
    templateUrl: './select-role-dialog.component.html',
    styleUrls: ['./select-role-dialog.component.scss']
})
export class SelectRoleDialogComponent implements OnInit {

    selectedRole = this.global.currRole;

    constructor(
        public global: Global,
        private dialogRef: MatDialogRef<SelectRoleDialogComponent>,
    ) { }

    ngOnInit(): void {

    }

    onConfirm(): void {
        // push to data store
        this.global.currRole = this.selectedRole;
        this.closeDialog();
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

}
