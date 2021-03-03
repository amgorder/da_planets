import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciessService {

    async create(body) {
        return await dbContext.Speciess.create(body)
    }

    async find(query = {}) {
        let speciess = await dbContext.Speciess.find(query);
        return speciess;
    }
    async findById(id) {
        // let species = await dbContext.Speciess.findById(id);
        // if (!species) {
        //     throw new BadRequest("Invalid Id");
        // }
        // return species;
    }
}

export const speciessService = new SpeciessService();