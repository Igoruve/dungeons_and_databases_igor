import Character from "../../models/character/characterModel.js";
import CharacterHasClass from "../../models/character/character_has_class.js";
import CharacterHasItem from "../../models/character/character_has_item.js";
import CharacterHasSkill from "../../models/character/character_has_skill.js";
import CharacterHasSpecies from "../../models/character/character_has_species.js";
import CharacterHasStats from "../../models/character/character_has_stats.js";

export const createCharacter = async (req, res) => {
  const {
    stats,
    items,
    skills,
    class_id,
    species_id,
    money,
    ...characterData
  } = req.body;

  try {
    // Step 1: Create the Character
    const character = await Character.create(characterData);
    console.log("Character created:", character.toJSON());

    // Step 2: Create Stats
    if (stats && Array.isArray(stats)) {
      console.log("Inserting stats:", stats);

      for (const stat of stats) {
        console.log(`Inserting stat ${stat.name}: ${stat.value}`);
        await CharacterHasStats.create({
          character_id: character.character_id,
          stat_name: stat.name,
          value: stat.value,
        });
      }
    }

    // Step 3: Create class association
    if (class_id) {
      await CharacterHasClass.create({
        character_id: character.character_id,
        class_id,
        level: characterData.level || 1,
      });
    }

    // Step 4: Create species association
    if (species_id) {
      await CharacterHasSpecies.create({
        character_id: character.character_id,
        species_id,
      });
    }

    // Step 5: Create item associations
    if (items && items.length > 0) {
      for (const item of items) {
        await CharacterHasItem.create({
          character_id: character.character_id,
          item_id: item.id,
          quantity: item.quantity || 1,
        });
      }
    }

    // Step 6: Create skill associations
    if (skills && skills.length > 0) {
      for (const skill of skills) {
        await CharacterHasSkill.create({
          character_id: character.character_id,
          skill_id: skill.id,
          proficiency: skill.proficiency || 0,
        });
      }
    }

    // Step 7: Return response
    res.status(201).json({
      message: "Character created successfully",
      character: {
        ...character.toJSON(),
        stats: stats || [],
        class_id,
        species_id,
        items: items || [],
        skills: skills || [],
        money: money || {},
      },
    });
  } catch (error) {
    console.error("Error creating character:", error);
    res.status(500).json({ error: error.message });
  }
};
