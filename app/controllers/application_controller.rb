class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :set_bot

  private

  def set_bot
    token = '7466068642:AAEHZyN_dMfQzImWfYtH0o0UIqlg98xC8r4'

    @bot = Telegram::Bot::Client.new(token)
  end
end
