Djpaul::Application.routes.draw do
  get "mixes/descarga"

  get "mixes/non_fan"

  root to: 'inicio#index'

  get "inicio/index"

end
