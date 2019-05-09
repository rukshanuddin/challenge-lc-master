json.array! @items do |item|
  json.extract! item, :id, :product_id, :name, :check, :sent
end
