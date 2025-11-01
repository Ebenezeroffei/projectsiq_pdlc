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

    static leads = {
        'listOrCreate': 'leads/',
        'detail': (id: string) => `leads/${id}/`,
        'markAsContacted': (id: string) => `leads/${id}/contacted/`,
    }
}

export default Endpoints