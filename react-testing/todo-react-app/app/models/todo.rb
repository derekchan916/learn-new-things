class Todo < ActiveRecord::Base
  validates :title, :body, :done, presence: true
  validates :boolean, inclusion: { in: [true, false] }
end
