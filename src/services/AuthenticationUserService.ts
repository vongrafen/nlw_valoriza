import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface IAuthenticateRequest {
  email: string,
  password: string
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticateRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("E-mail ou senha incorretos!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail ou senha incorretos!");
    }

    const token = sign(
      {
        email: user.email
      },
        "9601bd3874c0f2e1ecaeba67a2adc131", 
      {
        subject: user.id,
        expiresIn: "1d" 
      }
    );

    return token;

  }
}

export { AuthenticateUserService }