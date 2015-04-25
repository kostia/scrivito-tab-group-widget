class TabWidget < Widget
  attribute :title, :string
  attribute :content, :widgetlist

  def self.valid_container_classes
    [TabGroupWidget]
  end
end
