;(function() {

scrivito.on('content', function(content) {
  $(content).find('.scrivito-tab-group').each(function(i, tab_group) {
    tab_group = $(tab_group);
    tab_group.find('.scrivito-tab-title').each(function(i, tab_title) {
      tab_title = $(tab_title);
      tab_title.click(function() {
        tab_group.find('.scrivito-tab-title').removeClass('scrivito-tab-active');
        tab_title.addClass('scrivito-tab-active');
        tab_group.find('.scrivito-tab-content').removeClass('scrivito-tab-active');
        tab_group.find('.scrivito-tab-content').eq(tab_title.index())
          .addClass('scrivito-tab-active');
      });
    });
  });

  $(content).find('[data-scrivito-tab-toggle-details]').on('click', function() {
    var tab_details_link = $(this);
    var tab_details_id = tab_details_link.attr('data-scrivito-tab-toggle-details');
    var tab_details = tab_details_link.parent().find('.scrivito-tab-details-'+tab_details_id);
    tab_details.toggle();
    return false;
  });

  if ($.minicolors) {
    var attach_minicolors = function(field_name) {
      $(content).find('[class^=scrivito-tab-details] [data-scrivito-field-name='+field_name+']')
        .each(function() {
          var field_tag = $(this);
          field_tag.minicolors({
            changeDelay: 500,
            change: function(color) { field_tag.scrivito('save', color); }
          });
        });
    }
    attach_minicolors('font_color');
    attach_minicolors('background_color');
  }
});

}());
