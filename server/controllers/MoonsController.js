import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            res.send(await moonsService.find(res.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await moonsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}
