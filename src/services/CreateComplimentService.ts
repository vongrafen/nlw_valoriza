import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentsRequest{
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentService {
  async execute({tag_id, user_sender, user_receiver, message} : IComplimentsRequest){

    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UsersRepositories);

    if (user_sender == user_receiver) {
      throw new Error("Não é permitido criar elogio para si mesmo!");
    }

    const userExists = await userRepositories.findOne(user_receiver);

    if (!userExists) {
      throw new Error("Usuário inválido!");      
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    await complimentsRepositories.save(compliment);
    return compliment;
    
  }
}

export { CreateComplimentService };