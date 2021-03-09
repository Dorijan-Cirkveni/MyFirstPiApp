function Login()
{
    try {
        const user = await PiNetworkClient.Authenticate()
        console.log(`Hello ${user.username}`)
    } catch (err) {
        console.log(err)
    }
}