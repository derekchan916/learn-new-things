class Todo < ActiveRecord::Base
  validates :title, :body, :boolean, presence: true
  validates :boolean, inclusion: { in: [true, false] }
end
