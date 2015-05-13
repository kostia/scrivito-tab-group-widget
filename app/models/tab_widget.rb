class TabWidget < Widget
  attribute :title, :string, default: 'New Tab'
  attribute :content, :widgetlist

  def self.valid_container_classes
    [TabGroupWidget]
  end
end
