const colourList = [
  {
    word: "KPD",
    style: "color: var(--kpd_color); font-weight: bold;",
  },

  {
    word: "USPD",
    style: "color: var(--uspd_color); font-weight: bold",
  },

  {
    word: "SAPD",
    style: "color: var(--sapd_color); font-weight: bold",
  },

  {
    word: "SPD",
    style: "color: var(--spd_color); font-weight: bold",
  },

  {
    word: "MSPD",
    style: "color: var(--spd_color); font-weight: bold",
  },

  {
    word: "Others",
    style: "color: #909090; font-weight: bold",
  },

  {
    word: "PP",
    style: "color: #D49797; font-weight: bold",
  },

  {
    word: "DHP",
    style: "color: #333FFF; font-weight: bold",
  },

  {
    word: "ELP",
    style: "color: #000; font-weight: bold",
  },

  {
    word: "BB",
    style: "color: #008B45; font-weight: bold",
  },

  {
    word: "DP",
    style: "color: #CE1126; font-weight: bold",
  },

  {
    word: "FVP",
    style: "color: var(--ddp_color); font-weight: bold",
  },

  {
    word: "DDP",
    style: "color: var(--ddp_color); font-weight: bold",
  },

  {
    word: "Z",
    style: "color: var(--z_color); font-weight: bold",
  },

  {
    word: "BVP",
    style: "color: var(--bvp_color); font-weight: bold",
  },

  {
    word: "NLP",
    style: "color: var(--dvp_color); font-weight: bold",
  },

  {
    word: "DVP",
    style: "color: var(--dvp_color); font-weight: bold",
  },

  {
    word: "DRP",
    style: "color: #00C0ff; font-weight: bold",
  },

  {
    word: "FKP",
    style: "color: #00C0ff; font-weight: bold",
  },

  {
    word: "DKP",
    style: "color: var(--dnvp_color); font-weight: bold",
  },

  {
    word: "DvP",
    style: "color: #8B5A2B; font-weight: bold",
  },

  {
    word: "DSP",
    style: "color: #8B5A2B; font-weight: bold",
  },

  {
    word: "NSDAP",
    style: "color: var(--nsdap_color); font-weight: bold",
  },

  {
    word: "Spartacus Group",
    style: "color: var(--kpd_color); font-weight: bold",
  },

  {
    word: "Spartacus League",
    style: "color: var(--kpd_color); font-weight: bold",
  },

  {
    word: "Imperial",
    style: "color: #000; font-weight: bold",
  },

  {
    word: "RFB",
    style: "color: var(--kpd_color); font-weight: bold",
  },
];

/*
const partyData = [
  {
    id: "",
    legend: "",
    name: "",
    seats: "",
  },
]
*/

