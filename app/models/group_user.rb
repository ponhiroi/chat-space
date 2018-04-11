class GroupUser < ApplicationRecord
  belngs_to :group
  belongs_to :user
end
