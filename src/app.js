import msg from './Message';
import $ from 'jquery';

$( document ).ready(function() {
   $('#showBtn').on('click', function(){
        var obj = new msg();
        obj.show();
   });
});
