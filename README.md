# DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null:false, unique: true|

### Asociation
  belongs_to :groups, through: :members
  has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|

### Asociation
  has_many :users, through: :members
  has_many :messages

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Asociation
  belongs_to :user
  belomgs_to :group

##messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|text|
|group_id|integer|null: false, foreign_key: trure|
|user_id|integer|null: false, foreign_key: ture|

### Asociation
  belongs_to :user
  belongs_to :group
  has_many :members

