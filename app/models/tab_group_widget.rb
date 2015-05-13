class TabGroupWidget < Widget
  attribute :tabs, :widgetlist, default: [
    TabWidget.new(title: 'First Tab'),
    TabWidget.new(title: 'Second Tab')
  ]

  def valid_widget_classes_for(field_name)
    [TabWidget]
  end

  def self.description_for_editor
    'Tab Group'
  end
end
