module.exports = function toReadable (n) {
    let o1 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve'
      }
      if (n <= 12) return o1[n];//0 - 12

      if (n == 13) return 'thirteen';
      if (n == 15) return 'fifteen';
      if (n == 18) return 'eighteen';


      if (n <= 19 && n > 12) return o1[String(n)[1]] + 'teen'; //13 - 19
      let o2 = {
        0: '',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
      }
      if (n > 19 && n < 100 && String(n)[1] == 0) return o2[String(n)[0]];// 20 - 90 кратное 10ти;
      if (n > 19 && n < 100 && String(n)[1] !== 0) return o2[String(n)[0]] + " " + o1[String(n)[1]];// 21 - 99 не кратное 10ти;
      if (n > 99 && (n % 100 == 0)) return o1[String(n)[0]] + " hundred"; //100 - 900 сотни;
      if (n > 99 && (n % 10 == 0)) return o1[String(n)[0]] + " hundred " + o2[String(n)[1]];//110-990 кратно 10ти;
      if (String(n)[1] == 0) return o1[String(n)[0]] + " hundred " + o1[String(n)[2]];//101 - 109
      if (String(n)[1] == 1 && String(n)[2] == 1) return o1[String(n)[0]] + " hundred eleven";//111
      if (String(n)[1] == 1 && String(n)[2] == 2) return o1[String(n)[0]] + " hundred twelve";//112

      if (String(n)[1] == 1 && String(n)[2] == 3) return o1[String(n)[0]] + " hundred thirteen";//113
      if (String(n)[1] == 1 && String(n)[2] == 5) return o1[String(n)[0]] + " hundred fifteen";//115
      if (String(n)[1] == 1 && String(n)[2] == 8) return o1[String(n)[0]] + " hundred eighteen";//118



      if (String(n)[1] == 1 && (String(n)[2] > 2)) return o1[String(n)[0]] + " hundred " + o1[String(n)[2]] + 'teen';//113-119
      if (String(n)[1] > 1 || String(n)[1] == 0) return o1[String(n)[0]] + " hundred " + o2[String(n)[1]] + " " + o1[String(n)[2]];
}
