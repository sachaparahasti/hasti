var nodemailer=require('nodemailer');
// lvsh qjgh tsaq amhv
class EMail 
{
    constructor()
    {

        this.sender = 'sachhasti@gmail.com';
        this.password = 'lvsh qjgh tsaq amhv';
        this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: this.sender,
              pass: this.password,
            },
          });
        this.MailSender.verify().then().catch(console.error);
    }
    send(receiver,subject,message)
    {
        this.MailSender.sendMail({
            from: `<${this.sender}>`, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
          }).then(info => {}).catch(console.error);
    }
}
module.exports.EMail = EMail;