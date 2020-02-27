//admin js to copy acf field name by click
jQuery(document).ready(function ($) {
  if ($('#acf-field-group-fields ul.acf-tbody li.li-field-name').length ) {
    makeAcfNameCopyable( $('#acf-field-group-fields ul.acf-tbody li.li-field-name') );
  }

  if ( $('.acf-field .acf-label').length ) {
    makeAcfNameCopyable( $('.acf-field .acf-label').not('td.acf-label') );
  }


});

function makeAcfNameCopyable(el) {
  let fieldName = '';
  let keepText  = '';
  el.css('cursor','pointer')
    .css('transition','all .32s ease')
    .click(function () {
      let that = jQuery(this);
      //select field name text and clean spaces
      if (that.hasClass('acf-label')) {
        fieldName = that.parents('.acf-field').data('name');
      } else {
        fieldName = that.html();
      }
      fieldName = fieldName.split(' ').join('');
      //creat an input field
      let tempInput = jQuery("<input>");
      jQuery("body").append(tempInput);
      //put the field name in the input then select, copy to clipboard & remove it
      tempInput.val(fieldName).select();
      document.execCommand("copy");
      tempInput.remove();
      //clicked effect (just for UX, not mandatory)
      that.css('background','green');
      that.css('color','#ebebeb');
      if (that.hasClass('acf-label')) {
        keepText = that.html();
      } else {
        keepText = fieldName;
      }
      that.text('COPIED!');
      setTimeout(function () {
        that.css('background','transparent');
        that.css('color','#444444');
        that.html(keepText);
      },2000);
    })
    .mouseenter(function() {
      jQuery(this).css('background','yellow');
    })
    .mouseleave(function() {
        jQuery(this).css('background','transparent').css('color','#444444');
    });
}
