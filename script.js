const FORMS = [
  "Pike","Dagger","Maul","Rifle","Harpoon Gun",
  "Axe","Crossbow","Shock Rod","Flask","Blade"
];

const PREFIXES = [
  "Iron","Grim","Static","Blood","Flash",
  "Scrap","Black","Siege","Ember","Needle"
];

const TEMPLATES = [

{
  name: "Setup → Power",
  tag: "heavy",
  advantage: ["massive damage","extended reach","pierces multiple enemies"],
  cost: ["must brace before attacking","movement speed reduced while readied"],
  failure: [
    "short recovery on miss",
    "staggered if interrupted",
    "long exposed window after swing"
  ],
  situational: ["strong in chokepoints","extra damage vs armored targets"]
},

{
  name: "Mobility → Fragility",
  tag: "reckless",
  advantage: ["dash through enemies when striking","very fast attack speed"],
  cost: ["reduced defense while equipped","cannot block"],
  failure: [
    "take bonus damage when hit",
    "collision cancels attack and stuns",
    "recoil pushes you off position"
  ],
  situational: ["bonus damage from behind","strong for hit-and-run"]
},

{
  name: "Resource → Burst",
  tag: "reckless",
  advantage: ["fires a burst of shots","large area explosion"],
  cost: ["limited ammo","generates heat each use"],
  failure: [
    "reload locks weapon briefly",
    "overheat disables weapon",
    "misfire damages wielder"
  ],
  situational: ["extra damage to grouped enemies","strong at fight openings"]
},

{
  name: "Commitment → Reliability",
  tag: "reliable",
  advantage: ["guaranteed critical hit while aiming","cannot miss once locked"],
  cost: ["must stand still to attack","cannot retarget mid-attack"],
  failure: [
    "movement cancels shot",
    "long cooldown after firing",
    "leaves wielder exposed"
  ],
  situational: ["bonus damage at long range","strong against priority targets"]
}

];

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sample(arr, n) {
  const copy = [...arr];
  const out = [];
  n = Math.min(n, copy.length);

  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

function chooseTemplate(styleBias) {
  if (styleBias === 0) return choice(TEMPLATES);

  const weighted = [];

  for (const t of TEMPLATES) {
    let weight = 1;

    if (styleBias === 1)
      weight = (t.tag === "reliable") ? 3 : 1;
    else if (styleBias === 2)
      weight = (t.tag === "reckless") ? 3 : 1;

    for (let i = 0; i < weight; i++)
      weighted.push(t);
  }

  return choice(weighted);
}

function riskFailure(failures, riskLevel) {
  const idx = Math.min(riskLevel, failures.length - 1);
  return failures[idx];
}

function generateWeapon(risk, style, complexity) {

  const template = chooseTemplate(style);

  let adv, cost, situational;

  if (complexity === 0) {
    adv = sample(template.advantage, 1);
    cost = sample(template.cost, 1);
    situational = [];

  } else if (complexity === 2) {
    adv = sample(template.advantage, 2);
    cost = sample(template.cost, 2);
    situational = sample(template.situational, 1);

  } else {
    adv = sample(template.advantage, 1);
    cost = sample(template.cost, 1);
    situational = sample(template.situational, 1);
  }

  return {
    name: `${choice(PREFIXES)} ${choice(FORMS)}`,
    template: template.name,
    advantage: adv,
    cost: cost,
    situational: situational,
    failure: riskFailure(template.failure, risk)
  };
}

function renderWeapon(w) {
  return `
    <div class="weapon">
      <b>${w.name}</b><br>
      Template: ${w.template}<br>
      ${w.advantage.map(a => "Advantage: " + a).join("<br>")}<br>
      ${w.cost.map(c => "Cost: " + c).join("<br>")}<br>
      ${w.situational.map(s => "Situational: " + s).join("<br>")}<br>
      Failure: ${w.failure}
    </div>
  `;
}

function generateBatch() {
  const risk = +document.getElementById("risk").value;
  const style = +document.getElementById("style").value;
  const complexity = +document.getElementById("complexity").value;
  const batch = +document.getElementById("batch").value;

  let html = "";

  for (let i = 0; i < batch; i++) {
    html += renderWeapon(generateWeapon(risk, style, complexity));
  }

  document.getElementById("output").innerHTML = html;
}
