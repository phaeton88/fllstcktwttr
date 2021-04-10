class ApplicationController < ActionController::Base
  def check_for_session
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)
    if not session
      return render json: { error: 'unauthorised' }, status: 401
    end
    user = session.user
    return user
  end
end
