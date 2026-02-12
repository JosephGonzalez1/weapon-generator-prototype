Procedural Weapon Generator

A small interactive tool that creates fantasy weapons with different strengths, weaknesses, and special quirks. Each generated weapon comes with a name, advantages, costs, situational strengths, and potential failure modes.

How to Access / Run

Web version (recommended):
Use the live link: https://josephgonzalez1.github.io/weapon-generator-prototype/

Or run locally:

Clone or download the repository.

Open index.html in a web browser.

Use the dropdowns and input box to select your parameters: risk, style, complexity, and number of weapons.

Click Generate to see the results.

Parameters (User Controls)

Parameter	Description	Effect on Generated Weapons

Risk - How dangerous the weapon’s failure can be, low risk → minor mistakes; High risk → serious failure when attacks miss or backfire

Style -	What type of weapon “archetype” to favor, balanced → mix of types; Reliable → safe, predictable effects; Reckless → fast, risky, high-damage tools

Complexity - How many traits each weapon has, simple → 1 advantage + 1 cost; Medium → includes situational effects; Dense → multiple advantages and costs, more chaotic

Batch	Number - of weapons to generate at once, generates multiple unique weapons in one click
 
Example Outputs

Risk-safe Style-balanced Complexity-medium

Scrap Flask
Template: Setup → Power
Advantage: massive damage
Cost: must brace before attacking
Situational: strong in chokepoints
Failure: short recovery on miss

Grim Dagger
Template: Mobility → Fragility
Advantage: very fast attack speed
Cost: reduced defense while equipped
Situational: bonus damage from behind
Failure: take bonus damage when hit

Flash Axe
Template: Resource → Burst
Advantage: fires a burst of shots
Cost: generates heat each use
Situational: strong at fight openings
Failure: reload locks weapon briefly

Blood Maul
Template: Commitment → Reliability
Advantage: cannot miss once locked
Cost: cannot retarget mid-attack
Situational: bonus damage at long range
Failure: movement cancels shot

Black Harpoon Gun
Template: Commitment → Reliability
Advantage: guaranteed critical hit while aiming
Cost: must stand still to attack
Situational: strong against priority targets
Failure: movement cancels shot

Risk-reckless Style-reliable Complexity-simple

Flash Crossbow
Template: Commitment → Reliability
Advantage: cannot miss once locked
Cost: cannot retarget mid-attack

Failure: leaves wielder exposed
Static Flask
Template: Commitment → Reliability
Advantage: cannot miss once locked
Cost: cannot retarget mid-attack

Failure: leaves wielder exposed
Black Crossbow
Template: Setup → Power
Advantage: massive damage
Cost: must brace before attacking

Failure: long exposed window after swing
Grim Harpoon Gun
Template: Setup → Power
Advantage: extended reach
Cost: movement speed reduced while readied

Failure: long exposed window after swing
Blood Crossbow
Template: Commitment → Reliability
Advantage: guaranteed critical hit while aiming
Cost: cannot retarget mid-attack

Risk-medium Style-reckless Complexity-dense

Flash Maul
Template: Mobility → Fragility
Advantage: dash through enemies when striking
Advantage: very fast attack speed
Cost: reduced defense while equipped
Cost: cannot block
Situational: strong for hit-and-run
Failure: collision cancels attack and stuns

Black Axe
Template: Mobility → Fragility
Advantage: very fast attack speed
Advantage: dash through enemies when striking
Cost: cannot block
Cost: reduced defense while equipped
Situational: strong for hit-and-run
Failure: collision cancels attack and stuns

Flash Axe
Template: Mobility → Fragility
Advantage: very fast attack speed
Advantage: dash through enemies when striking
Cost: reduced defense while equipped
Cost: cannot block
Situational: bonus damage from behind
Failure: collision cancels attack and stuns

Siege Rifle
Template: Resource → Burst
Advantage: large area explosion
Advantage: fires a burst of shots
Cost: generates heat each use
Cost: limited ammo
Situational: strong at fight openings
Failure: overheat disables weapon

Scrap Dagger
Template: Commitment → Reliability
Advantage: guaranteed critical hit while aiming
Advantage: cannot miss once locked
Cost: must stand still to attack
Cost: cannot retarget mid-attack
Situational: strong against priority targets
Failure: long cooldown after firing

Risk-reckless Style-reckless Complexity-dense

Iron Crossbow
Template: Mobility → Fragility
Advantage: dash through enemies when striking
Advantage: very fast attack speed
Cost: cannot block
Cost: reduced defense while equipped
Situational: strong for hit-and-run
Failure: recoil pushes you off position

Static Rifle
Template: Setup → Power
Advantage: extended reach
Advantage: pierces multiple enemies
Cost: movement speed reduced while readied
Cost: must brace before attacking
Situational: extra damage vs armored targets
Failure: long exposed window after swing

Static Axe
Template: Mobility → Fragility
Advantage: dash through enemies when striking
Advantage: very fast attack speed
Cost: cannot block
Cost: reduced defense while equipped
Situational: bonus damage from behind
Failure: recoil pushes you off position

Grim Dagger
Template: Resource → Burst
Advantage: large area explosion
Advantage: fires a burst of shots
Cost: generates heat each use
Cost: limited ammo
Situational: strong at fight openings
Failure: misfire damages wielder

Black Harpoon Gun
Template: Mobility → Fragility
Advantage: very fast attack speed
Advantage: dash through enemies when striking
Cost: cannot block
Cost: reduced defense while equipped
Situational: strong for hit-and-run
Failure: recoil pushes you off position

Known Limitations

Currently only supports a small set of pre-defined weapon forms, prefixes, and templates.

Names, advantages, and costs are randomly selected; no logical checks beyond the template rules.

Only works in modern web browsers; mobile experience is untested.
