import * as React from "react";

const data = {
    countries: [
      {
        name: "Algeria",
        states: [
          {
            name: "Adrar",
            cities: ["Adrar","Timekten", "Bouda", "Ouled Ahmed Timmi","Fenoughil","	In Zghmir","Reggane",
                "Sali","Sebaa","Tsabit","Tamest","Tamantit","Tit","Zaouiet Kpunta","Akabli","Aoulef"]
          },
          {
            name: "Chlef",
            cities: ["Talassa", "El Hadjadj", "Ouled Ben Abdelkader","Ain Merane","Breira","Ouled Abbes",
                    "Oued Fodda","Beni Rached","Herenfa","Tadjena","El Marsa","Chlef","Oum Drou",
                    "Sendjas","Sidi Abderrahmane","Sidi Akkacha","Tenes","Beni Bouattab","El Karimia"
                    ,"Harchoun","Bouzeghaia","Taougrit","Beni Haoua","Abou El Hassane","Oued Goussine",
                    "Ghettia","Moussadek","Ouled Fares","Boukadir","Ouled Sly","Sobha","Benairia","Dahra","El Beidha"]
          },
          {
            name: "Laghouat",
            cities: ["Lagouat", "Ksar El Hirane", "Benacer Benchohra","Sidi Makhlouf","Hassi Delaa","Hassi Rmel",
                    "Ain Madhi","Tadjemout","Kheneg","Gueltat Sidi Saad","Ain Sidi Ali","Beidha","Brida","El Ghicha",
                    "Hadj Mechri","Sebgag","Taouiala","Tadjrouna","Aflou","El Assafia","Oued Morra","Oued M'Zi",
                    "El Houaita","Sidi Bouzid"]
          },
          {
            name: "Oum El Bouaghi",
            cities: ["Oum El Bouaghi","Ain Beida","Ain M'lila","Behir Chergui","El Amiria","Sigus","El Belala",
                    "Ain Babouche","Berriche","Ouled Hamla","Dhalaa","Ain Kercha","Hanchir Toumghani","El Djazia",
                    "Ain Diss","Fkirina","Souk Naamane","Zorg","El Fedjoudj Boughrara Saoudi","Ouled Zouai","Bir Chouhada",
                    "Ksar Sbahi","Oued Nini","Meskiana","Ain Fakroun","Rahia","Ain Zitoun","Ouled Gacem"]
          },
          {
            name: "Batna",
            cities: ["Batna","Ghassira","Maafa","Merouana","Seriana","Menaa","El Madher","Tazoult","N'Gaous","Guidgba",
                    "Inoughissen","Ouyoun El Assafir","Djerma","Bitam","Abdelkader Azil","Arris","Kimmel","Tilatou",
                    "Ain Djasser","Ouled Sellam","Tigherghar","Ain Yagout","Sefiane","Fesdis","Rahbat","Tighanimine",
                    "Lemsane","Ksar Bellezma","Segana","Ichmoul","Foum Toub","Ben Foudhala El Hakania","Oued El Ma",
                    "Talkhamt","Bouzina","Chemora","Oued Chaaba","Taxlent","Gosbat","Ouled Aouf","Boumagueur","Barika",
                    "Djezar","T'Kout","Ain Touta","Hidoussa","Taniet El Abed","Oued Taga","Ouled Fadel","Timgad",
                    "Ras El Aioun","Chir","Ouled Si Slimane","Zanat El Beida","M'doukel","Ouled Ammar","El Hassi",
                    "Lazrou","Boulhilat","Larbaâ"]
          },
          {
            name: "Béjaia",
            cities: ["Béjaia","Amizour","Ferraoun","Taourit Ighil","Chellata","Tamokra","Timezrit","Souk El Ténine",
                    "M'cisna","Tinabdher","Tichy","Semaoun","Kendira","Tifra","Ighram","Amalou","Ighil Ali",
                    "Fenaia Ilmaten","Toudja","Darguina","Sidi-Ayad","Aokas","Ait Djellil","Adekar","Akbou","Seddouk",
                    "Tazmalt","Ait R'zine","Chemini","Souk-Oufella","Taskriout","Tibane","Tala Hamza","Barbacha","Ait Ksila",
                    "Ouzellaguen","Bouhamza","Beni Mellikeche","Sidi-Aich","El Kseur","Melbou","Akfadou","Leflaye","Kherrata",
                    "Draâ El-Kaid","Tamridjet","Ait-Samil","Boukhelifa","Tizi N'Berber","Oued Ghir","Boudjellil"]
          },
          {
            name: "Biskra",
            cities: ["Ain Naga","Ain Zaatout","Biksra","Bordj Ben Azzouz","Bouchagroune","Branis","Chetma","Djemorah",
                    "El Feidh","El Ghrous","El Hadjeb","El Haouch","El Kantara","El Mizaraa","El Outaya","Foughala",
                    "Khenguet Sidi Nadji","Lichana","Lioua","M'Chouneche","Mekhadma","M'Lili","Oumache","Ourlal","Sidi Okba","Tolga","Zeribet El Oued"]
          },
          {
            name: "Béchar",
            cities: ["Béchar","Erg Ferradj","Ouled Khoudir","Meridja","Timoudi","Lahmar","Béni Abbès","Beni Ikhlef",
                    "Mechraa Houari Boumedienne","Kenadsa","Igli","Tabelbala","El Ouata","Boukais","Mougheul","Abadla","Kerzaz","Ksabi","Tamtert","Beni Ounif"]
          },
          {
            name: "Blida",
            cities: ["Blida","Chebli","Bouinan","Oued Alleug","Ouled Yaich","Chréa","El Affroun","Chiffa","Hammam Melouane",
                    "Benkhelil","Soumaa","Mouzaia","Souhane","Meftah","Ouled Slama","Boufarik","Larbaa","Oued Djer","Beni Tamou",
                    "Bouarfa","Beni Merad","Bougara","Gueraoua","Ain Roumana","Djebabra"]
          },
          {
            name: "Bouira",
            cities: ["Ain Bessem","Hanif","Aghbalou","Ain El Hadjer","Ahl El Ksar","Ain Laloui","Ath Mansour","Aomar",
                    "Ain El Turc","Ait Laziz","Bouderbala","Bechloul","Bir Ghbalou","Boukram","Bordj Okhriss","Bouira",
                    "Chorfa","Dechmia","Dirrah","Djebahia","El Hakimia","El Hachimia","El Adjiba","El khabouzia","El Mokrani",
                    "El Asnam","Guerrouma","Haizer","Hadjera Zerga","Kadiria","Lakhdaria","M'Chedallah","Mezdour","Maala",
                    "Maamora","Oued El Berdi","Ouled Rached","Raouraoua","Ridane","Saharidj","Sour El Ghouzlane","Souk El Khemis",
                    "Taguedit","Taghzout","Zbarbar"]
          },
          {
            name: "Tamanrasset",
            cities: ["Tamanrasset", "Abalessa", "Idles","Tazrouk","In Amguel"]
          },
          {
            name: "Tébessa",
            cities: ["Tébessa","Bir el-Ater","Cheria","Stah Guentis","El Aouinet","El Houidjbet","Safsaf El Ouesra","Hammamet",
                    "Negrine","Bir Mokkadem","El Kouif","Morsott","El Ogla","Bir Dheb","Ogla Melha","Guorriguer","Bekkaria",
                    "Boukhadra","Ouenza","El Ma Labiodh","Oum Ali","Tlidjene","Ain Zerga","El Meridj","Boulhaf Dir","Bedjene","El Mezeraa","Ferkane"]
          },
          {
            name: "Tlemcen",
            cities: ["Tlemcen","Beni Mester","Ain Tallout","Remchi","El Fehoul","Sabra","Ghazaouet","Souani","Djebala",
                    "El Gor","Oued Lakhder","Ain Fezza","Ouled Mimoun","Amieur","Ain Youcef","Zenata","Beni Snous","Bab El Assa",
                    "Dar Yaghmouracene","Fellaoucene","Azails","Sebaa Chioukh","Terny Beni Hdiel","Bensekrane","Ain Nehala",
                    "Hennaya","Meghnia","Hammam Boughrara","Souahlia","MSirda Fouaga","Ain Fetah","El Aricha","Souk Tlata",
                    "Sidi Abdelli","Sebdou","Beni Ouarsous","Sidi Medjahed","Beni Boussaid","Marsa Ben M'Hidi","Nedroma",
                    "Sidi Djillali","Beni Bahdel","El Bouihi","Honaine","Tienet","Ouled Riyah","Bouhlou","Beni Khellad",
                    "Ain Ghoraba","Chetouane","Mansourah","Beni Semiel","Ain Kebira"]
          },
          {
            name: "Tiaret",
            cities: ["Ain Bouchekif","Ain Dehab","Ain El Hadid","Ain Kermes","Ain Dzarit","Bougara","Chehaima","Dahmouni",
                    "Djebilet Rosfa","Djillali Ben Amar","Faidja","Frenda","Guertoufa","Hamadia","Ksar Chellala","Madna",
                    "Madhia","Mechraa Safa","Medrissa","Medroussa","Meghila","Mellakou","Nadorah","Naima","Oued Lilli","Rahouia",
                    "Rechaiga","Sebaine","Sebt","Serghine","Si Abdelghani","Sidi Abderahmane","Sidi Ali Mellal","Sidi Bakhti",
                    "Sidi Hosni","Sougueur","Tagdemt","Takhemaret","Tiaret","Tidda","Tousnina","Zmalet El Emir Abdelkader"]
          },
          {
            name: "Tizi Ouzou",
            cities: ["Tizi Ouzou","Ain El Hammam","Akbil","Freha","Souamaâ","Mechtras","Irdjen","Timizart","Makouda",
                    "Draâ El Mizan","Tizi Gheniff","Bounouh","Ait Chafâa","Frikat","Beni Aissi","Air Zmenzer","Iferhounène",
                    "Azazga","Illoula Oumalou","Yakouren","Larbaâ Nath Irathen","Tizi Rached","Zekri","Ouaguenoun","Ain Zaouia",
                    "Imkiren","Ait Yahia","Ait Mahmoud","Mâatkas","Ait Boumahdi","Abi Youcef","Beni Douala","Illilten",
                    "Bouzeguène","Air Aggouacha","Ouadhia","Azeffoun","Tigzirt","Air Aissa Mimoun","Boghni","Ifigha","Ait Oumalou",
                    "Tirmitine","Akerrou","Yatafen","Ath Zikki","Draâ Ben Kheda","Aif Ouacif","Idjeur","Mekla","Tizi N'Tleta",
                    "Ait Yenni","Aghribs","Iflissen","Boudjima","Ait Yahia Moussa","Souk El Thnine","Ait Khellili","Sidi Namane",
                    "Ibudraren","Agouni Gueghrane","Mizrana","Imsouhel","Tadmait","Ait Bouaddou","Assi Youcef","Ait Toudret"]
          },
          {
            name: "Alger",
            cities: ["Alger Centre","Sidi M'Hamed","El Madania","Belouizdad","Bab El Oued","Bologhine","Casbah","Oued Koriche",
                    "Bir Mourad Rais","El Biar ","Bouzareah","Birkhadem","Baraki","El Harrach","Oued Smar","Bachdjarreh","Hussein Dey",
                    "Kouba","Bourouba","Dar El Beîda","Bab Ezzouar","Ben Aknoun","Dely Ibrahim","El Hammamet","Rais Hamidou","Djasr Kasentina",
                    "El Mouradia","Hydra","Mohammadia","Bordj El Kiffan","El Magharia","Beni Messous","Les Eucalyptus","Bertouta",
                    "Tessala El Merdja","Ouled Chebel","Sidi Moussa","Ain Taya","Bordj El Bahri","El Marsa","H'raoua","Rouiba","Reghaia",
                    "Ain Benian","Staoueli","Zéralda","Mahelma","Rahmania","Souidania","Chéraga","Ouled Fayet","El Achour","Draria",
                    "Douira","Baba Hassen","Khraicia","Saoula"]
          },
          {
            name: "Djelfa",
            cities: ["Ain Chouhada","Ain El Ibel","Ain Feka","Ain Maabed","Ain Oussara","Amourah","Benhar","Beni Yagoub","Birine","Bouira Lahdab",
                    "Charef","Dar Chioukh","Deldoul","Djefla","Douis","El Guedid","El Idrissia","El Khemis","Faidh El Botma",
                    "Guernini","Had-Sahary","Hassi Bahbah","Hassi El Heuch","Hassi Fedoul","Messaad","M'Liliha","Moudjebara",
                    "Oum Laadham","Sed Rahal","Selmana","Sidi Baizid","Sidi Ladjel","Tadamit","Zaafrane","Zaccar"]
          },
          {
            name: "Jijel",
            cities: ["Jijel","Eraguene","El Aouana","Ziama Mansouriah","Taher","Emir Abdelkader","Chekfa","Chahna","El Milia",
                    "Sidi Maarouf","Settara","El Ancer","Sidi Abdelaziz","Kaous","Ghebala","Bouraoui Belhadef","Djimla",
                    "Selma Benziada","Boucid Ouled Askeur","El Kennar Nouchfi","Ouled Yahia Khedrouche","Boudriaa Ben Yadjis",
                    "Kheiri Oued Adjoul","Texenna","Djemaa Beni Habibi","Bordj Tahar","Ouled Rabah","Ouadjana"]
          },
          {
            name: "Sétif",
            cities: ["Ain Abessa","Ain Arnat","Ain Azel","Ain El Kebira","Ain Lahdjar","Ain Legradj","Ain Oulmene","Ain Roua",
                    "Ain Sebt","Ait Naoual Mezada","Ait Tizi","Beni Ouartilene","Amoucha","Babor","Bazer Sakhra","Beidha Bordj",
                    "Belaa","Beni Aziz","Beni Chebana","Beni Fouda","Beni Hocine","Beni Mouhli","Bir El Arch","Bir Haddada",
                    "Bouandas","Bougaa","Bousselam","Boutaleb","Dehamcha","Djemila","Draa Kebila","El Eulma","El Ouldja",
                    "El Ouricia","Guellal","Gueltz Zerka","Guenzet","Guidjel","Hamma","Hammam Guergour","Hamma Sokhna",
                    "Harbil","Ksar El Abtal","Maaouia","Maoklane","Mzeloug","Oued El Barad","Ouled Addouane","Ouled Sabor",
                    "Ouled Si Ahmed","Ouled Tebben","Rasfa","Salah Bey","Serdj El Ghoul","Sétif","Tachouda","Talaifacene",
                    "Taya","Tella","Tizi N'Bechar"]
          },
          {
            name: "Saida",
            cities: ["Ain El Hadjar","Ain Sekhouna","Ain Soltane","Doui Thabet","El Hassasna","Hounet","Maamora","Moulay Larbi",
                    "Ouled Brahim","Ouled Khaled","Saida","Sidi Ahmed","Sidi Amar","Sidi Boubekeur","Tircine","Youb"]
          },
          {
            name: "Skikda",
            cities: ["Ain Bouziane","Ain Charchar","Ain Kechra","Ain Zouit","Azzaba","Bekkouche Lakhdar","Bin El Ouiden",
                    "Ben Azzouz","Beni Bechir","Beni Oulbane","Beni Zid","Bouchtata","Cheraia","Collo"," Djendel Saadi Mohamed",
                    "El Ghedir","El Hadaiek","El Harrouch","El Marsa","Emdjez Edchich","Es Sebt","Filfila","Hamadi Krouma","Kanoua",
                    "Kerkera","Kheneg Mayoum","Oued Zehour","Ouldja Boulballout","Ouled Attia","Ouled Hbaba","Oum Toub","Ramdane Djamel",
                    "Salah Bouchaour","Sidi Mezdghiche","Skikda","Tamalous","Zerdaza","Zitouna"]
          },
          {
            name: "Sidi Bel Abbès",
            cities: ["Ain Adden","Ain El Berd","Ain Kada","Ain Thrid","Ain Tindamine","Amarnas","Badredine El Mokrani","Belarbi",
                    "Ben Badis","Benachiba Chelia","Bir El Hammama","Boudjebaa El Bordj","Boukhanafis","Chettouane Belaila",
                    "Dhaya","El Haçaiba","Hassi Dahou","Hassi Zehana","Lamtar","Makedra","Marhoum","M'Cid","Merine","Meazaourou",
                    "Mostefa Ben Brahim","Moulay Slissen","Oued Sebaa","Oued Sefioun","Oued Taourira","Ras El Ma","Redjem Demouche",
                    "Sidi Ali Boussidi","Sehala Tharoua","Sfisef","Sidi Ali Benyoub","Sidi Bel Abbes ","Sidi Brahim","Sid Chaib",
                "Sidi Daho des Zairs","Sidi Hamadouche","Sidi Khaled","Sidi Lahcene","Sidi Yakoub","Tabia","Tafissour","Taoudmout",
                    "Teghalimet","Telagh","Tenira","Tessala","Tilmouni","Zerouala"]
          },
          {
            name: "Annaba",
            cities: ["Annaba","Berrahal","El Hadjer","Eulma","El Bouni","Oued El Aneb","Cheurfa","Seraidi","Ain Berda","Chetaibi","Sidi Amar","Treat"]
          },
          {
            name: "Guelma",
            cities: ["Ain Ben Beida","Ain Larbi","Ain Makhlouf","Ain Reggada","Ain Sandel","Belkeir","Ben Djerrah","Beni Mezline",
                    "Bordj Sabath","Bouhachana","Bouhamdane","Bouati Mahmoud","Bouchegouf","Boumahra Ahmed","Dahouara","Djeballah Khemissi",
                    "El Fedjoudj","Guellat Bou Sbaa","Guelma","Hammam Debagh","Hammam N'Bail","Héliopolis","Houari Boumédienne","Khezaara",
                    "Medjez Amar","Medjez Sfa","Nechmaya","Oued Cheham","Oued Fragha","Oued zenati","Ras El Agba","Roknia","Sellaoua Announa","Tamlouka"]
          },
          {
            name: "Constanine",
            cities: ["Ain Abid","Ain Smara","Beni Hamiden","Constanine","Didouche Mourad","El Khroub","Hamma Bouziane","Ibn Badis",
                "Ibn Ziad","Messaoud Boudjriou","Ouled Rahmoune","Zighoud Youcef"]
          },
          {
            name: "Médéa",
            cities: ["Ain Boucif","Ain Ouksir ","Aissaouia","Aziz","Baata","Benchicao","Beni Slimane","Berrouaghia","Bir Ben Laabed",
                    "Boghar","Bou Aiche","Bouaichoune","Bouchrahil","Boughezoul","Bouskene","Chahbounia","Chellalet El Adhaoura",
                    "Cheniguel","Derrag","Deux Bassins","Djouab","Draa Essamar","El Azizia","El Guelb El Kebir","El Hamdania",
                    "El Omaria","El Ouinet","Hannacha","Kef Lakhder","Khams Djouamaa","Ksar Boukhari","Meghraoua","Médéa","Moudjbar","Meftaha",
                    "Mihoub","Ouamri","Oued Harbil","Ouled Antar","Ouled Bouachra","Ouled Deide","Ouled Hellal","Ouled Maaref","Oum El Djallil",
                    "Ouzera","Rebaia","Saneg","Sedraia","Seghouane","Si Mahdjoub","Sidi Damed","Sidi Errabia","Sidi Naamane","Sidi Zahar",
                    "Sidi Ziane","Souagui","Tablat","Tafraout","Tamesguida","Tizi Mahdi","Tlalet Eddouar","Zoubiria"]
          },
          {
            name: "Mostaganem",
            cities: ["Abdelmalek Ramdane","Achaacha","Aïn Boudinar","Aïn Nouissy","Aïn Sidi Cherif","Aïn Tedles","Blad Touahria","Bouguirat",
                    "El Hassiane","Fornaka","Hadjadj","Hassi Mameche","Khadra","Kheireddine","Mansourah","Mesra","Mazagran","Mostaganem",
                    "Nekmaria","Oued El Kheir","Ouled Boughalem","Ouled Maallah","Safsaf","Sayada","Sidi Ali","Sidi Belattar","Sidi Lakhdar",
                    "Sirat","Souaflia","Sour","Stidia","Tazgait"]
          },
          {
            name: "M'Sila",
            cities: ["Aïn El Hadjel","Aïn El Melh","Aïn Errich","Aïn Fares","Aïn Khadra","Belaiba","Ben Srour","Beni Ilmane","Benzouh","Berhoum",
                    "Bir Foda","Bou Saâda","Bouti Sayah","Chellal","Dehahna","Djebel Messaad","El Hamel","El Houamed","Hammam Dhalaa","Khettouti Sed El Djir",
                    "Khoubana","Maadid","Maarif","Magra","M'Cif","Medjedel","M'Sila","M'Tarfa","Ouanougha","Ouled Addi Guebala","Ouled Atia","Mohammed Boudiaf",
                    "Ouled Derradj","Ouled Madhi","Ouled Mansour","Ouled Sidi Brahim","Ouled Slimane","Oultem","Sidi Aïssa","Sidi Ameur","Sidi Hadjeres",
                    "Sidi M'Hamed","Slim","Souamaa","Tamsa","Tarmount","Zarzour"]
          },
          {
            name: "Mascara",
            cities: ["Aïn Fares","Aïn Fekan","Aïn Ferah","Aïn Fras","Alaïmia","Aouf","Beniane","Bou Hanifia","Bou Henni","Chorfa","El Bordj","El Gaada","El Ghomri",
                    "El Guettana","El Keurt","El Menaouer","Ferraguig","Froha","Gharrous","Guerdjoum","Ghriss","Hachem","Hacine","Khalouia","Makdha","Mamounia",
                    "Maoussa","Mascara","Matemore","Mocta Douz","Mohammadia","Nesmoth","Oggaz","Oued El Abtal","Oued Taria","Ras El Aïn Amirouche","Sedjerara","Sehailia","Sidi Abdeldjebar","Sidi Abdelmoumen","Sidi Kada","Sidi Boussaid",
                    "Sig","Tighennif","Tizi","Zahana","Zelmata"]
          },
          {
            name: "Ouargla",
            cities: ["Aïn Beida","El Borma","Hassi Ben Abdellah","Hassi Messaoud","N'Goussa","Ouargla","Rouissat","Sidi Khouiled"]
          },
          {
            name: "Oran",
            cities: ["Aïn El Bia","Aïn El Kerma","Aïn El Turk","Arzew ","Ben Freha","Bethioua","Bir El Djir","Boufatis","Bousfer","Boutlélis","El Ançor","El Braya","El Kerma","Es Senia","Gdyel","Hassi Ben Okba","Hassi Bounif","Hassi Mefsoukh","Hassiane Ettoual","Mers El Hadjadj","Mers el-Kébir","Misserghin","Oued Tlelat",
                    "Oran","Sidi Benyebka","Sidi Chami","Tafraoui"]
          },
          {
            name: "El Bayadh",
            cities: ["El Bayadh","El Bayadh","Rogassa","Stitten","Brezina","Ghassoul","Boualem","El Abiodh Sidi Cheikh","Aïn El Orak","Arbaouat","Bougtoub","El Kheiter","Kef El Ahmar","Boussemghoun","Chellala","Kraakda","El Bnoud","Cheguig","Sidi Ameur","El Mehara","Tousmouline","Sidi Slimane","Sidi Tifour"]
          },
          {
            name: "Illizi",
            cities: ["Illizi","Debdeb","Bordj Omar Dris","In Amenas"]
          },
          {
            name: "Bordj Bou Arreridj",
            cities: ["Aïn Taghrout","Aïn Tesra","Belimour","Ben Daoud","Bir Kasdali","Bordj Bou Arreridj","Bordj Ghédir","Bordj Zemoura","Colla","Djaafra","El Ach","El Achir","El Anseur","El Hamadia","El Main","El M'hir","Ghilassa","Haraza","Hasnaoua","Khelil","Ksour","Mansoura","Medjana","Ouled Brahem","Ouled Dahmane","Ouled Sidi Brahim","Rabta","Ras El Oued","Sidi Embarek","Tefreg","Taglait","Teniet En Nasr","Tassameurt","Tixter"]
          },
          {
            name: "Boumerdès",
            cities: ["Afir","Ammal","Baghlia","Ben Choud","Beni Amrane","Bordj Menaïel","Boudouaou","Boudouaou-El-Bahri","Boumerdes","Bouzegza Keddara","Chabet el Ameur","Corso","Dellys","Djinet","El Kharrouba","Hammedi","Issers","Khemis El-Khechna","Larbatache","Leghata","Naciria","Ouled Aïssa","Ouled Hedadj","Ouled Moussa","Si Mustapha","Sidi Daoud","Souk El Had","Taourga","Thenia","Tidjelabine","Timezrit","Zemmouri"]
          },
          {
            name: "El Taref",
            cities: ["Aïn El Assel","Aïn Kerma","Asfour","Ben Mehidi","Berrihane","Besbes","Bougous","Bouhadjar","Bouteldja","Chebaita Mokhtar","Chefia","Chihani","Dréan","Echatt","El Aioun","El Kala","El Tarf","Hammam Beni Salah","Lac des Oiseaux","Oued Zitoun","Raml Souk","Souarekh","Zerizer","Zitouna"]
          },
          {
            name: "Tindouf",
            cities: ["Oum El Assel","Tindouf"]
          },
          {
            name: "Tissemsilt",
            cities: ["Ammari","Beni Chaib","Beni Lahcene","Boucaid","Bordj Bou Naama","Bordj El Emir Abdelkader","Khemisti","Larbaa","Lardjem","Layoune","Lazharia","Maacem","Melaab","Ouled Bessem","Sidi Abed","Sidi Boutouchent","Sidi Lantri","Sidi Slimane","Tamalaht","Theniet El Had","Tissemsilt","Youssoufia"]
          },
          {
            name: "El Oued",
            cities: ["El Oued","Robbah","Oued El Alenda","Bayadha","Nakhla","Guemar","Kouinine","Reguiba","Hamraia","Taghzout","Debila","Hassani Abdelkrim","Hassi Khalifa","Taleb Larbi","Douar El Ma","Sidi Aoun","Trifaoui","Magrane","Beni Guecha","Ourmas","El Ogla","Mih Ouansa"]
          },
          {
            name: "Khenchela",
            cities: ["Aïn Touila","Babar","Baghai","Bouhmama","Chechar","Chelia","Djellal","El Hamma","El Mahmal","El Oueldja","Ensigha","Kais","Khenchela","Khirane","M'Sara","M'Toussa","Ouled Rechache","Remila","Tamza","Taouzient","Yabous"]
          },
          {
            name: "Souk Ahras",
            cities: ["Souk Ahras","Sedrata","Hanancha","Mechroha","Ouled Driss","Tiffech","Zaarouria","Taoura","Dréa","Heddada","Khedara","Merahna","Ouled Moumene","Bir Bou Haouch","M'daourouch","Oum El Adhaim","Aïn Zana","Aïn Soltane","Ouillen","Sidi Fredj","Safel El Ouiden","Ragouba","Khemissa","Oued Keberit","Terraguelt","Zouabi"]
          },
          {
            name: "Tipaza",
            cities: ["Tipaza","Menaceur","Larhat","Douaouda","Bourkika","Khemisti","Aghbal","Hadjout","Sidi Amar","Gouraya","Nador","Chaiba","Aïn Tagourait","Cherchell","Damous","Merad","Fouka","Bou Ismaïl","Ahmar El Aïn","Bouharoun","Sidi Ghiles","Messelmoun","Sidi Rached","Koléa","Attatba","Sidi Semiane","Beni Milleuk","Hadjeret Ennous"]
          },
          {
            name: "Mila",
            cities: ["Ahmed Rachedi","Aïn Beida Harriche","Aïn Mellouk","Aïn Tine","Amira Arrès","Benyahia Abderrahmane","Bouhatem","Chelghoum Laid","Chigara","Derradji Bousselah","El Mechira","Elayadi Barbes","Ferdjioua","Grarem Gouga","Hamala","Mila","Minar Zarza","Oued Athmania","Oued Endja","Oued Seguen","Ouled Khalouf","Rouached","Sidi Khelifa","Sidi Merouane","Tadjenanet","Tassadane Haddada","Teleghma","Terrai Bainen","Tessala Lemtaï","Tiberguent","Yahia Beni Guecha","Zeghaia"]
          },
          {
            name: "Ain Defla",
            cities: ["Aïn Benian","Aïn Bouyahia","Aïn Defla","Aïn Lechiekh","Aïn Soltane","Aïn Torki","Arib","Bathia","Belaas","Ben Allal","Birbouche","Bir Ould Khelifa","Bordj Emir Khaled","Boumedfaa","Bourached","Djelida","Djemaa Ouled Cheikh","Djendel","El Abadia","El Amra","El Attaf","El Hassania","El Maine","Hammam Righa","Hoceinia","Khemis Miliana","Mekhatria","Miliana","Oued Chorfa","Oued Djemaa","Rouina","Sidi Lakhdar","Tacheta Zougagha","Tarik Ibn Ziad","Tiberkanine","Zeddine"]
          },
          {
            name: "Naâma",
            cities: ["Naâma","Mecheria","Aïn Sefra","Tiout","Sfissifa","Moghrar","Assela","Djeniene Bourezg","Aïn Ben Khelil","Makman Ben Amer","Kasdir","El Biod"]
          },
          {
            name: "Ain Témouchent",
            cities: ["Aghlal","Aïn El Arbaa","Aïn Kihal","Aïn Témouchent","Aïn Tolba","Aoubellil","Beni Saf","Bouzedjar","Chaabat El Leham","Chentouf","El Amria","El Emir Abdelkader","El Malah","El Messaid","Hammam Bouhadjar","Hassasna","Hassi El Ghella","Oued Berkeche","Oued Sabah","Ouled Boudjemaa","Ouled Kihal","Oulhaça El Gheraba","Sidi Ben Adda","Sidi Boumedienne","Sidi Ouriache","Sidi Safi","Tamzoura","Terga"]
          },
          {
            name: "Ghardaia",
            cities: ["Berriane","Bounoura","Dhayet Bendhahoua","El Atteuf","El Guerrara","Ghardaïa","Mansoura","Metlili","Sebseb","Zelfana"]
          },
          {
            name: "Relizane",
            cities: ["Aïn Rahma","Aïn Tarek","Ammi Moussa","Belassel Bouzegza","Bendaoud","Beni Dergoun","Beni Zentis","Dar Ben Abdellah","Djidioua","El Guettar","El Hamadna","El Hassi","El Matmar","El Ouldja","Had Echkalla","Hamri","Kalaa","Lahlef","Mazouna","Mediouna","Mendes","Merdja Sidi Abed","Ouarizane","Oued Essalem","Oued Rhiou","Ouled Aiche","Oued El Djemaa","Ouled Sidi Mihoub","Ramka","Relizane","Sidi Khettab","Sidi Lazreg","Sidi M'Hamed Ben Ali","Sidi M'Hamed Benaouda","Sidi Saada","Souk El Had","Yellel","Zemmora"]
          },
          {
            name: "Timimoun",
            cities: ["Aougrout","Charouine","Deldoul","Ksar Kaddour","Metarfa","Ouled Aïssa","Ouled Saïd","Talmine","Timimoun","Tinerkouk"]
          },
          {
            name: "Bordj Badji Mokhtar",
            cities: ["Bordj Badji Mokhtar","Timiaouine"]
          },
          {
            name: "Ouled Djellal",
            cities: ["Besbes","Ech Chaïba","Doucen","Ouled Djellal","Sidi Khaled","Ras El Miaad"]
          },
          {
            name: "Béni Abbès",
            cities: ["Béni Abbès","Beni Ikhlef","El Ouata","Igli","Kerzaz","Ksabi","Oulad khodeir","Tabelbala","Tamtert","Timoudi"]
          },
          {
            name: "In Salah",
            cities: ["In Salah","Foggaret Ezzaouia","In Ghar"]
          },
          {
            name: "In Guezzam",
            cities: ["In Guezzam","Tin Zaouatine"]
          },
          {
            name: "Touggourt",
            cities: ["Benaceur","Blidet Amor","El Allia","El Hadjira","Megarine","M'Naguer","Nezla","Sidi Slimane","Taibet","Temacine","Tebesbest","Touggourt","Zaouia El Abidia"]
          },
          {
            name: "Djanet",
            cities: ["Djanet","Bordj El Haouas"]
          },
          {
            name: "El M'Ghair",
            cities: ["Djamaa","El M'Ghair","Merara","Oum Touyour","Sidi Amrane","Sidi Khellil","Still","Tendla"]
          },
          {
            name: "El Menia",
            cities: ["El Menia","Hassi Gara","Hassi Fehal"]
          },
        ]
      }
    ]
  };
