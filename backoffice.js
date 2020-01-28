//admin js to copy acf field name by click
jQuery(document).ready(function ($) {
  if ($('li.li-field-name').length) {
    $('li.li-field-name')
      //style cursor to clickable
      .css('cursor','pointer')
      .click(function () {
        let that = $(this);
        //select field name text and clean spaces
        let fieldName = that.text()
        fieldName = fieldName.split(' ').join('');
        //creat an input field
        let $temp = $("<input>");
        $("body").append($temp);
        //put the field name in the input then select, copy to clipboard & remove it
        $temp.val(fieldName).select();
        document.execCommand("copy");
        $temp.remove();
        //clicked effect (just for UX, not mandatory)
        that.css('transition','all .32s ease');
        that.css('background','green');
        that.css('color','white');
        setTimeout(function () {
          that.css('background','transparent');
          that.css('color','#444444');
        },200);
      });
  }
});
