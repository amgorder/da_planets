import express from "express";
import BaseController from "../utils/BaseController";
import { speciessService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            res.send(await speciessService.find(res.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
}
