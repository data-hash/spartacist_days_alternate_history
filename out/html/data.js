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

const tooltipList = [
  {
    searchString: "KPD",
    explanationText:
      "<img src=img/logos/kpd_logo.svg> KPD</br> Communist Party of Germany </br></br> Kommunistische Partei Deutschlands",
  },

  {
    searchString: "USPD",
    explanationText:
      "<img src=img/logos/uspd_logo.svg> USPD</br> Independent Social Democratic Party of Germany Deutschlands </br></br> Unabhängige Sozialdemokratische Partei Deutschlands",
  },

  {
    searchString: "SAPD",
    explanationText:
      "<img src=img/logos/SAPD_logo.png> SAPD</br> Socialist Workers' Party of Germany </br></br> Sozialistische Arbeiterpartei Deutschlands",
  },

  {
    searchString: "SPD",
    explanationText:
      "<img src=img/logos/SPD_logo_2.png> SPD</br> Social Democratic Party of Germany </br></br> Sozialdemokratische Partei Deutschlands",
  },

  {
    searchString: "MSPD",
    explanationText:
      "<img src=img/logos/SPD_logo_2.png> MSPD</br> Majority Social Democratic Party of Germany </br></br> Mehrheitssozialdemokratische Partei Deutschlands",
  },

  {
    searchString: "DHP",
    explanationText:
      " DHP</br> German-Hanoverian Party </br></br> Deutsch-Hannoversche Partei",
  },

  {
    searchString: "ELP",
    explanationText:
      " ELP</br> Alsace-Lorraine Party </br></br> Elsass-Lothringen Partei",
  },

  {
    searchString: "BB",
    explanationText:
      " BB</br> Bavarian Peasants' League </br></br> Bayerischer Bauernbund",
  },

  {
    searchString: "PP",
    explanationText: " PP</br> Polish Party </br></br> Polenpartei",
  },

  {
    searchString: "DP",
    explanationText: " DP</br> Danish Party </br></br> Dänische Partei",
  },

  {
    searchString: "Others",
    explanationText:
      " Independents </br> Agrarian League, Independent Conservatives, etc.",
  },

  {
    searchString: "OTHER",
    explanationText:
      " Independents </br> Agrarian League, Independent Conservatives, etc.",
  },

  {
    searchString: "FVP",
    explanationText:
      "<img src=img/logos/fvp_logo.svg> FVP</br> Progressive People's Party </br></br> Fortschrittliche Volkspartei",
  },

  {
    searchString: "DDP",
    explanationText:
      "<img src=img/logos/weimar_flag.svg> DDP</br> German Democratic Party </br></br> Deutsche Demokratische Partei",
  },

  {
    searchString: "Z",
    explanationText:
      "<img src=img/logos/z_flag.svg> Z</br> German Centre Party </br></br> Deutsche Zentrumspartei",
  },

  {
    searchString: "BVP",
    explanationText:
      "<img src=img/logos/bvp_logo.jpeg> BVP</br> Bavarian People's Party </br></br> Bayerische Volkspartei",
  },

  {
    searchString: "NLP",
    explanationText:
      "<img src=img/logos/nlp_logo.png> NLP</br> National Liberal Party </br></br> Nationalliberale Partei",
  },

  {
    searchString: "DVP",
    explanationText:
      "<img src=img/logos/dvp_logo.svg> DVP</br> German People's Party </br></br> Deutsche Volkspartei",
  },

  {
    searchString: "DRP",
    explanationText:
      "<img src=img/logos/drp_logo.png> DRP (FKP)</br> German Reich Party </br></br> Deutsche Reichspartei",
  },

  {
    searchString: "FKP",
    explanationText:
      "<img src=img/logos/drp_logo.png> FKP (DRP)</br> Free Conservative Party </br></br> Freikonservative Partei",
  },

  {
    searchString: "DKP",
    explanationText:
      "<img src=img/logos/imperial_flag.svg> DKP</br> German Conservative Party </br></br> Deutschkonservative Partei",
  },

  {
    searchString: "DNVP",
    explanationText:
      "<img src=img/logos/dnvp_logo.svg> DNVP</br> German National People's Party </br></br> Deutschnationale Volkspartei",
  },

  {
    searchString: "DvP",
    explanationText:
      "<img src=img/logos/freikorps_flag.png> DvP</br> German Völkisch Party </br></br> Deutschvölkische Partei",
  },

  {
    searchString: "DSP",
    explanationText:
      "<img src=img/logos/freikorps_flag.png> DvP</br> German Völkisch Party </br></br> Deutschvölkische Partei",
  },

  {
    searchString: "NSDAP",
    explanationText:
      " NSDAP</br> National Socialist German Workers' Party </br></br> Nationalsozialistische Deutsche Arbeiterpartei",
  },

  {
    searchString: "RFB",
    explanationText:
      "<img src=img/logos/rfkb_logo.png> Roter Frontkämpferbund </br></br> Red Front Fighters' League",
  },
];
