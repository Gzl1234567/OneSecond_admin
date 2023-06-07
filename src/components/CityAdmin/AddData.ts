interface Option {
  value: string | number
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: '北京市',
    label: '北京市',
    children: [
      {
        value: '北京市',
        label: '北京市'
      }
    ]
  },
  {
    value: '天津市',
    label: '天津市',
    children: [
      {
        value: '天津市',
        label: '天津市'
      }
    ]
  },
  {
    value: '河北省',
    label: '河北省',
    children: [
      {
        value: '石家庄市',
        label: '石家庄市'
      },
      {
        value: '唐山市',
        label: '唐山市'
      },
      {
        value: '秦皇岛市',
        label: '秦皇岛市'
      },
      {
        value: '邯郸市',
        label: '邯郸市'
      },
      {
        value: '邢台市',
        label: '邢台市'
      },
      {
        value: '保定市',
        label: '保定市'
      },
      {
        value: '张家口市',
        label: '张家口市'
      },
      {
        value: '承德市',
        label: '承德市'
      },
      {
        value: '沧州市',
        label: '沧州市'
      },
      {
        value: '廊坊市',
        label: '廊坊市'
      },
      {
        value: '衡水市',
        label: '衡水市'
      }
    ]
  },
  {
    value: '山西省',
    label: '山西省',
    children: [
      {
        value: '太原市',
        label: '太原市'
      },
      {
        value: '大同市',
        label: '大同市'
      },
      {
        value: '阳泉市',
        label: '阳泉市'
      },
      {
        value: '朔州市',
        label: '朔州市'
      },
      {
        value: '长治市',
        label: '长治市'
      },
      {
        value: '晋城市',
        label: '晋城市'
      },
      {
        value: '忻州市',
        label: '忻州市'
      },
      {
        value: '晋中市',
        label: '晋中市'
      },
      {
        value: '临汾市',
        label: '临汾市'
      },
      {
        value: '运城市',
        label: '运城市'
      },
      {
        value: '吕梁市',
        label: '吕梁市'
      }
    ]
  },
  {
    value: '内蒙古自治区',
    label: '内蒙古自治区',
    children: [
      {
        value: '呼和浩特市',
        label: '呼和浩特市'
      },
      {
        value: '呼伦贝尔市',
        label: '呼伦贝尔市'
      },
      {
        value: '赤峰市',
        label: '赤峰市'
      },
      {
        value: '扎兰屯市',
        label: '扎兰屯市'
      },
      {
        value: '鄂尔多斯市',
        label: '鄂尔多斯市'
      },
      {
        value: '乌兰察布市',
        label: '乌兰察布市'
      },
      {
        value: '巴彦淖尔市',
        label: '巴彦淖尔市'
      },
      {
        value: '二连浩特市',
        label: '二连浩特市'
      },
      {
        value: '霍林郭勒市',
        label: '霍林郭勒市'
      },
      {
        value: '包头市',
        label: '包头市'
      },
      {
        value: '乌海市阿尔山市',
        label: '乌海市阿尔山市'
      },
      {
        value: '乌兰浩特市',
        label: '乌兰浩特市'
      },
      {
        value: '锡林浩特市',
        label: '锡林浩特市'
      },
      {
        value: '根河市',
        label: '根河市'
      },
      {
        value: '满洲里市',
        label: '满洲里市'
      },
      {
        value: '额尔古纳市牙',
        label: '额尔古纳市牙'
      },
      {
        value: '克石市',
        label: '克石市'
      },
      {
        value: '临河市',
        label: '临河市'
      },
      {
        value: '丰镇市',
        label: '丰镇市'
      },
      {
        value: '通辽市',
        label: '通辽市'
      }
    ]
  },
  {
    value: '辽宁省',
    label: '辽宁省',
    children: [
      {
        value: '沈阳市',
        label: '沈阳市'
      },
      {
        value: '葫芦岛市',
        label: '葫芦岛市'
      },
      {
        value: '大连市',
        label: '大连市'
      },
      {
        value: '盘锦市',
        label: '盘锦市'
      },
      {
        value: '鞍山市',
        label: '鞍山市'
      },
      {
        value: '铁岭市',
        label: '铁岭市'
      },
      {
        value: '本溪市',
        label: '本溪市'
      },
      {
        value: '丹东市',
        label: '丹东市'
      },
      {
        value: '抚顺市',
        label: '抚顺市'
      },
      {
        value: '锦州市',
        label: '锦州市'
      },
      {
        value: '辽阳市',
        label: '辽阳市'
      },
      {
        value: '阜新市',
        label: '阜新市'
      },
      {
        value: '调兵山市',
        label: '调兵山市'
      },
      {
        value: '朝阳市',
        label: '朝阳市'
      },
      {
        value: '海城市',
        label: '海城市'
      },
      {
        value: '北票市',
        label: '北票市'
      },
      {
        value: '盖州市',
        label: '盖州市'
      },
      {
        value: '凤城市',
        label: '凤城市'
      },
      {
        value: '庄河市',
        label: '庄河市'
      },
      {
        value: '凌源市',
        label: '凌源市'
      },

      {
        value: '开原市',
        label: '开原市'
      },
      {
        value: '兴城市',
        label: '兴城市'
      },
      {
        value: '新民市',
        label: '新民市'
      },
      {
        value: '大石桥市',
        label: '大石桥市'
      },
      {
        value: '东港市',
        label: '东港市'
      },
      {
        value: '北宁市',
        label: '北宁市'
      },
      {
        value: '瓦房店市',
        label: '瓦房店市'
      },
      {
        value: '普兰店市',
        label: '普兰店市'
      },
      {
        value: '凌海市',
        label: '凌海市'
      },
      {
        value: '灯塔市',
        label: '灯塔市'
      },
      {
        value: '营口市',
        label: '营口市'
      }
    ]
  }
]

export default options
