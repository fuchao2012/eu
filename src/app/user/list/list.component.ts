import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  validateForm: FormGroup;
  userClassOptions: Array<any>;
  packagingPlaceOptions: Array<any>;
  stokingModeOptions: Array<any>;
  isVipOptions: Array<any>;
  fetchRoadOptions: Array<any>;
  isFetchOnlineOptions: Array<any>;
  isBlackListOptions: Array<any>;

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet = [];
  _indeterminate = false;

  _displayDataChange($event) {
    this._displayData = $event;
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.controls[i].markAsDirty();
      }
    }
  }

  constructor(private fb: FormBuilder) {
    this.userClassOptions = [
      {value: '0', label: '全部用户类型'},
      {value: '1', label: '个人'},
      {value: '2', label: '公司'},
      {value: '3', label: '虚拟'}
    ];
    this.packagingPlaceOptions = [
      {value: '0', label: '全部仓库'},
      {value: '1', label: '荷兰综合仓'},
      {value: '2', label: '比利时综合仓'},
      {value: '3', label: '德国综合仓'}
    ];
    this.stokingModeOptions = [
      {value: '0', label: '全部备货模式'},
      {value: '1', label: 'OTO备货'},
      {value: '2', label: '用户自备'}
    ];
    this.isVipOptions = [
      {value: '0', label: '全部VIP类型'},
      {value: '1', label: 'VIP'},
      {value: '2', label: '非VIP'}
    ];
    this.fetchRoadOptions = [
      {value: '0', label: '全部路线'},
      {value: '1', label: '未分配路线'},
      {value: '2', label: '路线1'},
      {value: '3', label: '路线2'},
      {value: '4', label: '路线3'},
      {value: '5', label: '路线4'}
    ];
    this.isFetchOnlineOptions = [
      {value: '0', label: '全部取件类型'},
      {value: '1', label: '取件在线'},
      {value: '2', label: '取件不在线'}
    ];
    this.isBlackListOptions = [
      {value: '0', label: '全部黑名单类型'},
      {value: '1', label: '在黑名单'},
      {value: '2', label: '未在黑名单'}
    ];
    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        key: i,
        name: `Fuchao ${i}`,
        balance: Math.floor(Math.random() * 1000),
        accum: Math.floor(Math.random() * 100),
        isFetchOnline: !(Math.random() > 0.5),
        stokingMode: Math.ceil(Math.random() * 2),
        packagingPlace: Math.ceil(Math.random() * 3),
        fetchRoad: Math.ceil(Math.random() * 5),
        registerTime: new Date(),
        lastLoginTime: new Date(),
        lastLoginIp: `192.${i}.1.${i}`,
        isInBlackList: !(Math.random() > 0.5)
      });
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: '',
      password: '',
      userId: '',
      postId: '',
      userClass: [this.userClassOptions[0].value],
      packagingPlace: [this.packagingPlaceOptions[0].value],
      stokingMode: [this.stokingModeOptions[0].value],
      isVip: [this.isVipOptions[0].value],
      fetchRoad: [this.fetchRoadOptions[0].value],
      isFetchOnline: [this.isFetchOnlineOptions[0].value],
      isBlackList: [this.isBlackListOptions[0].value]
    });
  }

}
