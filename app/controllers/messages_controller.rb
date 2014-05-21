class MessagesController < InheritedResources::Base
  before_filter :authenticate_admin!, except: [:create]

  def permitted_params
    params.permit(:message => [:name, :email, :message])
  end

  def create
    create! do |success, failure|
      success.html do
        ContactMailer.new_message(@message).deliver

        flash[:notice] = "Tu mensaje fue enviado con exito"
        redirect_to '/#contact'
      end
      failure.html do
        flash[:notice] = "No ha sido enviado el mensaje."
        redirect_to '/#contact'
      end
    end
  end
end
