# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  note_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Favorite < ActiveRecord::Base
  validates :user, :note, presence: true
  validates :user_id, uniqueness: { scope: :note_id }
  belongs_to :user
  belongs_to :note
end
