import express from "express";
import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService";
import { starsService } from "../services/StarsService";


export class GalaxysController extends BaseController {
    constructor() {
        super("api/galaxys");
        this.router
            .get("", this.getAll)
            .get("/:id/stars", this.getAllStarsByGalaxyId)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            res.send(await galaxysService.find(res.query));
        } catch (error) {
            next(error);
        }
    }

    async getAllStarsByGalaxyId(req, res, next) {
        try {
            res.send(await starsService.find({ star: req.params.id }))
        } catch (error) {

        }
    }



    async create(req, res, next) {
        try {
            res.send(201, await galaxysService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}
