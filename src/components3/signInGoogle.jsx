const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('896677057897-qkdr7sf04eeni5k4atutjebvsomf4kv5.apps.googleusercontent.com');

app.post('/google-login', async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '896677057897-qkdr7sf04eeni5k4atutjebvsomf4kv5.apps.googleusercontent.com',
        });
        const payload = ticket.getPayload();
        const { sub, email, name } = payload;

        return res.status(200).json({ msg: 'Google login successful' });
    } catch (error) {
        return res.status(400).json({ msg: 'Google login failed' });
    }
});
