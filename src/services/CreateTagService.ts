import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagsRequest{
  name: string;
}

class CreateTagService {
  async execute({ name } :  ITagsRequest) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if(!name){
      throw new Error("Tag não informada!");
    }

    const tagsAlreadyExists = await tagsRepository.findOne({
      name,
    });

    if (tagsAlreadyExists) {
      throw new Error("Tag já existe");
    }

    const tag = tagsRepository.create({
      name
    });

    await tagsRepository.save(tag);
    return tag;

  }
}

export { CreateTagService }