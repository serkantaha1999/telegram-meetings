Rails.application.routes.draw do
  root "home#index"

  get '/payment', to: 'home#payment'
  get '/pricing', to: 'home#pricing'
  get '/privacy', to: 'home#privacy'
end
