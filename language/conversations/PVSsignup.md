---
title: PVSsignup
timestamp: 2016-12-11T16:08:33.206212415-08:00
---

Hi
* greeting

< Hi, How are you?
* greeting

Good thanks.
* greeting

How can I [join](signup) the predictive services pilot
* Ask_PS/signup


< Which Predictive Service are you interested in?
* Prompt/Product

The [Predictive Vision Service](product)
* ask_PS/conditions

^ [PVS](product) is currently available.
^ Users can sign up at http://metamind.io/signup and authenticate with both their Force.com or Heroku credentials
* Answer_PS/PVS_Signup

thanks, are there [instructions](docs) for downloading a cert and getting a JWT Token?
* Ask_PS/Docs

< Yes, Visit http://docs.metamind.io/docs/what-you-need-to-call-api to learn more
* Answer_PS/Docs

Perfect thanks!
* goodbye

< No Problem.
^ Please let me know if you have any other questions.
* Confirm_Completion/Follow_Up

Thats it, Thanks.
* affirmative/conclusion
