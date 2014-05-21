class CategoriesController < InheritedResources::Base
  before_filter :authenticate_admin!

  def permitted_params
    params.permit(:category => [:name])
  end
end
