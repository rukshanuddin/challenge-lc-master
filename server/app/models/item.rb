class Item < ApplicationRecord
  belongs_to :product

  def name
    "#{product.name}"
  end

  validates :product, presence: true
end
