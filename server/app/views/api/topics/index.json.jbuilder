json.array! @topics do |topic|
  json.extract! topic, :id, :name, :img
end
