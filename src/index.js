function eval(str) {
    // находим * или / в строке  вычисляем выражение и подставляем обратно в
    // строку str.replace()
    // снова ищем и подставляем
    while (true) {
        if (str.search(/(\-*\d+\.*\d*\s*\/\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\*\s*\-*\d+\.*\d*)/) == -1 &&
            str.search(/(\-*\d+\.*\d*\s*\+\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\-\s*\-*\d+\.*\d*)/) == -1) break;

        if (str.search(/(\-*\d+\.*\d*\s*\/\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\*\s*\-*\d+\.*\d*)/) != -1) {

            str = str.replace(/(\-*\d+\.*\d*\s*\/\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\*\s*\-*\d+\.*\d*)/, function (match) {  //выдаст первое совпадение match или с / или с *
                if (match.search(/(\-*\d+\.*\d*\s*\/\s*\-*\d+\.*\d*)/) != -1) {
                    console.log(match+'***');
                    let arr = match.split('/');
                    return ((+arr[0]) / (+arr[1]) + '');   //доп скобки для
                    // учета отрицательных
                } else {
                    let arr = match.split('*');
                    return ((+arr[0]) * (+arr[1]) + '');
                }
            })
        }


        if (str.search(/(\-*\d+\.*\d*\s*\/\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\*\s*\-*\d+\.*\d*)/) == -1 &&
            str.search(/(\-*\d+\.*\d*\s*\+\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\-\s*\-*\d+\.*\d*)/) != -1) {

            str = str.replace(/(\-*\d+\.*\d*\s*\+\s*\-*\d+\.*\d*)|(\-*\d+\.*\d*\s*\-\s*\-*\d+\.*\d*)/, function (match) {  //выдаст первое совпадение match или с / или с *
                if (match.search(/(\-*\d+\.*\d*\s*\+\s*\-*\d+\.*\d*)/) != -1) {
                    console.log(match+'+++');
                    let arr = match.split('+');
                    return ((+arr[0]) + (+arr[1])).toString();
                } else {
                    console.log(match+'---');
                    //сепаратор '-' не правильно разделяет строку если числа
                    // отрицательные. меняем - на ?
                    let arrG = match.split('');
                    for(let i=1;i<arrG.length;i++){
                        if(arrG[i]=='-') {
                            arrG.splice(i,1,'?');
                            break;
                        }
                    }
                    let subStr=arrG.join('');
                    let arr=subStr.split('?');
                    return ((+arr[0]) - (+arr[1])).toString();
                }
            })
        }

    }
    return +str;
}


function expressionCalculator(expr) {
    // ищем выражение в скобках и вызываем eval, подставляем значение вместо
    // скобок
    while (true) {
        //console.log(expr);
        if (expr.search(/\([^\(\)]*\)/) != -1) {
            expr=expr.replace(/\([^\(\)]*\)/,function (match) {
                let matchArr=match.split('');
                matchArr.splice(0,2);    //delete brackets
                matchArr.splice(matchArr.length-2,2);
                return eval(matchArr.join(''))+'';  //запускаем eval
            })
        }
        else {
            //console.log("**********"+ expr)
            return eval(expr);
        }
    }
}


module.exports = {
    expressionCalculator
}
