import ValueSchema from "../models/Value";
import mongoose from "mongoose";
//-----------------------
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import SpeciesSchema from "../models/Species";
//------------------------
import StarGalaxySchema from "../models/StarGalaxy";


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  //----------------------
  Galaxys = mongoose.model("Galaxy", GalaxySchema);
  Stars = mongoose.model("Star", StarSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Moons = mongoose.model("Moon", MoonSchema);
  Speciess = mongoose.model("Species", SpeciesSchema);
  //----------------------
  StarGalaxys = mongoose.model("StarGalaxy", StarGalaxySchema);







}

export const dbContext = new DbContext();
