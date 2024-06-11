class MeetingsController < ApplicationController
  def index
    meeting = Meeting.find_by(code: params[:code].downcase)

    if meeting.present?
      render json: { meeting:, success: true }
    else
      render json: { error: 'Your meeting not found!', success: false }
    end
  end
end
