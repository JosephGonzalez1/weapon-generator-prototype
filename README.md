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
Risk	How dangerous the weapon’s failure can be	Low risk → minor mistakes; High risk → serious failure when attacks miss or backfire
Style	What type of weapon “archetype” to favor	Balanced → mix of types; Reliable → safe, predictable effects; Reckless → fast, risky, high-damage tools
Complexity	How many traits each weapon has	Simple → 1 advantage + 1 cost; Medium → includes situational effects; Dense → multiple advantages and costs, more chaotic
Batch	Number of weapons to generate at once	Generates multiple unique weapons in one click

Example Outputs

Simple Weapon:

=== Iron Pike ===
Template: Setup → Power
Advantage: massive damage
Cost: must brace before attacking
Failure: short recovery on miss


Dense Weapon (High Risk, Reckless Style):

=== Blood Harpoon Gun ===
Template: Mobility → Fragility
Advantage: dash through enemies when striking, very fast attack speed
Cost: reduced defense while equipped, cannot block
Situational: bonus damage from behind
Failure: recoil pushes you off position

Known Limitations

Currently only supports a small set of pre-defined weapon forms, prefixes, and templates.

Names, advantages, and costs are randomly selected; no logical checks beyond the template rules.

Only works in modern web browsers; mobile experience is untested.
