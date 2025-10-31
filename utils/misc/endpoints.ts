class Endpoints {
    static auth = {
        'login': 'login/',
        'requestPasswordReset': 'password-reset/',
        'validateToken': 'password-reset/validate_token/',
        'resetPassword': 'password-reset/confirm/',
    }

    static cars = {
        'listOrCreate': 'cars/',
        'detail': (id: string) => `cars/${id}/`,
        'form': 'cars/form/',
    }
}

export default Endpoints