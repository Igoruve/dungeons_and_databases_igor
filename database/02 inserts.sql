
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
INSERT INTO class (class_id, name, description, hit_die, main_stat, caster, saving_throw_proficiencies, tool_proficiencies, weapon_proficiencies, skill_proficiencies, armor_training) VALUES
(1, 'Barbarian', 'A fierce warrior of primitive background who can enter a battle rage.', 12, 'STR', 0, 'STR, CON', NULL, 'Simple, Martial', 'Nature, Animal Handling', 'Light, Medium, Shields'),
(2, 'Rogue', 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.', 8, 'DEX', 0, 'DEX, INT', 'Thieves'' Tools', 'Simple, Hand Crossbows', 'Stealth, Sleight of Hand', 'Light'),
(3, 'Wizard', 'A scholarly magic-user capable of manipulating the structures of reality.', 6, 'INT', 1, 'INT, WIS', NULL, 'Daggers, Darts', 'Arcana, History', NULL),
(4, 'Paladin', 'A holy warrior bound to a sacred oath.', 10, 'STR', 1, 'WIS, CHA', NULL, 'Simple, Martial', 'Religion, Persuasion', 'All, Shields'),
(5, 'Bard', 'An inspiring magician whose power echoes the music of creation.', 8, 'CHA', 1, 'DEX, CHA', 'Musical Instruments', 'Simple', 'Performance, Persuasion', 'Light'),
(6, 'Druid', 'A priest of the Old Faith, wielding the powers of nature.', 8, 'WIS', 1, 'INT, WIS', 'Herbalism Kit', 'Clubs, Scimitars', 'Nature, Survival', 'Light, Medium, Shields');


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



INSERT INTO `user` 
(`user_id`, `email`, `password`, `created_at`, `first_name`, `last_name`, `role`, `nickname`) 
VALUES 
(1, 'dungeon.master@gmail.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', '2025-03-15 18:30:00', 'Morgan', 'Blackwood', 'master', 'ArchMage'),
(2, 'barbarian.player@gmail.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', '2025-03-16 10:15:00', 'Mike', 'Johnson', 'player', 'MountainCrusher'),
(3, 'demo@gmail.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', '2025-03-16 14:20:00', 'Sarah', 'Williams', 'player', 'ShadowDancer'),
(4, 'wizard.player@gmail.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', '2025-03-17 09:45:00', 'Thomas', 'Chen', 'player', 'SpellSeeker'),
(5, 'druid.player@gmail.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', '2025-03-18 11:30:00', 'Emma', 'Garcia', 'player', 'WildShape');

INSERT INTO `notes` (notes_id, title, description, created_at, user_id) VALUES
(1, 'The Ancient Tomb', 'The party will encounter a sealed tomb in the Whispering Woods, hidden beneath an ancient oak marked with runic symbols of warning. The entrance is sealed with a complex lock mechanism requiring three specific keystones scattered throughout the forest. Local legends speak of the tomb belonging to Archmagus Vathiron, a powerful wizard who sealed himself away with his most dangerous creations.
Inside the tomb, the party will navigate through a series of trapped chambers designed to test both courage and wit. The first chamber contains animated stone guardians that activate when light touches them - forcing the party to navigate in darkness or face combat. The second chamber features a floor puzzle based on constellations that will flood the room with corrosive liquid if solved incorrectly.
The final chamber houses Vathiron''s sarcophagus, surrounded by pedestals holding artifacts of great power. However, disturbing the sarcophagus will awaken Vathiron himself, now transformed into a lich after centuries of magical experiments in isolation. He will initially attempt to converse with the party, curious about the outside world, but will become hostile if they attempt to take any artifacts or if they mention the spreading corruption in the woods - which is actually caused by magical energy leaking from his tomb.', '2025-03-15 18:30:00', 1),
(2, 'Campaign Villain Ideas', 'Lord Blackthorn is a corrupt noble secretly working with a cult dedicated to the ancient deity Tharizdun. As the respected governor of Westmarch Province, he maintains a public persona of generosity and justice while funneling resources to the cult. His ultimate aim is to locate and unseal the three Void Shards that, when combined, can tear open a gateway for his deity to enter the material plane. He''s charismatic, calculating, and believes the coming age of darkness will elevate him to godhood as reward for his service.
The Crimson Circle is a mercenary company led by Commander Vex, a former military leader who was disgraced after a battle went terribly wrong under his command. Now he sells his services to the highest bidder, but holds a personal vendetta against the kingdom that cast him out. His company consists of highly trained specialists, each with unique abilities that complement one another in combat. They''re currently employed by Lord Blackthorn but are unaware of his true intentions, believing they''re simply eliminating political rivals.
The Whispering Lady appears as a beautiful elven woman who can only be seen by those in moments of desperation or grief. She offers comfort and solutions to problems, but each bargain made with her comes with terrible unforeseen consequences. She is actually an aspect of Tharizdun, seeking to create chaos and suffering to weaken the barriers between planes. Her true form is a shifting mass of shadows with glowing violet eyes. Several NPCs the party has already met have made deals with her, explaining their recent strange behaviors.', '2025-03-16 10:15:00', 1),
(3, 'Next Session Outline', 'The town of Millbrook''s harvest celebration will be interrupted by mysterious disappearances of several children. The festivities include traditional games like apple bobbing, pie eating contests, and an archery competition the party can participate in. As night falls and lanterns are lit around the town square, screams will be heard from the northern edge of town, where a child was last seen being dragged into the forest by a shadowy figure.
Investigation will reveal strange tracks leading into the forest - not quite human, not quite animal. Townsfolk will share stories of similar disappearances fifty years ago, solved by a now-deceased hunter named Goren Wolfbane. His daughter, Eliza, still lives in a cabin at the edge of town and possesses her father''s journal which contains clues about the creature - a Changeling that feeds on youth and innocence to maintain its disguise. The creature has been posing as kindly traveler staying at the local inn.
The party must track the creature to its lair in an abandoned mine shaft where they''ll find the missing children in a trance-like state, having their life force slowly drained. The Changeling will attempt to bargain for its freedom, offering ancient knowledge or magical secrets. If defeated, the children will recover, but one may remain changed by the experience, occasionally speaking prophecies in a language only the party''s wizard can partially understand - providing hooks to future adventures involving the weakening planar boundaries.', '2025-03-16 14:20:00', 1),
(4, 'Legendary Artifacts', 'The Orb of Zephyr is said to be hidden within the Storm Peaks, a treacherous mountain range where violent thunderstorms rage perpetually. According to ancient texts in the Great Library of Astoria, the orb was created by an archmage who sought to tame the elemental forces of air. When properly attuned, the artifact grants its wielder control over winds and weather, allowing them to summon gusts strong enough to deflect arrows or gentle breezes to fill a ship''s sails. However, legends warn that the orb demands respect - those who use it recklessly may find themselves swept away by the very storms they attempt to command.
The Everflame Chalice has changed hands countless times throughout history, often bringing both fortune and tragedy to those who possess it. The copper vessel never tarnishes and contains an eternal flame that burns without fuel. It cannot be extinguished by conventional means, though submersion in the tears of a dragon is said to temporarily dim its light. The chalice provides warmth in a fifteen-foot radius and any water placed within it becomes a healing elixir that can cure disease and mend wounds. The Cult of Eternal Fire has sought this artifact for generations, believing it to be the physical manifestation of their deity''s blessing upon the world.
The Shadowstep Cloak once belonged to Lysander the Unseen, a legendary thief who stole secrets from kings and treasures from dragons. The midnight-black garment seems to absorb light rather than reflect it, and when the hood is drawn up, the wearer can step between shadows as though they were doorways. Each use of this power ages the wearer slightly, taking minutes from their life that can never be restored. The cloak currently resides in the private collection of Baron Redmond, though few know he possesses only a replica - the true artifact was stolen three months ago by an unknown culprit who has been using its power to infiltrate noble households throughout the kingdom.', '2025-03-17 09:45:00', 1),
(5, 'Political Landscape of Atheria', 'The Kingdom of Verlinden stands as the dominant human realm in central Atheria, ruled by the aging King Edmund II who has no clear heir. The king''s health has been failing for the past year, leading to increased political maneuvering among the five Great Houses who each believe they have legitimate claims to the throne. House Blackwood controls most of the kingdom''s military forces and has been strategically placing loyal commanders in key fortresses. House Silversmith dominates trade and banking, effectively controlling the kingdom''s economy. House Thornfield holds ancestral ties to the royal bloodline through a marriage three generations past. House Oakhart controls the richest agricultural lands and could potentially starve the capital if provoked. House Wavecrest commands the kingdom''s naval forces and has recently been strengthening alliances with neighboring maritime powers.
Beyond Verlinden''s borders lies the Elven Conclave of Illyria, an ancient confederation of woodland realms unified under High Sentinel Thaelorin. Relations between Verlinden and Illyria have grown increasingly strained after human logging operations encroached upon sacred groves near the border. The elves have withdrawn their ambassadors from human lands and there are rumors of elven rangers sabotaging lumber camps. The dwarven kingdom of Khaz-Morad to the east remains neutral in this growing conflict, though they continue to sell weapons to both sides while publicly calling for peaceful resolution.
The Southern Principalities consist of a dozen small independent city-states that have recently formed a defensive alliance against the expanding Crimson Empire across the sea. These principalities vary greatly in government and culture, but all fear imperial conquest. The most powerful among them, the merchant republic of Venstria, has been secretly funding rebel groups within Imperial territories while publicly maintaining diplomatic relations. The Arcane Collegium, technically independent from all political entities, has grown concerned about the rising tensions and has dispatched observers to all major capitals. Their true motivation remains unclear, though some suspect they seek to prevent any conflict that might threaten ancient magical sites scattered throughout the continent.', '2025-03-18 11:30:00', 1),
(6, 'The Lost City of Aethrazir', 'Buried beneath the shifting sands of the Crimson Desert lies Aethrazir, once the jewel of the ancient Nhazir civilization. According to fragmentary records in the Royal Archives, the city was sealed by its own inhabitants some 1,200 years ago in a desperate attempt to contain a magical catastrophe. The exact nature of this catastrophe remains unclear - some texts refer to a plague that transformed citizens into crystalline statues, while others mention a tear in the fabric of reality that allowed entities from the Far Realm to enter our world. Whatever the truth, the city''s location was systematically erased from maps, and powerful aversion enchantments were placed around the region to discourage exploration.
Recent earthquakes have revealed portions of what appears to be a massive domed structure of opalescent stone approximately 60 miles northeast of the Caravanserai of Seven Winds. The renowned explorer Cassandra Vale has identified these ruins as potentially being the legendary entrance to Aethrazir based on astronomical alignments and architectural similarities to confirmed Nhazir remnants. Her expedition departed three months ago but was scheduled to return after six weeks. No word has been received from Vale or her team, but desert nomads report strange lights and sounds emanating from the excavation site during the new moon.
The Nhazir were known for their unparalleled mastery of crystalline magic - the art of infusing gemstones with arcane energy to create devices of extraordinary power. If Aethrazir has indeed been found, it may contain technological and magical innovations lost to modern civilization. Of particular interest is the rumored Central Spire, said to house the Astrolabe of Convergence, a device that could allegedly predict celestial events with perfect accuracy and open portals to distant locations. However, any expedition must exercise extreme caution, as the magical defenses and containment measures would still be active, and whatever calamity the ancient Nhazir sought to contain may likewise remain a threat.', '2025-03-19 16:20:00', 1),
(7, 'Rival Adventuring Party: The Silver Ravens', 'The Silver Ravens have established themselves as one of the most effective and flamboyant adventuring companies in the realm, often arriving just before our heroes to claim glory and rewards. Led by the charismatic half-elf bard Lysander Brightwood, they have a flair for the dramatic and always ensure local bards document their exploits in song. Lysander dual-wields enchanted short swords and is known for composing ballads of his victories while still engaged in combat. His public persona is one of good-natured rivalry, but in private, he harbors deep insecurity and fears being forgotten or overshadowed - driving him to increasingly dangerous stunts to maintain his reputation.
The group''s tactical genius is Zora Flameheart, a tiefling war wizard specializing in battlefield control and devastating fire magic. Orphaned during religious purges in the northern provinces, Zora views her companions as the family she never had and is fiercely protective of them. Though she presents a cold and calculating demeanor, she secretly collects children''s dolls, keeping one from each town they save as mementos of the normal childhood she never experienced. Zora and Lysander have a complicated romantic history that occasionally compromises their professional judgment during critical missions.
The moral compass of the Ravens is Thaddeus Ironheart, a human paladin devoted to Tyr who frequently finds himself apologizing for his companions'' excesses. He joined the group after they saved his monastery from a demon incursion, feeling that his deity had called him to guide these talented but impulsive individuals toward righteous action. Unknown to his companions, Thaddeus suffers from prophetic nightmares showing a great darkness consuming the world - a darkness he believes only the combined efforts of all adventurers, including both the Ravens and the player''s party, can prevent. He has been trying to orchestrate an alliance between the groups, but Lysander''s competitive nature has thus far thwarted his efforts. The Silver Ravens also include Grunk the "Civilized" Orc artificer and Willow Thorngage, a halfling ranger with her companion wolverine, Snapper.', '2025-03-20 20:10:00', 1),
(8, 'The Planar Convergence Theory', 'According to the ancient texts recovered from the Celestial Library, our material plane exists within a complex cosmic arrangement often visualized as concentric spheres. The innermost spheres contain the elemental planes - Fire, Water, Earth, and Air - while the outermost spheres encompass the divine realms and the Far Realm. Between these lie the transitive planes such as the Ethereal and Shadow planes. Conventional wisdom holds that these planes remain separated by metaphysical barriers that prevent unrestricted interaction, with planar travel requiring considerable magical power and precise arcane formulations to breach these natural boundaries.
However, the controversial scholar Magister Velanora has proposed what she calls the "Planar Convergence Theory" based on her observations of increasing planar phenomena over the past decade. According to Velanora''s calculations, the planes naturally shift closer to one another in a cosmic cycle lasting approximately 7,000 years. During the convergence peak, which she believes will occur within the next three years, the barriers between planes will thin dramatically. Minor manifestations are already being reported: spontaneous elemental effects, ghostly apparitions becoming visible without magical aid, and dreams that seem to draw from collective memories or future events. The Magisterium has dismissed Velanora''s theories as sensationalist conjecture, particularly her assertion that the last convergence coincided with the Calamity that ended the Age of Wonders.
If Velanora''s predictions prove accurate, the coming convergence would have profound implications for all forms of magic. Spells drawing power from other planes would become more potent but potentially more unstable. Summoning rituals would require fewer components but might result in entities arriving with greater independence from their summoner''s control. Most concerning are the planar rifts that could form in locations with historical magical significance, creating permanent connections to other realms unless properly sealed. The Arcane Collegium has reluctantly established a monitoring network at key ley line intersections, though they publicly maintain this is merely a precautionary measure rather than an endorsement of what they term "convergence hysteria" among the common folk.', '2025-03-21 13:45:00', 1);

-- Characters
INSERT INTO `character` 
(`character_id`, `first_name`, `last_name`, `age`, `alignment`, `level`, `appearance`, `lore`, `personality`, `user_id`) 
VALUES
(1, 'Thokk', 'Mountaincrusher', 25, 'Chaotic Neutral', 1, 'A stout dwarf with a wild red beard and numerous battle scars. His arms are as thick as tree trunks.', 'Born in the Iron Mountains, Thokk was raised to be a miner but always felt a calling for adventure. After saving his clan from a goblin raid, he embraced his inner rage and set out to test his might.', 'Loud, boisterous, and always ready for a fight or a drinking contest. Despite his rough exterior, he values loyalty above all else.', 2),
(2, 'Lilith', 'Shadowstep', 32, 'Chaotic Good', 1, 'A lithe elf with midnight black hair and piercing green eyes. She moves with calculated grace and always keeps her face partially hidden.', 'Orphaned at a young age, Lilith survived on the streets by becoming a skilled pickpocket. She now uses her talents to help the downtrodden, stealing from corrupt nobles to aid the poor.', 'Suspicious of authority but fiercely protective of innocents. She rarely speaks about her past and prefers to work alone, though she''s beginning to value having allies.', 3),
(3, 'Alaric', 'Spellweaver', 45, 'Neutral Good', 1, 'A slender human with prematurely white hair and intelligent blue eyes. He wears ornate robes covered in arcane symbols.', 'A former apprentice to the royal court wizard, Alaric left the comfort of the castle to research ancient magics. He believes knowledge should be free to all, not hoarded by the elite.', 'Curious and methodical, Alaric documents everything he encounters. He can be absent-minded when focused on magical theory but becomes sharply attentive when his friends are in danger.', 4),
(4, 'Gareth', 'Lightbringer', 28, 'Lawful Good', 1, 'A well-built human with short blond hair and determined brown eyes. His armor is always immaculately polished, bearing his deity''s symbol.', 'The son of a blacksmith who received a divine vision after saving a priest from bandits. He has sworn an oath to protect the innocent and uphold justice wherever he goes.', 'Steadfast and honorable to a fault. Gareth sees the world in terms of right and wrong and struggles with moral ambiguity. He believes everyone deserves a chance at redemption.', 5),
(5, 'Melody', 'Windwhisper', 26, 'Neutral', 1,'A graceful elf with flowing golden hair often adorned with flowers. Her eyes shift color with her mood, and her smile is captivating.', 'Born to a renowned elven music master, Melody showed magical aptitude through her songs from childhood. She travels to collect stories and songs from different cultures.', 'Cheerful and charismatic, Melody finds beauty in everything. She uses her music to lift spirits and bring people together, believing harmony in music can create harmony in life.', 2),
(6, 'Thokk', 'Mountaincrusher', 30, 'Chaotic Neutral', 5, 'A battle-hardened dwarf with a braided red beard now adorned with trophies from his victories. His body is covered in ritual tattoos commemorating his greatest kills.', 'After years of wandering, Thokk has made a name for himself as a fearsome warrior. He has defeated numerous foes and even briefly served as a champion in a gladiatorial arena before his wanderlust took him back to the open road.', 'Still boisterous but now with a strategic mind that his enemies often underestimate. His loyalty to his companions has deepened into an unshakeable bond.', 4),
(7, 'Lilith', 'Shadowstep', 37, 'Chaotic Good', 5, 'Her once-black hair now has a streak of silver from a close encounter with death magic. She moves like a shadow and wears a cloak made from a displacer beast she defeated.', 'Lilith uncovered a conspiracy among the merchant guild and has made powerful enemies. She now balances her Robin Hood activities with staying one step ahead of assassins sent to silence her.', 'More willing to trust allies but still keeps secrets close. She has developed a taste for the finer things in life, though she still gives most of her wealth away.', 5),
(8, 'Alaric', 'Spellweaver', 50, 'Neutral Good', 5, 'His white hair now reaches his waist, and his eyes occasionally glow with arcane energy. Mystical tattoos on his hands help channel his increasingly powerful spells.', 'Alaric discovered ancient texts hinting at a lost civilization of magic users. He studies relics and ruins, believing this forgotten knowledge could help prevent a prophesied magical catastrophe.', 'Still curious but more confident in his abilities. He has become more pragmatic, understanding that sometimes knowledge must be protected rather than freely shared when it could be dangerous.', 3),
(9, 'Gareth', 'Lightbringer', 33, 'Lawful Good', 5, 'Now bears a scar across his face from a demon''s claw, which glows faintly when he uses his divine powers. His armor is enhanced with holy runes.', 'After witnessing corruption within his own religious order, Gareth underwent a crisis of faith before establishing his own small temple dedicated to true justice and compassion rather than rigid dogma.', 'Still devoted to good but now understands the complexities of morality. He judges less and listens more, though he remains unwavering against true evil.', 4),
(10, 'Bramble', 'Oakenheart', 150, 'True Neutral', 5,'A wood elf with bark-like skin and hair that changes with the seasons. Small flowers sometimes bloom in her hair when she''s happy.', 'Once the guardian of a sacred grove that was corrupted by dark magic, Bramble travels to cleanse natural sites and restore balance. She carries a seedling from her fallen grove, seeking a new home for it.', 'Deeply connected to nature and sometimes struggles to understand "civilized" customs. She is slow to anger but fierce when protecting the natural world.', 5);


-- Money
INSERT INTO money (money_id, platinum, gold, silver, copper, character_id) VALUES
(1, 0, 10, 5, 20, 1), -- Starting money for level 1 characters
(2, 0, 15, 10, 50, 2),
(3, 0, 25, 15, 10, 3),
(4, 0, 20, 8, 30, 4),
(5, 0, 2, 20, 12, 5),
(6, 1, 50, 25, 40, 6), -- More money for level 5 characters
(7, 2, 75, 30, 15, 7),
(8, 3, 120, 40, 25, 8),
(9, 2, 85, 15, 30, 9),
(10, 1, 65, 35, 50, 10);

-- Species Features
INSERT INTO species_feature (species_feature_id, name, description) VALUES
(1, 'Darkvision', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.'),
(2, 'Fey Ancestry', 'You have advantage on saving throws against being charmed, and magic can''t put you to sleep.'),
(3, 'Dwarven Resilience', 'You have advantage on saving throws against poison, and you have resistance against poison damage.'),
(4, 'Draconic Ancestry', 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type.'),
(5, 'Lucky', 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.');

-- Species
INSERT INTO species (species_id, name, creature_type, size, speed) VALUES
(1, 'Human', 'Humanoid', 'Medium', '30'),
(2, 'Elf', 'Humanoid', 'Medium', '30'),
(3, 'Dwarf', 'Humanoid', 'Medium', '25'),
(4, 'Dragonborn', 'Humanoid', 'Medium', '30'),
(5, 'Halfling', 'Humanoid', 'Small', '25');


-- Items
INSERT INTO item (item_id, name, description, value, type, quantity, rarity, magic) VALUES
(1, 'Longsword', 'A versatile sword that can be used with one or two hands.', 15, 'weapon', 1, 'common', 0),
(2, 'Healing Potion', 'A red liquid that restores 2d4+2 hit points when consumed.', 50, 'consumable', 1, 'common', 1),
(3, 'Chain Mail', 'Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath to prevent chafing and to cushion the impact of blows.', 75, 'armor', 1, 'common', 0),
(4, 'Thieves'' Tools', 'This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.', 25, 'tool', 1, 'common', 0),
(5, 'Wand of Magic Missiles', 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the magic missile spell from it.', 500, 'wondrous', 1, 'uncommon', 1),
(6, 'Longbow', 'A weapon consisting of a stave made of wood, strung with a cord and used to shoot arrows.', 50, 'weapon', 1, 'common', 0),
(7, 'Shield', 'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2.', 10, 'armor', 1, 'common', 0),
(8, 'Potion of Greater Healing', 'You regain 4d4+4 hit points when you drink this potion.', 100, 'consumable', 1, 'uncommon', 1),
(9, 'Studded Leather', 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.', 45, 'armor', 1, 'common', 0),
(10, 'Dagger', 'A small knife with a pointed blade used for stabbing or cutting.', 2, 'weapon', 1, 'common', 0),
(11, 'Spellbook', 'Essential for wizards, this book contains spells and is where they record new spells found.', 50, 'wondrous', 1, 'common', 0),
(12, 'Herbalism Kit', 'This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists.', 5, 'tool', 1, 'common', 0),
(13, 'Lute', 'A stringed musical instrument with a long neck, fretted fingerboard, and a rounded body.', 35, 'instrument', 1, 'common', 0),
(14, 'Boots of Elvenkind', 'While you wear these boots, your steps make no sound.', 250, 'wondrous', 1, 'uncommon', 1),
(15, 'Staff of the Python', 'You can use an action to speak this staffs command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake.', 1000, 'staff', 1, 'uncommon', 1),
(16, 'Javelin', 'A light spear designed primarily to be thrown.', 5, 'weapon', 1, 'common', 0),
(17, 'Explorer''s Pack', 'Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin.', 10, 'tool', 1, 'common', 0),
(18, 'Ring of Protection', 'You gain a +1 bonus to AC and saving throws while wearing this ring.', 1500, 'wondrous', 1, 'rare', 1),
(19, 'Alchemist''s Supplies', 'These special tools include the items needed to pursue a craft or trade.', 50, 'tool', 1, 'common', 0),
(20, 'Greataxe', 'A large, heavy axe that requires two hands to wield properly.', 30, 'weapon', 1, 'common', 0);


-- Character class
INSERT INTO `character_has_class`
(`character_id`, `class_id`)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 6);

INSERT INTO `character_has_species`
(`character_id`, `species_id`)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5);

-- Character Skills
INSERT INTO `character_has_skill` (`character_id`, `skill_id`, `proficiency`) VALUES
-- Thokk Level 1
(1, 4, 1), -- Athletics
(1, 8, 1), -- Intimidation
-- Lilith Level 1
(8, 1, 1), -- Acrobatics
(8, 16, 1), -- Sleight of Hand
(8, 17, 1); -- Stealth


INSERT INTO `species_has_species_feature` (`species_id`, `species_feature_id`)
VALUE
(1, 5),
(2, 2),
(2, 1),
(3, 3),
(3, 1),
(4, 4),
(5, 5);

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

INSERT INTO `class_has_class_feature` (`class_id`, `class_feature_id`)
VALUE
(1, 1),
(1, 7),
(2, 2),
(2, 8),
(3, 3),
(4, 4),
(4, 3),
(4, 7),
(5, 5),
(5, 3),
(6, 6),
(6, 3);

INSERT INTO character_has_stats (character_id, stat_name, value) 
VALUES 
(1, 'strength', 10),
(8, 'strength', 11),
(8, 'dexterity', 20),
(8, 'constitution', 12),
(8, 'intelligence', 11),
(8, 'charisma', 11),
(8, 'wisdom', 18);

