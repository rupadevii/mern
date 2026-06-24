import jwt from "jsonwebtoken"

export const generateAccessToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: "15m"})

    return token
}