'use strict'

const User = use('App/Models/User');
const Tokens = use('App/Models/Tokenn')

class AuthController {
    async showauth({ request, response, view }) {
        return view.render('login')
    }

    async showreg({ request, response, view }) {
        return view.render('register')
    }

    async register({ request, auth, response }) {

        let user = await User.create(request.all())

        //generate token for user;
        let token = await auth.generate(user)

        Object.assign(user, token)

        return response.json(user)
    }

    // async show

    async login({ request, auth, response, view }) {

        let { email, password } = request.all();

        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let token = await auth.generate(user)

                Object.assign(user, token)
                return response.json(user)
            }


        } catch (e) {
            console.log(e)
            return response.json({ message: 'You are not registered!' })
        }

    }

    async logout({ auth, response }) {
        try {
            const apiToken = auth.getAuthHeader()
            await auth.authenticator("jwt").revokeTokens([apiToken])

            return response.status(200).json({ "message": "Logout success" })
        } catch (e) {
            return response.status(400).json({ "message": "Logout not success" })
        }

    }

}

module.exports = AuthController