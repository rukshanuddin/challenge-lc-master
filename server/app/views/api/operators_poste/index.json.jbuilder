json.array! @operators_poste do |operators_poste|
  json.extract! operators_poste, :id, :operator_id, :poste_id
end
