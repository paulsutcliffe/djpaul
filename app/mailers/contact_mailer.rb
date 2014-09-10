class ContactMailer < ActionMailer::Base
  default from: "web@djpaul.pe"

  def new_message(message)
    @message = message
    @greeting = "Mensaje desde la web"
    mail(:to => "hola@djpaul.pe", :subject => @greeting, :replay_to => message.email, :from => "web@djpaul.pe")
  end
end
