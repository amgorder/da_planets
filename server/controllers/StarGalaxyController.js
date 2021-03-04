
import express from "express";
import BaseController from "../utils/BaseController";
import { starGalaxyService } from "../services/StarGalaxyService";

export class StarGalaxyController extends BaseController {
    constructor() {
        super("api/stargalaxy");
        this.router
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    async create(req, res, next) {
        try {
            res.send(201, await starGalaxyService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await starGalaxyService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
}