const colourList = [
{
	word: "KPD",
	style: "color: var(--kpd_color); font-weight: bold;"
},

{
	word: "USPD",
	style: "color: var(--uspd_color); font-weight: bold"
},

{
	word: "SAPD",
	style: "color: var(--sapd_color); font-weight: bold"
},

{
	word: "SPD",
	style: "color: var(--spd_color); font-weight: bold"
},

{
	word: "MSPD",
	style: "color: var(--spd_color); font-weight: bold"
},

{
	word: "Others",
    style: "color: #909090; font-weight: bold"
},

{
	word: "PP",
	style: "color: #D49797; font-weight: bold"
},

{
	word: "DHP",
	style: "color: #333FFF; font-weight: bold"
},

{
	word: "ELP",
	style: "color: #000; font-weight: bold"
},

{
	word: "BB",
	style: "color: #008B45; font-weight: bold"
},

{
	word: "DP",
	style: "color: #CE1126; font-weight: bold"
},

{
	word: "FVP",
	style: "color: var(--ddp_color); font-weight: bold"
},

{
	word: "DDP",
	style: "color: var(--ddp_color); font-weight: bold"
},

{
	word: "Z",
	style: "color: var(--z_color); font-weight: bold"
},

{
	word: "BVP",
	style: "color: var(--bvp_color); font-weight: bold"
},

{
	word: "NLP",
	style: "color: var(--dvp_color); font-weight: bold"
},

{
	word: "DVP",
	style: "color: var(--dvp_color); font-weight: bold"
},

{
	word: "DRP",
	style: "color: #00C0ff; font-weight: bold"
},

{
	word: "FKP",
	style: "color: #00C0ff; font-weight: bold"
},

{
	word: "DKP",
	style: "color: var(--dnvp_color); font-weight: bold"
},

{
	word: "DvP",
	style: "color: #8B5A2B; font-weight: bold"
},

{
	word: "DSP",
	style: "color: #8B5A2B; font-weight: bold"
},

{
	word: "NSDAP",
	style: "color: var(--nsdap_color); font-weight: bold"
},

{
	word: "Spartacus Group",
	style: "color: var(--kpd_color); font-weight: bold"
},

{
	word: "Spartacus League",
	style: "color: var(--kpd_color); font-weight: bold"
},

{
	word: "Imperial",
	style: "color: #000; font-weight: bold"
},

{
	word: "RFB",
	style: "color: var(--kpd_color); font-weight: bold"
},

];

const tooltipList = [
{
	searchString: "KPD",
    explanationText: "<img src=img/logos/kpd_logo.svg> <span class=title>KPD</span> Communist Party of Germany </br></br> Kommunistische Partei Deutschlands"
},

{
	searchString: "USPD",
    explanationText: "<img src=img/logos/uspd_logo.svg> <span class=title>USPD</span> <hr> Independent Social Democratic Party of Germany Deutschlands </br></br> Unabhängige Sozialdemokratische Partei Deutschlands"
},

{
	searchString: "SAPD",
    explanationText: "<img src=img/logos/SAPD_logo.png> <span class=title>SAPD</span> Socialist Workers' Party of Germany </br></br> Sozialistische Arbeiterpartei Deutschlands"
},

{
	searchString: "SPD",
    explanationText: "<img src=img/logos/SPD_logo_2.png> <span class=title>SPD</span> Social Democratic Party of Germany </br></br> Sozialdemokratische Partei Deutschlands"
},

{
	searchString: "MSPD",
    explanationText: "<img src=img/logos/SPD_logo_2.png> <span class=title>MSPD</span> Majority Social Democratic Party of Germany </br></br> Mehrheitssozialdemokratische Partei Deutschlands"
},

{
	searchString: "DHP",
    explanationText: " <span class=title>DHP</span> German-Hanoverian Party </br></br> Deutsch-Hannoversche Partei"
},

{
	searchString: "ELP",
    explanationText: " <span class=title>ELP</span> Alsace-Lorraine Party </br></br> Elsass-Lothringen Partei"
},

{
	searchString: "BB",
    explanationText: " <span class=title>BB</span> Bavarian Peasants' League </br></br> Bayerischer Bauernbund"
},

{
	searchString: "PP",
    explanationText: " <span class=title>PP</span> Polish Party </br></br> Polenpartei"
},

{
	searchString: "DP",
    explanationText: " <span class=title>DP</span> Danish Party </br></br> Dänische Partei"
},

{
	searchString: "Others",
    explanationText: " Independents </br></br> Agrarian League, Independent Conservatives, etc."
},

{
	searchString: "OTHER",
    explanationText: " Independents </br></br> Agrarian League, Independent Conservatives, etc."
},

{
	searchString: "FVP",
    explanationText: "<img src=img/logos/fvp_logo.png> <span class=title>FVP</span> Progressive People's Party </br></br> Fortschrittliche Volkspartei"
},

{
	searchString: "DDP",
    explanationText: "<img src=img/logos/weimar_flag.svg> <span class=title>DDP</span> German Democratic Party </br></br> Deutsche Demokratische Partei"
},

{
	searchString: "Z",
    explanationText: "<img src=img/logos/z_flag.svg> <span class=title>Z</span> German Centre Party </br></br> Deutsche Zentrumspartei"
},

{
	searchString: "BVP",
    explanationText: "<img src=img/logos/bvp_logo.jpeg> <span class=title>BVP</span> Bavarian People's Party </br></br> Bayerische Volkspartei"
},

{
	searchString: "NLP",
    explanationText: "<img src=img/logos/nlp_logo.png> <span class=title>NLP</span> National Liberal Party </br></br> Nationalliberale Partei"
},

{
	searchString: "DVP",
    explanationText: "<img src=img/logos/dvp_logo.svg> <span class=title>DVP</span> German People's Party </br></br> Deutsche Volkspartei"
},

{
	searchString: "DRP",
    explanationText: "<img src=img/logos/drp_logo.png> <span class=title>DRP (FKP)</span> German Reich Party </br></br> Deutsche Reichspartei"
},

{
	searchString: "FKP",
    explanationText: "<img src=img/logos/drp_logo.png> <span class=title>FKP (DRP)</span> Free Conservative Party </br></br> Freikonservative Partei"
},

{
	searchString: "DKP",
    explanationText: "<img src=img/logos/imperial_flag.svg> <span class=title>DKP</span> German Conservative Party </br></br> Deutschkonservative Partei"
},

{
	searchString: "DNVP",
    explanationText: "<img src=img/logos/dnvp_logo.svg> <span class=title>DNVP</span> German National People's Party </br></br> Deutschnationale Volkspartei"
},

{
	searchString: "DvP",
    explanationText: "<img src=img/logos/freikorps_flag.png> <span class=title>DvP</span> German Völkisch Party </br></br> Deutschvölkische Partei"
},

{
	searchString: "DSP",
    explanationText: "<img src=img/logos/freikorps_flag.png> <span class=title>DvP</span> German Völkisch Party </br></br> Deutschvölkische Partei"
},

{
	searchString: "NSDAP",
    explanationText: " <span class=title>NSDAP</span> National Socialist German Workers' Party </br></br> Nationalsozialistische Deutsche Arbeiterpartei"
},

{
	searchString: "RFB",
    explanationText: "<img src=img/logos/rfkb_logo.png> Roter Frontkämpferbund </br></br> Red Front Fighters' League"
},

]