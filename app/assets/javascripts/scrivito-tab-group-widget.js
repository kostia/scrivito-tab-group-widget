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
});

}());
