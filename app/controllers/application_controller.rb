class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :set_bot

  private

  def set_bot
    token = '7364905426:AAGJW6a-aCgXMIlYHVIskssLGtv1jH9Szwg'

    @bot = Telegram::Bot::Client.new(token)
  end
end
