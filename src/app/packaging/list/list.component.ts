import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  validateForm: FormGroup;
  payStyleOptions: Array<any>;
  packagingStatusOptions: Array<any>;

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet = [];
  _current = 1;
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

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.controls[i].markAsDirty();
      }
    }
  }

  constructor(private fb: FormBuilder) {
    this.payStyleOptions = [
      {value: '0', label: '全部支付方式'},
      {value: '1', label: '现金'},
      {value: '2', label: '刷卡'},
      {value: '3', label: '转账'},
      {value: '4', label: '余额'}
    ];
    this.packagingStatusOptions = [
      {value: '0', label: '全部订单状态'},
      {value: '1', label: '未发货订单'},
      {value: '2', label: '已发货订单'},
      {value: '3', label: '用户取消订单'},
      {value: '4', label: '确认收货关闭订单'},
      {value: '5', label: '正常关闭订单'},
      {value: '6', label: '退款关闭订单'},
      {value: '7', label: '已收货订单'}
    ];
    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        name: `Fuchao ${i}`,
        userId: Math.floor(Math.random() * 1000),
        orderId: Math.floor(Math.random() * 1000),
        packageName: '气泡膜（加厚）',
        packagePrice: Math.floor(Math.random() * 50),
        recipient: 'jiangwei\n' +
        '电话：+31649861896\n' +
        'the Netherlands nijmegen Vosseneindseweg 46(6582BR)',
        payStyle: Math.ceil(Math.random() * 3),
        orderTime: new Date()
      });
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: '',
      password: '',
      userId: '',
      orderId: '',
      recipient: '',
      payStyle: [this.payStyleOptions[0].value],
      packagingStatus: [this.packagingStatusOptions[0].value]
    });
  }

}
