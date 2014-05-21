ActionMailer::Base.smtp_settings = {
  :address              => 'mail.djpaul.pe',
  :port                 => 587,
  :domain               => 'djpaul.pe',
  :user_name            => 'web@djpaul.pe',
  :password             => 'djpaulpe99',
  :authentication       => 'plain',
  :enable_starttls_auto => false
}

