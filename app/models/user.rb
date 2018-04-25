class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :messages
  has_many :group_users
  has_many :groups, through: :group_users

  scope :search, -> (input) {where('name LIKE(?)', input)}
  scope :not_id, -> (user_name) {where.not(id: user_name)}
end
