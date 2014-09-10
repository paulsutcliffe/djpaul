require "spec_helper"

describe ContactMailer, :type => :mailer do
  describe "new_message" do
    let(:message) { FactoryGirl.create(:message) }
    let(:mail) { ContactMailer.new_message(message) }

    it "renders the headers" do
      mail.subject.should eq("Mensaje desde la web")
      mail.to.should eq(["hola@djpaul.pe"])
      mail.from.should eq(["web@djpaul.pe"])
      mail.reply_to.should eq([message.email])
    end

    it "renders the body" do
      mail.body.encoded.should match("Mensaje desde la web")
      mail.body.encoded.should match(contact.name)
      mail.body.encoded.should match(contact.email)
      mail.body.encoded.should match(contact.message)
    end
  end
end
