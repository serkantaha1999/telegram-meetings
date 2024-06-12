class TelegramBotController < ApplicationController
  def message
    text = params.dig('message', 'text').downcase
    chat_id = params.dig('message', 'chat', 'id')
    if text
      case text
      when '/start'
        @bot.api.send_message(chat_id:, text: "Hello, #{message.from.first_name}!")
      else
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
        else
          @bot.api.send_message(text: 'Please enter: code - Gxxxxx (x - number) to create new ref system!', chat_id:)
        end
      end
    end
  end
end
