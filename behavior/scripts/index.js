'use strict'

exports.handle = (client) => {
  // Create steps
  const sayHello = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().helloSent)
    },

    prompt() {
      client.addResponse('welcome')
      client.addResponse('provide/documentation', {
        documentation_link: 'http://docs.init.ai',
      })
      client.addResponse('provide/instructions')

      client.updateConversationState({
        helloSent: true
      })

      client.done()
    }
  })

  const untrained = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addResponse('apology/untrained')
      client.done()
    }
  })
  
  const handleGreeting = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addTextResponse('Hola Compandre')
      client.done()
    }
  })

  const handleGoodbye = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addTextResponse('Adios, Hope to see you soon!')
      client.done()
    }
  })
  
  const collectProduct = client.createStep({
  satisfied() {
    return Boolean(client.getConversationState().productName)
  },

  prompt() {
    // Need to prompt user for Product    
    console.log('Prompt_product')
    client.done()
  },
})
  
  const ProvideSignup = client.createStep({
  satisfied() {
    return false
  },

  prompt() {
    // Need to provide Signup Instructions
    console.log('PS_Docs')
    client.done()
  },
})

  client.runFlow({
    classifications: {
      // map inbound message classifications to names of streams
    goodbye: 'goodbye',
    greeting: 'greeting'
    },
    autoResponses: {
      // configure responses to be automatically sent as predicted by the machine learning model
    },
    streams: {
      goodbye: handleGoodbye,
      greeting: handleGreeting,
      main: 'collectProduct',
      main: 'collectProduct',
      onboarding: [sayHello],
      end: [untrained],
    },
  })
}
