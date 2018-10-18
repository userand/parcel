import $ from 'jquery'
import {Utils} from './utils'
import '../css/common.scss'
import '../css/index.scss'


$('#tab').tab({
    tabType: 'mouseover'
});

let calcs = new Utils(1,2)
console.log(  calcs.sum()  )

console.log( '我是首页' )