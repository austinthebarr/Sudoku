import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
$(function(){
 $("#huh").click(function(){
   for(let i = 0; i < 9; i++ ){
     $("#grid").append(
        "<tr>"+
          "<td><input id='cell-"+""+i+" "+"' type='number'></td>" +
          "<td><input id='cell-'  type='number'></td>" +
          "<td><input id='cell-'  type='number'></td>" +

          "<td><input id='cell-'  type='number'></td>" +
          "<td><input id='cell-'  type='number'></td>" +
          "<td><input id='cell-'  type='number'></td>" +

          "<td><input id='cell-'  type='number'></td>" +
          "<td><input id='cell-'  type='number'></td>" +
          "<td><input id='cell-'  type='number'></td>" +
        "</tr>" )
   }
 });
});
