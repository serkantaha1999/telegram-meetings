Rails.application.routes.draw do
  root "home#index"

  get '/payment', to: 'home#payment'
  get '/pricing', to: 'home#pricing'
  get '/privacy', to: 'home#privacy'

  post '/telegram_send_message', to: 'telegram_messages#create'

  post '/message', to: 'telegram_bot#message'

  resources :meetings, only: %i[index]
end
