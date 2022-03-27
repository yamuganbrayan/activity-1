import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public userList = [
    {
      id: 1,
      name: 'Jhon'
    },
    {
      id: 2,
      name: 'Doe'
    },
    {
      id: 3,
      name: 'Eric'
    }
  ];


  constructor(private activatedRoute: ActivatedRoute,
              private actionSheetController: ActionSheetController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async showActionButtons(index: number){
    const actionSheet = await this.actionSheetController.create({
      header:'Actions',
      cssClass:'my-custom-class',
      backdropDismiss: true,
      animated: true,
      keyboardClose: false,
      mode: 'md',
      buttons:[
        {
          text:'Delete',
          role:'destructive',
          icon:'trash',
          handler:() => {
              this.userList.splice(index, 1);
            this.showAlert();
            console.log('Delete clicked');
          },
        },
        {
          text:'Cancel',
          role:'cancel',
          icon: 'close',
          handler:() => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role',role);

  }
  async showAlert() {
    const alert = this.alertCtrl.create({
      header: 'User Deleted',
      buttons: ['OK'],
    });
    (await alert).present();
  }


  }
