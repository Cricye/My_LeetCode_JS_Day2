// 使用迭代的方式实现 flatton 函数


/**
 * 使用递归的方式处理
 * wrap内保存结果ret
 * 返回一个递归函数
 ** @returns
 */
var arr = [1,2,3,[4,5],[6,[7,[8]]]]

function wrap() {
    var ret = [];
    return function flat(a) {
        for(var item of a) {
            if(item.consttuctor==Array) {
                ret.concat(flat(item))
            }else{
                ret.push(item)
            }
        }
        return ret
    }
}
console.log(wrap() (arr));