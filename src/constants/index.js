export const apiKey = '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' ; //from https://platform.openai.com/account/api-keys
// in some cases, your api key maybe already expired
// tries to use a new account to create an api key

export const dummyMessages = [
    {
        role: 'user', 
        content: 'How are you?'
    },
    {
        role: 'assistant',
        content: "I'm fine, How may i help you today."
    },
    {
        role: 'user',
        content: 'create an image of a dog playing with cat'
    },
    {
        role: 'assistant',
        content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
    }
]
