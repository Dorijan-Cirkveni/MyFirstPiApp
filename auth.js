async function Login()
{
    const PiNetworkClient = window.PiNetwork;
    window.alert("Yo");
    try {
        window.alert("Authenticating...");
        const user = await PiNetworkClient.Authenticate()
        window.alert(`Hello ${user.username}`)
    } catch (err) {
        window.alert(err)
    }
}