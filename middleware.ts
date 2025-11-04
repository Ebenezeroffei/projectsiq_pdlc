
import { withAuth } from "next-auth/middleware"

export default withAuth((req, _) => { },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    },
)

export const config = {
    matcher: [
        '/admin',
        '/admin/(.*)',
    ]
}
