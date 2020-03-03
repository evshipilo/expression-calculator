function eval(str) {
    // находим * или / в строке  вычисляем выражение и подставляем обратно в
    // строку str.replace()
    // снова ищем и подставляем
    while (true) {
        if (str.search(/(\-*\d+ \/ \-*\d+)|(\-*\d+ \* \-*\d+)/) == -1 &&
            str.search(/(\-*\d+ \+ \-*\d+)|(\-*\d+ \- \-*\d+)/) == -1) break;

        if (str.search(/(\-*\d+ \/ \-*\d+)|(\-*\d+ \* \-*\d+)/) != -1) {

            str = str.replace(/(\-*\d+ \/ \-*\d+)|(\-*\d+ \* \-*\d+)/, function (match) {  //выдаст первое совпадение match или с / или с *
                if (match.search(/(\-*\d+ \/ \-*\d+)/) != -1) {
                    let arr = match.split(' / ');
                    return ((+arr[0]) / (+arr[1])+'');   //доп скобки для
                    // учета отрицательных
                } else {
                    let arr = match.split(' * ');
                    return ((+arr[0]) * (+arr[1])+'');
                }
            })
        }


        if (str.search(/(\-*\d+ \/ \-*\d+)|(\-*\d+ \* \-*\d+)/) == -1 &&
            str.search(/(\-*\d+ \+ \-*\d+)|(\-*\d+ \- \-*\d+)/) != -1) {

            str = str.replace(/(\-*\d+ \+ \-*\d+)|(\-*\d+ \- \-*\d+)/, function (match) {  //выдаст первое совпадение match или с / или с *
                if (match.search(/(\-*\d+ \+ \-*\d+)/) != -1) {
                    let arr = match.split(' + ');
                    return ((+arr[0]) + (+arr[1])).toString();
                } else {
                    let arr = match.split(' - ');
                    return ((+arr[0]) - (+arr[1])).toString();
                }
            })
        }

    }
    return str
}


function expressionCalculator(expr) {
        // ищем выражение в скобках и вызываем eval, подставляем значение вместо
        // скобок
    if (str.search(/\([^\(\)]*\)/) != -1)

    }

    module.exports = {
        expressionCalculator
    }
