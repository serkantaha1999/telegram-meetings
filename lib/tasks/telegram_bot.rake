namespace :telegram do
  desc "Run the Telegram bot"
  task bot: :environment do
    require 'telegram/bot'

    TOKEN = '7364905426:AAGJW6a-aCgXMIlYHVIskssLGtv1jH9Szwg'

    Telegram::Bot::Client.run(TOKEN) do |bot|
      bot.api.delete_webhook

      bot.listen do |message|
        case message
        when Telegram::Bot::Types::Message
          if message.text
            case message.text
            when '/start'
              bot.api.send_message(chat_id: message.chat.id, text: "Hello, #{message.from.first_name}!")
            else
              text = message.text.downcase
              chat_id =  message.chat.id
              if text.present? && text.include?('code -')
                code = text.split(' ')

                if code[2].size == 6 && code[2].start_with?('g')
                  if Meeting.find_by(code: code[2]).present?
                    bot.api.send_message(text: 'Sorry! But code has already exist! Create a new code for your meeting!', chat_id:)
                    next
                  end

                  Meeting.create(code: code[2], name: "#{message.from.first_name} #{message.from.last_name}" || "#{message.from.username}")

                  bot.api.send_message(text: 'Great! You created a new meeting!', chat_id:)
                  next
                end

                bot.api.send_message(text: 'Sorry your format is wrong. Please enter: code - Gxxxxx (x - number)', chat_id:)
              else
                bot.api.send_message(text: 'Please enter: code - Gxxxxx (x - number) to create new ref system!', chat_id:)
              end
            end
          end
        end
      end
    end
  end
end
