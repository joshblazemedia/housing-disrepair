// document.addEventListener('DOMContentLoaded', function() {
//     const menuItem = document.querySelector('#smallnavmenu').querySelector('.menu-item-has-children .page_item');
//     menuItem.addEventListener('mouseover', function() {
//         this.querySelector('ul').style.display = 'grid';
//     });
//     menuItem.addEventListener('mouseout', function() {
//         this.querySelector('ul').style.display = 'none';
//     });
// });

$(document).ready(function(){
   
    $('#smallnavmenu').find('.menu-item-has-children, .page_item').hover(
        function() {
    $(this).children( "ul" ).css("display", "grid" );
        }, function() {
    $( this ).children( "ul" ).css("display", "none" );
  }
    );
    
});
