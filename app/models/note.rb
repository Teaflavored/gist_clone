# == Schema Information
#
# Table name: notes
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Note < ActiveRecord::Base


  validates :title, :user, presence: true

  belongs_to :user
  has_many :favorites
  has_many :favoriting_users, through: :favorites, source: :user
  has_many :gist_files, class_name: "GistFile", foreign_key: :gist_id, primary_key: :id
end