const tooltipList = [
  {
    searchString: "KPD",
    tooltipColor: "#700000",
    explanationText:
      "<img src=img/logos/kpd_logo.svg> Communist Party of Germany </br></br> Kommunistische Partei Deutschlands",
  },

  {
    searchString: "USPD",
    tooltipColor: "#b90903",
    explanationText:
      "<img src=img/logos/uspd_logo.svg> Independent Social Democratic Party of Germany Deutschlands </br></br> Unabhängige Sozialdemokratische Partei Deutschlands",
  },

  {
    searchString: "SAPD",
    tooltipColor: "#C40000",
    explanationText:
      "<img src=img/logos/SAPD_logo.png> Socialist Workers' Party of Germany </br></br> Sozialistische Arbeiterpartei Deutschlands",
  },

  {
    searchString: "SPD",
    tooltipColor: "#E3000F",
    explanationText:
      "<img src=img/logos/SPD_logo_2.png> Social Democratic Party of Germany </br></br> Sozialdemokratische Partei Deutschlands",
  },

  {
    searchString: "MSPD",
    tooltipColor: "#E3000F",
    explanationText:
      "<img src=img/logos/SPD_logo_2.png> Majority Social Democratic Party of Germany </br></br> Mehrheitssozialdemokratische Partei Deutschlands",
  },

  {
    searchString: "DHP",
    tooltipColor: "#333FFF",
    explanationText:
      " German-Hanoverian Party </br></br> Deutsch-Hannoversche Partei",
  },

  {
    searchString: "ELP",
    tooltipColor: "#000",
    explanationText:
      " Alsace-Lorraine Party </br></br> Elsass-Lothringen Partei",
  },

  {
    searchString: "BB",
    tooltipColor: "#008B45",
    explanationText:
      " Bavarian Peasants' League </br></br> Bayerischer Bauernbund",
  },

  {
    searchString: "PP",
    tooltipColor: "#D49797",
    explanationText: " Polish Party </br></br> Polenpartei",
  },

  {
    searchString: "DP",
    tooltipColor: "#CE1126",
    explanationText: " Danish Party </br></br> Dänische Partei",
  },

  {
    searchString: "Others",
    tooltipColor: "#a0a0a0",
    explanationText:
      " Independents </br></br> Agrarian League, Independent Conservatives, etc.",
  },

  {
    searchString: "OTHER",
    tooltipColor: "#a0a0a0",
    explanationText:
      " Independents </br></br> Agrarian League, Independent Conservatives, etc.",
  },

  {
    searchString: "FVP",
    tooltipColor: "#d4b402",
    explanationText:
      "<img src=img/logos/fvp_logo.svg> Progressive People's Party </br></br> Fortschrittliche Volkspartei",
  },

  {
    searchString: "DDP",
    tooltipColor: "#d4b402",
    explanationText:
      "<img src=img/logos/weimar_flag.svg> German Democratic Party </br></br> Deutsche Demokratische Partei",
  },

  {
    searchString: "Z",
    tooltipColor: "#000000",
    explanationText:
      "<img src=img/logos/z_flag.svg> German Centre Party </br></br> Deutsche Zentrumspartei",
  },

  {
    searchString: "BVP",
    tooltipColor: "#69A2BE",
    explanationText:
      "<img src=img/logos/bvp_logo.jpeg> Bavarian People's Party </br></br> Bayerische Volkspartei",
  },

  {
    searchString: "NLP",
    tooltipColor: "#98C22C",
    explanationText:
      "<img src=img/logos/nlp_logo.png> National Liberal Party </br></br> Nationalliberale Partei",
  },

  {
    searchString: "DVP",
    tooltipColor: "#D5AC27",
    explanationText:
      "<img src=img/logos/dvp_logo.svg> German People's Party </br></br> Deutsche Volkspartei",
  },

  {
    searchString: "DRP",
    tooltipColor: "#00C0ff",
    explanationText:
      "<img src=img/logos/drp_logo.png> DRP (FKP)</br> German Reich Party </br></br> Deutsche Reichspartei",
  },

  {
    searchString: "FKP",
    tooltipColor: "#00C0ff",
    explanationText:
      "<img src=img/logos/drp_logo.png> FKP (DRP)</br> Free Conservative Party </br></br> Freikonservative Partei",
  },

  {
    searchString: "DKP",
    tooltipColor: "#0781E5",
    explanationText:
      "<img src=img/logos/imperial_flag.svg> German Conservative Party </br></br> Deutschkonservative Partei",
  },

  {
    searchString: "DNVP",
    tooltipColor: "#3E88B3",
    explanationText:
      "<img src=img/logos/dnvp_logo.svg> German National People's Party </br></br> Deutschnationale Volkspartei",
  },

  {
    searchString: "DvP",
    tooltipColor: "#8B5A2B",
    explanationText:
      "<img src=img/logos/freikorps_flag.png> German Völkisch Party </br></br> Deutschvölkische Partei",
  },

  {
    searchString: "DSP",
    tooltipColor: "#8B5A2B",
    explanationText:
      "<img src=img/logos/freikorps_flag.png> German Völkisch Party </br></br> Deutschvölkische Partei",
  },

  {
    searchString: "NSDAP",
    tooltipColor: "#964B00",
    explanationText:
      " National Socialist German Workers' Party </br></br> Nationalsozialistische Deutsche Arbeiterpartei",
  },

  {
    searchString: "RFB",
    tooltipColor: "#700000",
    explanationText:
      "<img src=img/logos/rfkb_logo.png> Roter Frontkämpferbund </br></br> Red Front Fighters' League",
  },
];
