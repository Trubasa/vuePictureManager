/**
 * Created by Trubasa 1141521502@qq.com on 2018/1/8.
 */
export default {
  doWhile(obj) { // 判断一个值是否存在，若不存在，则等下再尝试 {target 判断的对象，fun 对象存在执行函数，delay 多久判断一次 默认300ms，num 判断多少次 默认5次}
    var that=this;
    var num = obj.num||5;

    doIt();
    function doIt() {
      var target=obj.target();
      if (target) {
        obj.ready();
      } else {
        console.log('条件不成立，延迟执行');
        if(num<1){
          return;
        }
        setTimeout(function () {
          doIt();
        }, obj.delay || 300);
      }
      num--
    }

  },
  dateFormatter: function (time) {
    var time = new Date(time);
    var y = time.getFullYear();//年
    var m = time.getMonth() + 1;//月
    var d = time.getDate();//日
    var h = time.getHours();//时
    var mm = time.getMinutes();//分
    if (mm < 10) {
      mm = '0' + mm;
    }
    var s = time.getSeconds();//秒
    return (y + "-" + m + "-" + d + " " + h + ":" + mm);//日期
  },
  verify: function (label, value, verifyType) {
    var result = true;
    switch (verifyType) {
      case 'money':
        if (value > 0 && value % 1 === 0) {

        } else {
          bus.$emit('changeMsgObj', JSON.stringify({
            msg: label + '请输入大于0的整数',
            type: 'warning'
          }));
          result = false;
        }
        break;
      case 'require':
        if (value) {

        } else {
          bus.$emit('changeMsgObj', JSON.stringify({
            msg: label + '是必填项',
            type: 'warning'
          }));
          result = false;
        }
        break;

    }
    return result;
  }
}
