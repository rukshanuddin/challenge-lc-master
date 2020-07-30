class Link < ApplicationRecord
  belongs_to :topic

#   def name
#     "#{link.name}"
#   end

  validates :topic_id, presence: true
end