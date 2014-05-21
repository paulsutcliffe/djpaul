class ContactMailer < ActionMailer::Base
  default from: "web@djpaul.pe"

  def new_message(message)
    @message = message
    mail(:to => "hola@djpaul.pe", :subject => "Mensajes desde la web", :replay_to => message.email, :from => "web@djpaul.pe")
  end
end