const CountryStateCity = (props) => {
    const [selectedCountry] = React.useState("Algeria");
    const [selectedState, setSelectedState] = React.useState();
    const [selectedCity, setSelectedCity] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );

  const handleChange = (e) =>{
    if(e.target.name == 'wilaya') setSelectedState(e.target.value);
    else setSelectedCity(e.target.value);
    props.handleFilterChange(e)

  }

  return (
    <div className="space-y-3 font-poppins ">
      <div className="text-[#160042]">
        <label className="font-poppins text-[#4285f4] text-sm">Wilaya</label><br></br>
        <select
          name='wilaya'
          className="rounded-lg w-[220px] h-[40px] border-gray-200 cursor-pointer text-sm text-gray-500"
          placeholder="State"
          value={selectedState}
          onChange={handleChange}
        >
          <option>Choisir une wilaya</option>
          {availableState?.states.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="text-[#160042]">
        <label  className="font-poppins text-[#4285f4] text-sm">Commune</label><br></br>
        <select
          className="rounded-lg w-[220px] h-[40px] border-gray-200 cursor-pointer text-sm text-gray-500"
          placeholder="City"
          value={selectedCity}
          name='commune'
          onChange= {handleChange }
        >
          <option>Choisir la commune</option>
          {availableCities?.cities.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CountryStateCity