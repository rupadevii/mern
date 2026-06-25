import jwt from "jsonwebtoken"

export const generateAccessToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: "1m"})

    return token
}

export const generateRefreshToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: "7d"})

    return token
}