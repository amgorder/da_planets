import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarGalaxyService {
    async delete(id) {
        return await dbContext.StarGalaxys.findByIdAndDelete(id)
    }
    async create(body) {
        return await dbContext.StarGalaxys.create(body)
    }
    async find(query = {}) {
        return await dbContext.StarGalaxys.find(query).populate("star galaxy");
    }
    async findById(id) {
        // let studentClassroom = await dbContext.StarGalaxy.findById(id);
        // if (!studentClassroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return studentClassroom;
    }
}

export const starGalaxyService = new StarGalaxyService();