import characterModel from "../../models/character/characterModel.js";
import Class from "../../models/class/classModel.js";
import Species from "../../models/species/speciesModel.js"; 
import User from "../../models/userModel.js";
import Item from "../../models/itemModel.js";
import Money from "../../models/moneyModel.js";
import Skill from "../../models/skillModel.js";
import CharacterHasStats from "../../models/character/character_has_stats.js";

async function GetByID(id) {
  const character = await characterModel.findByPk(id, {
    attributes: {
      exclude: ["character_id"],
    },
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Species,
        as: "species",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: CharacterHasStats,
        as: "characterStats",
        attributes: ["stat_name", "value"],
      },
      {
        model: Item,
        as: "items",
        attributes: ["name"],
        through: { attributes: ["quantity"] },
      },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
      {
        model: Skill,
        as: "skill",
        attributes: ["name", "description", "associated_stat"],
        through: { attributes: ["proficiency"] },
      },
    ],
  });

  // Transformar las estadísticas en un objeto plano
  const stats = {};
  if (character.characterStats) {
    character.characterStats.forEach((stat) => {
      stats[stat.stat_name] = stat.value;
    });
  }

  return {
    ...character.toJSON(),
    stats, // Agregar las estadísticas transformadas
  };
}

async function GetAll() {
  const characters = await characterModel.findAll({
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Species,
        as: "species",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Item,
        as: "items",
        attributes: ["name"],
        through: { attributes: ["quantity"] },
      },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
      {
        model: Skill,
        as: "skill",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: CharacterHasStats,
        as: "characterStats",
        attributes: ["stat_name", "value"],
      },
    ],
  });
  return characters;
}

async function GetByUserID(id) {
  const characters = await characterModel.findAll({
    where: {
      user_id: id,
    },
    attributes: {
      exclude: ["user_id"],
    },
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Species,
        as: "species",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: CharacterHasStats,
        as: "characterStats",
        attributes: ["stat_name", "value"],
      },
      {
        model: Item,
        as: "items",
        attributes: ["name"],
        through: { attributes: ["quantity"] },
      },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
      {
        model: Skill,
        as: "skill",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  // Transformar las estadísticas en un objeto plano para cada personaje
  return characters.map((character) => {
    const stats = {};
    if (character.characterStats) {
      character.characterStats.forEach((stat) => {
        stats[stat.stat_name] = stat.value;
      });
    }
    return {
      ...character.toJSON(),
      stats,
    };
  });
}

async function Create(data) {
  try {
    console.log("Received character data:", data); // 👈 Depuración
    const { stats, skills, items, ...characterData } = data;

    const character = await characterModel.create(characterData);

    if (stats) {
      for (const [stat_name, value] of Object.entries(stats)) {
        await CharacterHasStats.create({
          character_id: character.character_id,
          stat_name,
          value,
        });
      }
    }

    if (skills?.length) {
      for (const s of skills) {
        await character.addSkill(s.id, {
          through: { proficiency: s.proficiency },
        });
      }
    }

    if (items?.length) {
      for (const i of items) {
        await character.addItem(i.id, {
          through: { quantity: i.quantity },
        });
      }
    }

    return character;
  } catch (err) {
    console.error("Error inside Create:", err); // 👈 Depuración
    throw err;
  }
}

async function Edit(id, data) {
  const character = await characterModel.findByPk(id);
  const result = await character.update(data, {
    where: {
      character_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await characterModel.destroy({
    where: {
      character_id: id,
    },
  });
  return result;
}

export default {
  GetByID,
  GetAll,
  GetByUserID,
  Create,
  Edit,
  Remove,
};
