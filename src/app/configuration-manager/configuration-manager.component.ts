import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigurationService, AlertService } from '../services/index';
import { NgProgress } from 'ngx-progressbar';
import { AddConfigItemComponent } from './add-config-item/add-config-item.component';

@Component({
  selector: 'app-configuration-manager',
  templateUrl: './configuration-manager.component.html',
  styleUrls: ['./configuration-manager.component.css']
})
export class ConfigurationManagerComponent implements OnInit {
  public categoryData = [];
  public JSON;
  public addConfigItem: any;

  @ViewChild(AddConfigItemComponent) addConfigItemModal: AddConfigItemComponent;

  constructor(private configService: ConfigurationService, private alertService: AlertService, public ngProgress: NgProgress) { this.JSON = JSON }
  ngOnInit() {
    this.getCategories();

    // this.addConfigItem = {
    //   category_name: this.scheduleProcess
    // };
  }

  public getCategories(): void {
    /** request started */
    this.ngProgress.start();
    this.configService.getCategories().
      subscribe(
        data => {
          /** request completed */
          this.ngProgress.done();
          data.categories.forEach(element => {
            this.getCategory(element.key, element.description);
          });
        },
        error => {
          /** request completed */
          this.ngProgress.done();
          if (error.status === 0) {
            console.log('service down ', error);
          } else {
            this.alertService.error(error.statusText);
          }
        });
  }

  private getCategory(category_name: string, category_desc: string): void {
    let categoryValues = [];
    this.configService.getCategory(category_name).
      subscribe(
        data => {
          categoryValues.push(data);
          this.categoryData.push({ key: category_name, value: categoryValues, description: category_desc });
        },
        error => {
          if (error.status === 0) {
            console.log('service down ', error);
          } else {
            this.alertService.error(error.statusText);
          }
        });
  }

  public restoreConfigFieldValue(config_item_key: string, flag: boolean) {
    let inputField = <HTMLInputElement>document.getElementById(config_item_key.toLowerCase());
    inputField.value = inputField.textContent;
    let cancelButton = <HTMLButtonElement>document.getElementById('btn-cancel-' + config_item_key.toLowerCase());
    cancelButton.disabled = !flag;
  }

  public saveConfigValue(category_name: string, config_item: string, type: string, flag: boolean) {
    let cat_item_id = (category_name.trim() + '-' + config_item.trim()).toLowerCase()
    let inputField = <HTMLInputElement>document.getElementById(cat_item_id);
    let value = inputField.value;
    let id = inputField.id;
    let cancelButton = <HTMLButtonElement>document.getElementById('btn-cancel-' + id);
    cancelButton.disabled = flag;

    /** request started */
    this.ngProgress.start();
    this.configService.saveConfigItem(category_name, config_item, value, type).
      subscribe(
        data => {
          /** request completed */
          this.ngProgress.done();
          if (data.value != undefined) {
            if (type.toUpperCase() === 'JSON') {
              inputField.textContent = inputField.value = JSON.stringify(data.value)
            }
            else {
              inputField.textContent = inputField.value = data.value
            }
            this.alertService.success('Value updated successfully');
          }
        },
        error => {
          /** request completed */
          this.ngProgress.done();
          if (error.status === 0) {
            console.log('service down ', error);
          } else {
            this.alertService.error(error.statusText);
          }
        });
  }

  /**
  * Open add Config Item modal dialog
  */
 openAddConfigItemModal(description, key) {
    // this.addConfigItem = {
    //   cat_name: description,
    //   key: key
    // };
    this.addConfigItemModal.setConfigName(description, key);
    // call child component method to toggle modal
    this.addConfigItemModal.toggleModal(true);
  }

  public onTextChange(config_item_key: string, flag: boolean) {
    let cancelButton = <HTMLButtonElement>document.getElementById('btn-cancel-' + config_item_key.toLowerCase());
    cancelButton.disabled = !flag;
  }

  isObject(val) { return typeof val === 'object'; }
}
