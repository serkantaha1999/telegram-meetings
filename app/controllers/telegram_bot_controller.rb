class TelegramBotController < ApplicationController
  def message
    text = params.dig('message', 'text').downcase
    chat_id = params.dig('message', 'chat', 'id')
    if text.present? && text.include?('code -')
      code = text.split(' ')

      if code[2].size == 6 && code[2].start_with?('g')
        if Meeting.find_by(code: code[2]).present?
          return @bot.api.send_message(text: 'Sorry! But code has already exist! Create a new code for your meeting!', chat_id:)
        end

        Meeting.create(code: code[2])

        return @bot.api.send_message(text: 'Great! You created a new meeting!', chat_id:)
      end

      @bot.api.send_message(text: 'Sorry your format is wrong. Please enter: code - Gxxxxx (x - number)', chat_id:)
    end
  end
end
