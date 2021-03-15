// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'nu2d3k4imb'
export const apiEndpoint = `https://${apiId}.execute-api.ap-south-1.amazonaws.com/dev`

export const authConfig = {
    // Create an Auth0 application and copy values from it into this map
    domain: 'mrgawdetest.eu.auth0.com',            // Auth0 domain
    clientId: '9VYOPNOVbSeGTF8xvHGXaEFthbMCPo4o',          // Auth0 client id
    callbackUrl: 'http://localhost:3000/callback'
}
