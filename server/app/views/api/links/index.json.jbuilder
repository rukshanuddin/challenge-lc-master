json.array! @links do |link| 
  json.extract! link, :id, :topic_id, :name, :link, :category, :section, :language, :blurb
end