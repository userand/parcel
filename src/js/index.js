import '../css/common.scss'
import '../css/index.scss'
import '../css/scss/bootstrap.scss'
import $ from 'jquery'
import './plugin/tab'
import {Utils} from './utils'

$('#tab').tab({
    tabType: 'mouseover'
});

let calcs = new Utils(1,2)
console.log(  calcs.sum()  )

console.log( '我是首页' )