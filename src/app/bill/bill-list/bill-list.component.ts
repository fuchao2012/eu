import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {


  validateForm: FormGroup;
  expressClassOptions: Array<any>;
  packagingPlaceOptions: Array<any>;
  stokingModeOptions: Array<any>;
  dispatchingStatusOptions: Array<any>;
  fetchRoadOptions: Array<any>;
  orderStatusOptions: Array<any>;

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
    setTimeout(() => {
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
    this.expressClassOptions = [
      {value: '0', label: '全部快递类型'},
      {value: '1', label: 'EU快件'},
      {value: '2', label: 'EU经济邮'},
      {value: '3', label: '荷兰邮政'},
      {value: '4', label: '比利时邮政'}
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
    this.dispatchingStatusOptions = [
      {value: '0', label: '全部派工状态'},
      {value: '1', label: '未派工'},
      {value: '2', label: '已派工'},
      {value: '3', label: '已扫描'},
      {value: '4', label: '已取件'}
    ];
    this.fetchRoadOptions = [
      {value: '0', label: '全部路线'},
      {value: '1', label: '未分配路线'},
      {value: '2', label: '路线1'},
      {value: '3', label: '路线2'},
      {value: '4', label: '路线3'},
      {value: '5', label: '路线4'}
    ];
    this.orderStatusOptions = [
      {value: '0', label: '未支付'},
      {value: '1', label: '已支付'},
      {value: '2', label: '等待打包'},
      {value: '3', label: '延迟发货'},
      {value: '4', label: '待发货'},
      {value: '5', label: '打托完成'},
      {value: '6', label: '发往机场'},
      {value: '7', label: '发往国内'},
      {value: '8', label: '清关异常'},
      {value: '9', label: '清关中'},
      {value: '10', label: '国内派送'},
      {value: '11', label: '已收货'},
      {value: '12', label: '用户取消'},
      {value: '13', label: '正常关闭'},
      {value: '14', label: '退款关闭'},
      {value: '15', label: '退货退款关闭'},
      {value: '16', label: '超时关闭'},
      {value: '17', label: '确认收货关闭'},
      {value: '18', label: '破损退回'}
    ];
    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        key: i,
        name: `Fuchao ${i}`,
        balance: Math.floor(Math.random() * 1000),
        accum: Math.floor(Math.random() * 100),
        orderStatus: !(Math.random() > 0.5),
        stokingMode: Math.ceil(Math.random() * 2),
        packagingPlace: Math.ceil(Math.random() * 3),
        fetchRoad: Math.ceil(Math.random() * 5),
        registerTime: new Date(),
        lastLoginTime: new Date(),
        lastLoginIp: `192.${i}.1.${i}`,
      });
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      orderIdOrCarryId: '',
      senderIdOrRecipientId: '',
      batchId: '',
      ladingId: '',
      startDate: null,
      endDate: null,
      expressClass: [this.expressClassOptions[0].value],
      packagingPlace: [this.packagingPlaceOptions[0].value],
      stokingMode: [this.stokingModeOptions[0].value],
      dispatchingStatus: [this.dispatchingStatusOptions[0].value],
      fetchRoad: [this.fetchRoadOptions[0].value],
      orderStatus: [this.orderStatusOptions[0].value],
    });
  }
}
