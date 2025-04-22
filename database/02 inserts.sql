
-- Sample data for Dungeons & Dragons database

USE dungeons_and_databases;

-- Class Features
INSERT INTO class_feature (class_feature_id, name, description, level) VALUES
(1, 'Rage', 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.', 1),
(2, 'Sneak Attack', 'You know how to strike subtly and exploit a foe''s distraction.', 1),
(3, 'Spellcasting', 'As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.', 1),
(4, 'Divine Sense', 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears.', 1),
(5, 'Bardic Inspiration', 'You can inspire others through stirring words or music.', 1),
(6, 'Wild Shape', 'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before.', 2),
(7, 'Extra Attack', 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.', 5),
(8, 'Uncanny Dodge', 'Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack''s damage against you.', 5);

-- Classes
INSERT INTO class (class_id, name, description, hit_die, main_stat, caster, saving_throw_proficiencies, tool_proficiencies, weapon_proficiencies, skill_proficiencies, armor_training, class_feature_id) VALUES
(1, 'Barbarian', 'A fierce warrior of primitive background who can enter a battle rage.', 'd12', 'STR', 0, 'STR, CON', NULL, 'Simple, Martial', 'Nature, Animal Handling', 'Light, Medium, Shields', 1),
(2, 'Rogue', 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.', 'd8', 'DEX', 0, 'DEX, INT', 'Thieves'' Tools', 'Simple, Hand Crossbows', 'Stealth, Sleight of Hand', 'Light', 2),
(3, 'Wizard', 'A scholarly magic-user capable of manipulating the structures of reality.', 'd6', 'INT', 1, 'INT, WIS', NULL, 'Daggers, Darts', 'Arcana, History', NULL, 3),
(4, 'Paladin', 'A holy warrior bound to a sacred oath.', 'd10', 'STR', 1, 'WIS, CHA', NULL, 'Simple, Martial', 'Religion, Persuasion', 'All, Shields', 4),
(5, 'Bard', 'An inspiring magician whose power echoes the music of creation.', 'd8', 'CHA', 1, 'DEX, CHA', 'Musical Instruments', 'Simple', 'Performance, Persuasion', 'Light', 5),
(6, 'Druid', 'A priest of the Old Faith, wielding the powers of nature.', 'd8', 'WIS', 1, 'INT, WIS', 'Herbalism Kit', 'Clubs, Scimitars', 'Nature, Survival', 'Light, Medium, Shields', 6);


-- Skills
INSERT INTO skill (skill_id, name, description, associated_stat) VALUES
(1, 'Acrobatics', 'Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation.', 'DEX'),
(2, 'Animal Handling', 'When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal''s intentions, the GM might call for a Wisdom (Animal Handling) check.', 'WIS'),
(3, 'Arcana', 'Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.', 'INT'),
(4, 'Athletics', 'Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.', 'STR'),
(5, 'Deception', 'Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions.', 'CHA'),
(6, 'History', 'Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.', 'INT'),
(7, 'Insight', 'Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone''s next move.', 'WIS'),
(8, 'Intimidation', 'When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check.', 'CHA'),
(9, 'Investigation', 'When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check.', 'INT'),
(10, 'Medicine', 'A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.', 'WIS'),
(11, 'Nature', 'Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.', 'INT'),
(12, 'Perception', 'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses.', 'WIS'),
(13, 'Performance', 'Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.', 'CHA'),
(14, 'Persuasion', 'When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check.', 'CHA'),
(15, 'Religion', 'Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.', 'INT'),
(16, 'Sleight of Hand', 'Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check.', 'DEX'),
(17, 'Stealth', 'Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.', 'DEX'),
(18, 'Survival', 'The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.', 'WIS');


-- Stats
INSERT INTO stats (stats_id, DEXTERITY, INTELLIGENCE, STRENGTH, CHARISMA, CONSTITUTION, WISDOM) 
VALUES
(1, 12, 8, 16, 10, 14, 13),
(2, 16, 14, 10, 12, 10, 8),
(3, 10, 16, 8, 14, 12, 13),
(4, 10, 12, 16, 14, 12, 8),
(5, 14, 10, 8, 16, 12, 13),
(6, 14, 12, 10, 8, 14, 16),
(7, 14, 10, 15, 8, 16, 12),
(8, 18, 14, 10, 12, 12, 8),
(9, 12, 18, 8, 16, 10, 14),
(10, 12, 10, 18, 16, 14, 8);


-- Money
INSERT INTO money (money_id, platinum, gold, silver, copper) VALUES
(1, 0, 10, 5, 20), -- Starting money for level 1 characters
(2, 0, 15, 10, 50),
(3, 0, 25, 15, 10),
(4, 0, 20, 8, 30),
(5, 0, -2, 20, 12),
(6, 1, 50, 25, 40), -- More money for level 5 characters
(7, 2, 75, 30, 15),
(8, 3, 120, 40, 25),
(9, 2, 85, 15, 30),
(10, 1, 65, 35, 50);


INSERT INTO `user` 
(`user_id`, `email`, `password`, `created_at`, `first_name`, `last_name`, `role`, `nickname`) 
VALUES 
(1, 'dungeon.master@gmail.com', 'password123', '2025-03-15 18:30:00', 'Morgan', 'Blackwood', 'master', 'ArchMage'),
(2, 'barbarian.player@gmail.com', 'axeswing456', '2025-03-16 10:15:00', 'Mike', 'Johnson', 'player', 'MountainCrusher'),
(3, 'rogue.player@gmail.com', 'sneaky789', '2025-03-16 14:20:00', 'Sarah', 'Williams', 'player', 'ShadowDancer'),
(4, 'wizard.player@gmail.com', 'fireball123', '2025-03-17 09:45:00', 'Thomas', 'Chen', 'player', 'SpellSeeker'),
(5, 'druid.player@gmail.com', 'naturelover777', '2025-03-18 11:30:00', 'Emma', 'Garcia', 'player', 'WildShape');

INSERT INTO `notes` (notes_id, title, description, created_at, user_id) VALUES
(1, 'The Ancient Tomb', 'The party will encounter a sealed tomb in the Whispering Woods...', '2025-03-15 18:30:00', 1),
(2, 'Campaign Villain Ideas', 'Lord Blackthorn - corrupt noble secretly working with a cult...', '2025-03-16 10:15:00', 1),
(3, 'Next Session Outline', 'Town of Millbrook celebration interrupted by mysterious disappearances...', '2025-03-16 14:20:00', 1),
(4, 'Thokk''s Battle Memories', 'Need to remember that goblin chieftain''s name...', '2025-03-17 09:45:00', 2),
(5, 'Lilith''s Heist Plans', 'Next target: Merchant Guild treasury...', '2025-03-18 11:30:00', 2),
(6, 'Alaric''s Research Journal', 'Fascinating discovery in the ancient text from Highpeak Library...', '2025-03-19 13:30:00', 3),
(7, 'Bramble''s Nature Observations', 'Signs of corruption spreading in Whispering Woods...', '2025-03-20 14:45:00', 4);

-- Associate master user with notes
INSERT INTO `user_has_notes` 
(`user_id`, `notes_id`) 
VALUES 
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(3, 5),  
(4, 6),  
(5, 7);

-- Characters
INSERT INTO `character` 
(`character_id`, `first_name`, `last_name`, `age`, `alignment`, `level`, `money_id`, `stats_id`, `species_id`, `class_id`, `appereance`, `lore`, `personality`, `user_id`) 
VALUES
(1, 'Thokk', 'Mountaincrusher', 25, 'Chaotic Neutral', 1, 1, 1, 3, 1, 'A stout dwarf with a wild red beard and numerous battle scars. His arms are as thick as tree trunks.', 'Born in the Iron Mountains, Thokk was raised to be a miner but always felt a calling for adventure. After saving his clan from a goblin raid, he embraced his inner rage and set out to test his might.', 'Loud, boisterous, and always ready for a fight or a drinking contest. Despite his rough exterior, he values loyalty above all else.', 2),
(2, 'Lilith', 'Shadowstep', 32, 'Chaotic Good', 1, 2, 2, 2, 2, 'A lithe elf with midnight black hair and piercing green eyes. She moves with calculated grace and always keeps her face partially hidden.', 'Orphaned at a young age, Lilith survived on the streets by becoming a skilled pickpocket. She now uses her talents to help the downtrodden, stealing from corrupt nobles to aid the poor.', 'Suspicious of authority but fiercely protective of innocents. She rarely speaks about her past and prefers to work alone, though she''s beginning to value having allies.', 3),
(3, 'Alaric', 'Spellweaver', 45, 'Neutral Good', 1, 3, 3, 1, 3, 'A slender human with prematurely white hair and intelligent blue eyes. He wears ornate robes covered in arcane symbols.', 'A former apprentice to the royal court wizard, Alaric left the comfort of the castle to research ancient magics. He believes knowledge should be free to all, not hoarded by the elite.', 'Curious and methodical, Alaric documents everything he encounters. He can be absent-minded when focused on magical theory but becomes sharply attentive when his friends are in danger.', 4),
(4, 'Gareth', 'Lightbringer', 28, 'Lawful Good', 1, 4, 4, 1, 4, 'A well-built human with short blond hair and determined brown eyes. His armor is always immaculately polished, bearing his deity''s symbol.', 'The son of a blacksmith who received a divine vision after saving a priest from bandits. He has sworn an oath to protect the innocent and uphold justice wherever he goes.', 'Steadfast and honorable to a fault. Gareth sees the world in terms of right and wrong and struggles with moral ambiguity. He believes everyone deserves a chance at redemption.', 5),
(5, 'Melody', 'Windwhisper', 26, 'Neutral', 1, 5, 5, 2, 5, 'A graceful elf with flowing golden hair often adorned with flowers. Her eyes shift color with her mood, and her smile is captivating.', 'Born to a renowned elven music master, Melody showed magical aptitude through her songs from childhood. She travels to collect stories and songs from different cultures.', 'Cheerful and charismatic, Melody finds beauty in everything. She uses her music to lift spirits and bring people together, believing harmony in music can create harmony in life.', 2),
(6, 'Thokk', 'Mountaincrusher', 30, 'Chaotic Neutral', 5, 6, 7, 3, 1, 'A battle-hardened dwarf with a braided red beard now adorned with trophies from his victories. His body is covered in ritual tattoos commemorating his greatest kills.', 'After years of wandering, Thokk has made a name for himself as a fearsome warrior. He has defeated numerous foes and even briefly served as a champion in a gladiatorial arena before his wanderlust took him back to the open road.', 'Still boisterous but now with a strategic mind that his enemies often underestimate. His loyalty to his companions has deepened into an unshakeable bond.', 4),
(7, 'Lilith', 'Shadowstep', 37, 'Chaotic Good', 5, 7, 8, 2, 2, 'Her once-black hair now has a streak of silver from a close encounter with death magic. She moves like a shadow and wears a cloak made from a displacer beast she defeated.', 'Lilith uncovered a conspiracy among the merchant guild and has made powerful enemies. She now balances her Robin Hood activities with staying one step ahead of assassins sent to silence her.', 'More willing to trust allies but still keeps secrets close. She has developed a taste for the finer things in life, though she still gives most of her wealth away.', 5),
(8, 'Alaric', 'Spellweaver', 50, 'Neutral Good', 5, 8, 9, 1, 3, 'His white hair now reaches his waist, and his eyes occasionally glow with arcane energy. Mystical tattoos on his hands help channel his increasingly powerful spells.', 'Alaric discovered ancient texts hinting at a lost civilization of magic users. He studies relics and ruins, believing this forgotten knowledge could help prevent a prophesied magical catastrophe.', 'Still curious but more confident in his abilities. He has become more pragmatic, understanding that sometimes knowledge must be protected rather than freely shared when it could be dangerous.', 3),
(9, 'Gareth', 'Lightbringer', 33, 'Lawful Good', 5, 9, 10, 1, 4, 'Now bears a scar across his face from a demon''s claw, which glows faintly when he uses his divine powers. His armor is enhanced with holy runes.', 'After witnessing corruption within his own religious order, Gareth underwent a crisis of faith before establishing his own small temple dedicated to true justice and compassion rather than rigid dogma.', 'Still devoted to good but now understands the complexities of morality. He judges less and listens more, though he remains unwavering against true evil.', 4),
(10, 'Bramble', 'Oakenheart', 150, 'True Neutral', 5, 10, 6, 2, 6, 'A wood elf with bark-like skin and hair that changes with the seasons. Small flowers sometimes bloom in her hair when she''s happy.', 'Once the guardian of a sacred grove that was corrupted by dark magic, Bramble travels to cleanse natural sites and restore balance. She carries a seedling from her fallen grove, seeking a new home for it.', 'Deeply connected to nature and sometimes struggles to understand "civilized" customs. She is slow to anger but fierce when protecting the natural world.', 5);

-- Items
INSERT INTO item (item_id, name, description, value, type, quantity, rarity, magic, character_id) VALUES
(1, 'Longsword', 'A versatile sword that can be used with one or two hands.', 15, 'weapon', 1, 'common', 0, 1),
(2, 'Healing Potion', 'A red liquid that restores 2d4+2 hit points when consumed.', 50, 'consumable', 1, 'common', 1, 2),
(3, 'Chain Mail', 'Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath to prevent chafing and to cushion the impact of blows.', 75, 'armor', 1, 'common', 0, 3),
(4, 'Thieves'' Tools', 'This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.', 25, 'tool', 1, 'common', 0, 4),
(5, 'Wand of Magic Missiles', 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the magic missile spell from it.', 500, 'wondrous', 1, 'uncommon', 1, 5),
(6, 'Longbow', 'A weapon consisting of a stave made of wood, strung with a cord and used to shoot arrows.', 50, 'weapon', 1, 'common', 0, 1),
(7, 'Shield', 'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2.', 10, 'armor', 1, 'common', 0, 2),
(8, 'Potion of Greater Healing', 'You regain 4d4+4 hit points when you drink this potion.', 100, 'consumable', 1, 'uncommon', 1, 3),
(9, 'Studded Leather', 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.', 45, 'armor', 1, 'common', 0, 4),
(10, 'Dagger', 'A small knife with a pointed blade used for stabbing or cutting.', 2, 'weapon', 1, 'common', 0, 5),
(11, 'Spellbook', 'Essential for wizards, this book contains spells and is where they record new spells found.', 50, 'wondrous', 1, 'common', 0, 6),
(12, 'Herbalism Kit', 'This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists.', 5, 'tool', 1, 'common', 0, 7),
(13, 'Lute', 'A stringed musical instrument with a long neck, fretted fingerboard, and a rounded body.', 35, 'instrument', 1, 'common', 0, 8),
(14, 'Boots of Elvenkind', 'While you wear these boots, your steps make no sound.', 250, 'wondrous', 1, 'uncommon', 1, 9),
(15, 'Staff of the Python', 'You can use an action to speak this staffs command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake.', 1000, 'staff', 1, 'uncommon', 1, 10),
(16, 'Javelin', 'A light spear designed primarily to be thrown.', 5, 'weapon', 1, 'common', 0, 1),
(17, 'Explorer''s Pack', 'Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin.', 10, 'tool', 1, 'common', 0, 2),
(18, 'Ring of Protection', 'You gain a +1 bonus to AC and saving throws while wearing this ring.', 1500, 'wondrous', 1, 'rare', 1, 3),
(19, 'Alchemist''s Supplies', 'These special tools include the items needed to pursue a craft or trade.', 50, 'tool', 1, 'common', 0, 4),
(20, 'Greataxe', 'A large, heavy axe that requires two hands to wield properly.', 30, 'weapon', 1, 'common', 0, 5);


-- Species Features
INSERT INTO species_feature (species_feature_id, name, description) VALUES
(1, 'Darkvision', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.'),
(2, 'Fey Ancestry', 'You have advantage on saving throws against being charmed, and magic can''t put you to sleep.'),
(3, 'Dwarven Resilience', 'You have advantage on saving throws against poison, and you have resistance against poison damage.'),
(4, 'Draconic Ancestry', 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type.'),
(5, 'Lucky', 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.');

-- Species
INSERT INTO species (species_id, name, creature_type, size, speed, darkvision, species_feature_id, character_id) VALUES
(1, 'Human', 'Humanoid', 'Medium', '30', 0, 5, 1),
(2, 'Elf', 'Humanoid', 'Medium', '30', 1, 2, 2),
(3, 'Dwarf', 'Humanoid', 'Medium', '25', 1, 3, 3),
(4, 'Dragonborn', 'Humanoid', 'Medium', '30', 0, 4, 5),
(5, 'Halfling', 'Humanoid', 'Small', '25', 0, 5, 6);


-- Character Skills
INSERT INTO `character_has_skill` (character_id, skill_id, proficiency) VALUES
-- Thokk Level 1
(1, 4, 1), -- Athletics
(1, 8, 1), -- Intimidation
-- Lilith Level 1
(2, 1, 1), -- Acrobatics
(2, 16, 1), -- Sleight of Hand
(2, 17, 1), -- Stealth
-- Alaric Level 1
(3, 3, 1), -- Arcana
(3, 6, 1), -- History
-- Gareth Level 1
(4, 4, 1), -- Athletics
(4, 15, 1), -- Religion
-- Melody Level 1
(5, 5, 1), -- Deception
(5, 13, 1), -- Performance
(5, 14, 1), -- Persuasion
-- Thokk Level 5
(6, 4, 1), -- Athletics
(6, 8, 1), -- Intimidation
(6, 11, 1), -- Nature
-- Lilith Level 5
(7, 1, 1), -- Acrobatics
(7, 5, 1), -- Deception
(7, 16, 1), -- Sleight of Hand
(7, 17, 1), -- Stealth
-- Alaric Level 5
(8, 3, 1), -- Arcana
(8, 6, 1), -- History
(8, 9, 1), -- Investigation
(8, 15, 1), -- Religion
-- Gareth Level 5
(9, 4, 1), -- Athletics
(9, 14, 1), -- Persuasion
(9, 15, 1), -- Religion
-- Bramble Level 5
(10, 2, 1), -- Animal Handling
(10, 11, 1), -- Nature
(10, 12, 1), -- Perception
(10, 18, 1); -- Survival

-- Character Items
INSERT INTO `character_has_item` (character_id, item_id, quantity) VALUES
-- Thokk Level 1
(1, 20, 1), -- Greataxe
(1, 3, 1),  -- Chain Mail
(1, 2, 2),  -- Healing Potion
(1, 16, 3), -- Javelin
(1, 17, 1), -- Explorer's Pack
-- Lilith Level 1
(2, 10, 2), -- Dagger
(2, 9, 1),  -- Studded Leather
(2, 4, 1),  -- Thieves' Tools
(2, 2, 1),  -- Healing Potion
(2, 17, 1), -- Explorer's Pack
-- Alaric Level 1
(3, 10, 1), -- Dagger
(3, 11, 1), -- Spellbook
(3, 2, 1),  -- Healing Potion
(3, 17, 1), -- Explorer's Pack
(3, 19, 1), -- Alchemist's Supplies
-- Gareth Level 1
(4, 1, 1),  -- Longsword
(4, 7, 1),  -- Shield
(4, 3, 1),  -- Chain Mail
(4, 2, 2),  -- Healing Potion
(4, 17, 1), -- Explorer's Pack
-- Melody Level 1
(5, 10, 1), -- Dagger
(5, 13, 1), -- Lute
(5, 9, 1),  -- Studded Leather
(5, 2, 1),  -- Healing Potion
(5, 17, 1), -- Explorer's Pack
-- Thokk Level 5
(6, 20, 1),  -- Greataxe
(6, 3, 1),   -- Chain Mail
(6, 8, 3),   -- Potion of Greater Healing
(6, 16, 5),  -- Javelin
(6, 18, 1),  -- Ring of Protection
-- Lilith Level 5
(7, 10, 2),  -- Dagger
(7, 9, 1),   -- Studded Leather
(7, 4, 1),   -- Thieves' Tools
(7, 8, 2),   -- Potion of Greater Healing
(7, 14, 1),  -- Boots of Elvenkind
-- Alaric Level 5
(8, 10, 1),  -- Dagger
(8, 11, 1),  -- Spellbook
(8, 5, 1),   -- Wand of Magic Missiles
(8, 8, 2),   -- Potion of Greater Healing
(8, 19, 1),  -- Alchemist's Supplies
-- Gareth Level 5
(9, 1, 1),   -- Longsword
(9, 7, 1),   -- Shield
(9, 3, 1),   -- Chain Mail
(9, 8, 3),   -- Potion of Greater Healing
(9, 18, 1),  -- Ring of Protection
-- Bramble Level 5
(10, 6, 1),  -- Longbow
(10, 9, 1),  -- Studded Leather
(10, 12, 1), -- Herbalism Kit
(10, 8, 2),  -- Potion of Greater Healing
(10, 15, 1); -- Staff of the Python
