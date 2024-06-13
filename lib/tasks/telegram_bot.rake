namespace :telegram do
  desc "Run the Telegram bot"
  task bot: :environment do
    require 'telegram/bot'

    TOKEN = '7466068642:AAEHZyN_dMfQzImWfYtH0o0UIqlg98xC8r4'
    creator_id = 7009629638

    Telegram::Bot::Client.run(TOKEN) do |bot|
      bot.listen do |message|
        case message
        when Telegram::Bot::Types::Message
          if message.text
            case message.text
            when '/start'
              bot.api.send_message(chat_id: message.chat.id, text: "Hello, #{message.from.first_name}!")
            else
              if message.from.id == creator_id
                text = message.text.downcase
                chat_id = message.chat.id
                if text.present? && text.include?('code -') && text.include?(' - ')
                  code = text.split(' ')

                  if code.length != 5
                    bot.api.send_message(text: 'Sorry your format is wrong. Please enter: code - Gxxxxx (x - number) - @username (Worker)', chat_id:)
                    next
                  end

                  if code[2].size == 6 && code[2].start_with?('g')
                    if Meeting.find_by(code: code[2]).present?
                      bot.api.send_message(text: 'Sorry! But code has already exist! Create a new code for your meeting!', chat_id:)
                      next
                    end

                    Meeting.create(code: code[2], name: code[4])

                    bot.api.send_message(text: 'Great! You created a new meeting!', chat_id:)
                    next
                  end

                  bot.api.send_message(text: 'Sorry your format is wrong. Please enter: code - Gxxxxx (x - number) - @username (Worker)', chat_id:)
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
end
