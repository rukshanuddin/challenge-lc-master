class Topic < ApplicationRecord
  has_many :links, dependent: :destroy
end