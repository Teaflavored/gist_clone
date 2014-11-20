# == Schema Information
#
# Table name: gist_files
#
#  id         :integer          not null, primary key
#  gist_id    :integer          not null
#  name       :string(255)      not null
#  body       :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class GistFile < ActiveRecord::Base
  validates :gist, :name, :body, presence: true

  belongs_to :gist, class_name: "Note", foreign_key: :gist_id, primary_key: :id
end
