# jjmpsp.github.io

## Introduction
This is the source code for my personal static website located at: [https://joel-murphy.co.uk/](https://joel-murphy.co.uk/)

---
## Build instructions:

Windows
Install ruby and Ruby SDK for Windows
https://rubyinstaller.org/downloads/

Run the following command in an elevated command prompt window:

gem install jekyll-sitemap

Now that we have jekyll ready, we are ready to serve our static website:

jekyll serve

---

## Project Management

This project is managed using an open Trello board. If there's anything you think I could do to improve the website, please leave some feedback and I will update the kanban board to reflect on the changes and improvements I need to make.

https://trello.com/b/6MTwpOKh/joel-murphy-website-project-management-board

---

## Website Maintenance
### Adding new markers to the map on travel.md page

As I visit more places, I will need to manuaully update the list of places I have been to. The following is a list of countries and their corresponding country codes. Simply add one of the codes to the countriesVisited array for it to display in the map.


````
WORLD
------------------------------
AE = United Arab Emirates
AF = Afghanistan
AG = Antigua and Barbuda
AL = Albania
AM = Armenia
AO = Angola
AR = Argentina
AT = Austria
AU = Australia
AZ = Azerbaijan
BA = Bosnia and Herzegovina
BB = Barbados
BD = Bangladesh
BE = Belgium
BF = Burkina Faso
BG = Bulgaria
BI = Burundi
BJ = Benin
BN = Brunei Darussalam
BO = Bolivia
BR = Brazil
BS = Bahamas
BT = Bhutan
BW = Botswana
BY = Belarus
BZ = Belize
CA = Canada
CD = Congo
CF = Central African Republic
CG = Congo
CH = Switzerland
CI = Cote d'Ivoire
CL = Chile
CM = Cameroon
CN = China
CO = Colombia
CR = Costa Rica
CU = Cuba
CV = Cape Verde
CY = Cyprus
CZ = Czech Republic
DE = Germany
DJ = Djibouti
DK = Denmark
DM = Dominica
DO = Dominican Republic
DZ = Algeria
EC = Ecuador
EE = Estonia
EG = Egypt
ER = Eritrea
ES = Spain
ET = Ethiopia
FI = Finland
FJ = Fiji
FK = Falkland Islands
FR = France
GA = Gabon
GB = United Kingdom
GD = Grenada
GE = Georgia
GF = French Guiana
GH = Ghana
GL = Greenland
GM = Gambia
GN = Guinea
GQ = Equatorial Guinea
GR = Greece
GT = Guatemala
GW = Guinea-Bissau
GY = Guyana
HN = Honduras
HR = Croatia
HT = Haiti
HU = Hungary
ID = Indonesia
IE = Ireland
IL = Israel
IN = India
IQ = Iraq
IR = Iran
IS = Iceland
IT = Italy
JM = Jamaica
JO = Jordan
JP = Japan
KE = Kenya
KG = Kyrgyz Republic
KH = Cambodia
KM = Comoros
KN = Saint Kitts and Nevis
KP = North Korea
KR = South Korea
KW = Kuwait
KZ = Kazakhstan
LA = Lao People's Democratic Republic
LB = Lebanon
LC = Saint Lucia
LK = Sri Lanka
LR = Liberia
LS = Lesotho
LT = Lithuania
LV = Latvia
LY = Libya
MA = Morocco
MD = Moldova
MG = Madagascar
MK = Macedonia
ML = Mali
MM = Myanmar
MN = Mongolia
MR = Mauritania
MT = Malta
MU = Mauritius
MV = Maldives
MW = Malawi
MX = Mexico
MY = Malaysia
MZ = Mozambique
NA = Namibia
NC = New Caledonia
NE = Niger
NG = Nigeria
NI = Nicaragua
NL = Netherlands
NO = Norway
NP = Nepal
NZ = New Zealand
OM = Oman
PA = Panama
PE = Peru
PF = French Polynesia
PG = Papua New Guinea
PH = Philippines
PK = Pakistan
PL = Poland
PT = Portugal
PY = Paraguay
QA = Qatar
RE = Reunion
RO = Romania
RS = Serbia
RU = Russian Federationß
RW = Rwanda
SA = Saudi Arabia
SB = Solomon Islands
SC = Seychelles
SD = Sudan
SE = Sweden
SI = Slovenia
SK = Slovakia
SL = Sierra Leone
SN = Senegal
SO = Somalia
SR = Suriname
ST = Sao Tome and Principe
SV = El Salvador
SY = Syrian Arab Republic
SZ = Swaziland
TD = Chad
TG = Togo
TH = Thailand
TJ = Tajikistan
TL = Timor-Leste
TM = Turkmenistan
TN = Tunisia
TR = Turkey
TT = Trinidad and Tobago
TW = Taiwan
TZ = Tanzania
UA = Ukraine
UG = Uganda
US = United States of America
UY = Uruguay
UZ = Uzbekistan
VE = Venezuela
VN = Vietnam
VU = Vanuatu
YE = Yemen
ZA = South Africa
ZM = Zambia
ZW = Zimbabwe

USA
------------------------------
AK = Alaska
AL = Alabama
AR = Arkansas
AZ = Arizona
CA = California
CO = Colorado
CT = Connecticut
DC = District of Columbia
DE = Delaware
FL = Florida
GA = Georgia
HI = Hawaii
IA = Iowa
ID = Idaho
IL = Illinois
IN = Indiana
KS = Kansas
KY = Kentucky
LA = Louisiana
MA = Massachusetts
MD = Maryland
ME = Maine
MI = Michigan
MN = Minnesota
MO = Missouri
MS = Mississippi
MT = Montana
NC = North Carolina
ND = North Dakota
NE = Nebraska
NH = New Hampshire
NJ = New Jersey
NM = New Mexico
NV = Nevada
NY = New York
OH = Ohio
OK = Oklahoma
OR = Oregon
PA = Pennsylvania
RI = Rhode Island
SC = South Carolina
SD = South Dakota
TN = Tennessee
TX = Texas
UT = Utah
VA = Virginia
VT = Vermont
WA = Washington
WI = Wisconsin
WV = West Virginia
WY = Wyoming

EUROPE
------------------------------
AD = Andorra
AL = Albania
AM = Armenia
AT = Austria
AZ = Azerbaijan
BA = Bosnia and Herzegovina
BE = Belgium
BG = Bulgaria
BY = Belarus
CH = Switzerland
CY = Cyprus
CZ = Czech Republic
DE = Germany
DK = Denmark
DZ = Algeria
EE = Estonia
ES = Spain
FI = Finland
FR = France
GB = United Kingdom
GE = Georgia
GL = Greenland
GR = Greece
HR = Croatia
HU = Hungary
IE = Ireland
IL = Israel
IQ = Iraq
IR = Iran
IS = Iceland
IT = Italy
JO = Jordan
KZ = Kazakhstan
LB = Lebanon
LI = Liechtenstein
LT = Lithuania
LU = Luxembourg
LV = Latvia
MA = Morocco
MC = Monaco
MD = Moldova
ME = Montenegro
MK = Macedonia
MT = Malta
NL = Netherlands
NO = Norway
PL = Poland
PT = Portugal
RO = Romania
RU = Russian Federation
SA = Saudi Arabia
SE = Sweden
SI = Slovenia
SK = Slovakia
SM = San Marino
SR = Suriname
SY = Syrian Arab Republic
TM = Turkmenistan
TN = Tunisia
TR = Turkey
UA = Ukraine

GERMANY
------------------------------
BB = Brandenburg
BE = Berlin
BW = Baden-WÃrttemberg
BY = Bayern
HB = Bremen
HE = Hessen
HH = Hamburg
MV = Mecklenburg-Vorpommern
NI = Niedersachsen
NW = Nordrhein-Westfalen
RP = Rheinland-Pfalz
SH = Schleswig-Holstein
SL = Saarland
SN = Sachsen
ST = Sachsen-Anhalt
TH = ThÃri

RUSSIA
------------------------------
CH = Chukotka Autonomous Okrug
KA = Kamchatka Krai
MA = Magadan Oblast
SA = Sakha Republic
AM = Amur Oblast
PR = Primorsky Krai
EU = Jewish Autonomous Oblast
HA = Khabarovsk Krai
SH = Sakhalin Oblast
OM = Omsk Oblast
NV = Novosibirsk Oblast
AL = Altai Krai
LT = Altai Republic
TV = Tuva Republic
HK = Republic of Khakassia
KM = Kemerovo Oblast
TM = Tomsk Oblast
ZB = Zabaykalsky Krai
BR = Buryat Republic
IR = Irkutsk Oblast
KR = Krasnoyarsk Krai
YA = Yamalo-Nenets Autonomous Okrug
HT = Khanty–Mansi Autonomous Okrug
TU = Tyumen Oblast
KU = Kurgan Oblast
CL = Chelyabinsk Oblast
SV = Sverdlovsk Oblast
AR = Arkhangelsk Oblast
NE = Nenets Autonomous Okrug
KO = Komi Republic
MU = Murmansk Oblast
VO = Vologda Oblast
NO = Novgorod Oblast
PS = Pskov Oblast
LE = Leningrad Oblast
KL = Republic of Karelia
KN = Kaliningrad Oblast
DA = Republic of Dagestan
ST = Stavropol Krai
SO = Republic of North Ossetia–Alania
KB = Kabardino-Balkar Republic
KH = Karachay–Cherkess Republic
CC = Chechen Republic
IN = Republic of Ingushetia
AD = Republic of Adygea
KS = Krasnodar Krai
RO = Rostov Oblast
KK = Republic of Kalmykia
AS = Astrakhan Oblast
VL = Volgograd Oblast
TR = Tver Oblast
SM = Smolensk Oblast
BN = Bryansk Oblast
KY = Kursk Oblast
BL = Belgorod Oblast
OR = Oryol Oblast
KJ = Kaluga Oblast
TL = Tula Oblast
LP = Lipetsk Oblast
MC = Moscow Oblast
RZ = Ryazan Oblast
TB = Tambov Oblast
VM = Vladimir Oblast
IV = Ivanovo Oblast
YR = Yaroslavl Oblast
KT = Kostroma Oblast
NN = Nizhny Novgorod Oblast
MR = Republic of Mordovia
PZ = Penza Oblast
SR = Saratov Oblast
SS = Samara Oblast
OB = Orenburg Oblast
BS = Republic of Bashkortostan
UL = Ulyanovsk Oblast
CU = Chuvash Republic
TA = Republic of Tatarstan
ML = Mari El Republic
UD = Udmurt Republic
KI = Kirov Oblast
PE = Perm Krai
VN = Voronezh Oblast
````

### Disabling html compression
See http://jch.penibelst.de/

default.html

```
---
layout: compress
---
```

### Code syntax highlighting
This is done by an external plugin. See https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers for full docs.

````
{% highlight javascript %}
    ...JS here...
{% endhighlight %}
````

### Specifying elements to be lazy loaded
http://jquery.eisbehr.de/lazy/

### Modifying bootstrap styles
````"bootstrap": "^4.3.1"```` has been included as a dev dependency within package.json.
To modify bootstrap styles, open this 

Bootstrap's package.json includes the following commands and tasks:

| Task         | Description                                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------------------|
| npm run dist | npm run dist creates the /dist/ directory with compiled files. Uses Sass, Autoprefixer, and UglifyJS.            |
| npm test     | Same as npm run dist plus it runs tests locally                                                                  |
| npm run docs | Builds and lints CSS and JavaScript for docs. You can then run the documentation locally via npm run docs-serve. |

Run npm run to see all the npm scripts.

## Changelog
TODO