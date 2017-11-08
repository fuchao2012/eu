import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  // [nzDisable]="true" for function not available
  menus = [
    {
      label: '用户管理',
      isOpen: false,
      icon: 'anticon-user',
      menu: [
        {
          label: '用户列表',
          link: '/user-list',
          hasSub: true,
          isSub: false
        },
        {
          label: '已发送邮件用户',
          link: '/user-sended-email',
          hasSub: false,
          isSub: true
        },
        // {
        //   label: '待取件用户',
        //   link: '/user-wait-pick',
        //   hasSub: false,
        //   isSub: true
        // }
      ]
    },
    {
      label: '订单管理',
      isOpen: false,
      icon: 'anticon-file',
      menu: [
        {
          label: '订单列表',
          link: '/bill-list',
          hasSub: true,
          isSub: false
        },
        // {
        //   label: '未支付订单',
        //   link: '/bill-not-pay',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '已支付订单',
        //   link: '/bill-had-pay',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '等待打包订单',
        //   link: '/bill-wait-package',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '暂时缺货订单',
        //   link: '/bill-is-lack',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '延迟发货订单',
        //   link: '/bill-had-delay',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '等待发货订单',
        //   link: '/bill-wait-send',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '打托完成订单',
        //   link: '/bill-had-package',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '发往机场订单',
        //   link: '/bill-send-airport',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '发往国内订单',
        //   link: '/bill-send-china',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '清关订单',
        //   link: '/bill-clear',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '海关查验订单',
        //   link: '/bill-is-check',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '国内派送订单',
        //   link: '/bill-in-china',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '破损返回订单',
        //   link: '/bill-is-broken',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '已收货订单',
        //   link: '/bill-is-receive',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '取消和关闭订单',
        //   link: '/bill-is-cancled',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '确认收货关闭订单',
        //   link: '/bill-is-closed',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '异常件订单',
        //   link: '/bill-exception',
        //   hasSub: false,
        //   isSub: true
        // },
        {
          label: '导出订单',
          link: '/bill-export',
          hasSub: false,
          isSub: false
        },
        {
          label: '导出报关材料',
          link: '/bill-export-baoguan',
          hasSub: false,
          isSub: false
        },
        {
          label: '导出代理商订单',
          link: '/bill-export-agents',
          hasSub: false,
          isSub: false
        }
      ]
    },
    {
      label: '包材管理',
      isOpen: false,
      icon: 'anticon-switcher',
      menu: [
        {
          label: '包材订单列表',
          link: '/packaging-list',
          hasSub: true,
          isSub: false
        },
        // {
        //   label: '未发货订单',
        //   link: '/packaging-not-send',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '已发货订单',
        //   link: '/packaging-had-send',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '已收货订单',
        //   link: '/packaging-had-receive',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '用户取消订单',
        //   link: '/packaging-had-cancel',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '确认收货关闭订单',
        //   link: '/packaging-receive-closed',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '正常关闭订单',
        //   link: '/packaging-is-closed',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '退款关闭订单',
        //   link: '/packaging-return-closed',
        //   hasSub: false,
        //   isSub: true
        // },
        // {
        //   label: '导出包材订单',
        //   link: '/packaging-export',
        //   hasSub: false,
        //   isSub: false
        // }
      ]
    },
    {
      label: '商品管理',
      isOpen: false,
      icon: 'anticon-hdd',
      menu: [
        {
          label: '添加商品',
          link: '/commodity-add',
          hasSub: false,
          isSub: false
        },
        {
          label: '商品类目',
          link: '/commodity-class',
          hasSub: false,
          isSub: false
        },
        {
          label: '商品品牌',
          link: '/commodity-brands',
          hasSub: false,
          isSub: false
        },
        {
          label: '商品列表',
          link: '/commodity-list',
          hasSub: false,
          isSub: false
        },
        {
          label: '包材列表',
          link: '/commodity-package-list',
          hasSub: false,
          isSub: false
        }
      ]
    },
    {
      label: '单号管理',
      isOpen: false,
      icon: 'anticon-credit-card',
      menu: [
        {
          label: '添加单号',
          link: '/billNo-add',
          hasSub: false,
          isSub: false
        },
        {
          label: '搜索单号',
          link: '/billNo-search',
          hasSub: false,
          isSub: false
        },
        {
          label: '单号列表',
          link: '/billNo-list',
          hasSub: true,
          isSub: false
        },
        {
          label: '卓志单号',
          link: '/billNo-zhuozhi',
          hasSub: false,
          isSub: true
        },
        {
          label: '二维码单号',
          link: '/billNo-qr',
          hasSub: false,
          isSub: true
        }
      ]
    },
    {
      label: '收件管理',
      isOpen: false,
      icon: 'anticon-inbox',
      menu: [{
        label: '收件人列表',
        link: '/receive-list',
        hasSub: false,
        isSub: false
      }]
    },
    {
      label: '打印管理',
      isOpen: false,
      icon: 'anticon-printer',
      menu: [
        {
          label: '打印货代发票',
          link: '/print-goods-invoice',
          hasSub: false,
          isSub: false
        },
        {
          label: '打印取件单',
          link: '/print-receive',
          hasSub: false,
          isSub: false
        },
        {
          label: '打印客户发票',
          link: '/print-client-invoice',
          hasSub: false,
          isSub: false
        }
      ]
    },
    {
      label: '运费管理',
      isOpen: false,
      icon: 'anticon-car',
      menu: [
        {
          label: '添加运费',
          link: '/freight-add',
          hasSub: false,
          isSub: false
        },
        {
          label: '运费列表',
          link: '/freight-list',
          hasSub: false,
          isSub: false
        },
        {
          label: '运输通道管理',
          link: '/freight-road',
          hasSub: false,
          isSub: false
        },
        {
          label: '清关地点管理',
          link: '/freight-place',
          hasSub: false,
          isSub: false
        }
      ]
    },
    {
      label: '历史管理',
      isOpen: false,
      icon: 'anticon-copy',
      menu: [
        {
          label: '订单备注历史列表',
          link: '/history-order-list',
          hasSub: false,
          isSub: false
        },
        {
          label: '运单单号历史列表',
          link: '/history-trans-list',
          hasSub: false,
          isSub: false
        }
      ]
    },
    {
      label: '派工管理',
      isOpen: false,
      icon: 'anticon-user-add',
      menu: [
        {
          label: '添加取件员',
          link: '/picker-add',
          hasSub: false,
          isSub: false
        },
        {
          label: '取件员列表',
          link: '/picker-list',
          hasSub: false,
          isSub: false
        },
        {
          label: '客户签单列表',
          link: '/picker-client-sign',
          hasSub: false,
          isSub: false
        },
        {
          label: '取件员包材列表',
          link: '/picker-trans-list',
          hasSub: false,
          isSub: false
        }
      ]
    },
    {
      label: '系统管理',
      isOpen: false,
      icon: 'anticon-setting',
      menu: [
        {
          label: '汇率设置',
          link: '/system-exchange',
          hasSub: false,
          isSub: false
        },
        {
          label: '权限管理',
          link: '/system-auth',
          hasSub: false,
          isSub: false
        },
        {
          label: '用户管理',
          link: '/system-user',
          hasSub: false,
          isSub: false
        },
        {
          label: '字典管理',
          link: '/system-dict',
          hasSub: false,
          isSub: false
        }
      ]
    }
  ];

  openOnly(menu): any {
    menu.isOpen = true;
    this.menus.forEach(item => {
      if (item.label !== menu.label) {
        item.isOpen = false;
      }
    });
  }
}
