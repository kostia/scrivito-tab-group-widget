class TabWidget < Widget
  FONT_SIZES = (1..100).map { |i| "#{i}px" }

  attribute :title, :string, default: 'New Tab'
  attribute :content, :widgetlist

  attribute :font_size, :enum, values: FONT_SIZES, default: '14px'
  attribute :font_color, :string, default: '#000000'
  attribute :background_color, :string, default: '#FFFFFF'

  def self.valid_container_classes
    [TabGroupWidget]
  end

  def self.description_for_editor
    'Tab'
  end
end
