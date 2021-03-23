

conn = new Mongo();
db = connect('localhost:27017/eportfolio');
db.siteversions.insert({opinionOthers: true, backAdmin: true});

db.regions.insert({title: 'Rhône-Alpes'});

var alpesId = db.regions.findOne({title: 'Rhône-Alpes'})._id;

//Insertion départements
db.departments.insert({
    title       :   'Drôme',
    RegionId    :   alpesId,
    number      :   26
});
db.departments.insert({
    title       : 'Isère',
    RegionId    : alpesId,
    number      :   26
});

var dromeId = db.departments.findOne({title: 'Drôme'})._id,
    isereId = db.departments.findOne({title: 'Isère'})._id;

//insertion villes
db.towns.insert({
    title           : 'Romans-sur-Isère',
    departmentId    : dromeId
});
db.towns.insert({
    title           : 'Claveyson',
    departmentId    :  dromeId
});
db.towns.insert({
    title           : 'Bathernay',
    departmentId    : dromeId
});
db.towns.insert({
    title           : 'Chantemerle-les-blés',
    departmentId    : dromeId
});
db.towns.insert({
    title           : 'Grenoble',
    departmentId    : isereId
});
var romansId    = db.towns.findOne({title: 'Romans-sur-Isère'})._id,
    grenobleId  = db.towns.findOne({title: 'Grenoble'})._id,
    claveysonId = db.towns.findOne({title: 'Claveyson'})._id,
    bathernayId = db.towns.findOne({title: 'Bathernay'})._id;

db.formations.insert({
    institution : 'Lycée des métiers du dauphiné',
    title       : 'Bac SSI option ISN',
    status      : 'obtenu',
    townId      : romansId,
    startDate   : new Date('2016-09-01'),
    endDate     : new Date('2019-07-01'),
    image       : "institution/dauphine.jpg"
});
db.formations.insert({
    institution : 'IUT2',
    title       : 'DUT Informatique',
    status      : 'obtenu',
    townId      : grenobleId,
    startDate   : new Date('2019-09-01'),
    endDate     : new Date('2021-07-01'),
    image       : "institution/dut.jpg"
});
db.formations.insert({
    institution : 'IUT2',
    title       : 'Licence 3 Informatique',
    status      : 'en cours',
    townId      : grenobleId,
    startDate   : new Date('2021-09-01'),
    image       : "institution/uga.jpg"
});

var bacSId  =   db.formations.findOne({title: 'Bac SSI option ISN'})._id,
    dutId   =   db.formations.findOne({title: 'DUT Informatique'})._id,
    l3Id    =   db.formations.findOne({title: 'Licence 3 Informatique'})._id;

//Company
db.companies.insert({
    title           :   'Mobiteach',
    metier          :   'Programmation informatique',
    shortMetier     :   'Programmation',
    linkEntreprise  :   'https://mobiteach.fr/',
    townId          :   grenobleId,
    logo            :   'companies/mobiteach.png'
});
db.companies.insert({
    title           :   'Poirot',
    metier          :   'Travaux de menuiserie métallique et serrurerie',
    shortMetier     :   'Métallurgie',
    linkEntreprise  :   'https://www.societe.com/societe/poirot-409011640.html',
    townId          :   claveysonId
});
db.companies.insert({
    title           :   'PERRIN',
    metier          :   'Culture de fruits à pépins et à noyau',
    shortMetier     :   'Agriculture',
    linkEntreprise  :   'https://www.societe.com/societe/poirot-409011640.html',
    townId          :   claveysonId
});
db.companies.insert({
    title           :   'GAEC De Centenier',
    metier          :   'Culture de céréales (à l\'exception du riz), de légumineuses et de graines oléagineuses',
    shortMetier     :   'Agriculture',
    linkEntreprise  :   'https://www.societe.com/societe/gaec-de-centenier-343043840.html',
    townId          :   bathernayId
});
db.companies.insert({
    title           :   'Espace France Auto',
    metier          :   'Commerce de voitures et de véhicules automobiles légers',
    shortMetier     :   'Concessionnaire',
    linkEntreprise  :   'https://www.espacefranceauto.com/',
    townId          :   romansId
});

var mobiteachId         =   db.companies.findOne({title: 'Mobiteach'})._id,
    poirotId            =   db.companies.findOne({title: 'Poirot'})._id,
    perrinId            =   db.companies.findOne({title: 'PERRIN'})._id,
    espaceFranceAutoId  =   db.companies.findOne({title: 'Espace France Auto'})._id,
    gaecId              =   db.companies.findOne({title: 'GAEC De Centenier'})._id;
//Language
//Web
db.languages.insert({
    title   :   'html',
    level   :   'avance',
    type    :   ['web', 'front-end'],
    image   :   'languages/html.png',
    stars   :   5
});
db.languages.insert({
    title   :   'css',
    level   :   'intermediaire',
    type    :   ['web', 'front-end'],
    image   :   'languages/css.png',
    stars   :   4
});
db.languages.insert({
    title   :   'less',
    level   :   'intermediaire',
    type    :   ['web', 'front-end'],
    image   :   'languages/less.png',
    stars   :   4
});
db.languages.insert({
    title   :   'javascript',
    level   :   'intermediaire',
    type    :   ['web', 'front-end'],
    image   :   'languages/js.png',
    stars   :   4
});
db.languages.insert({
    title   :   'typeScript',
    level   :   'base',
    type    :   ['web', 'front-end'],
    image   :   'languages/typescript.png',
    stars   :   2
});
db.languages.insert({
    title   :   'nodeJS',
    level   :   'intermediaire',
    type    :   ['web', 'back-end'],
    image   :   'languages/nodejs.png',
    stars   :   4
});
db.languages.insert({
    title   :   'php',
    level   :   'base',
    type    :   ['web', 'back-end'],
    image   :   'languages/php.png',
    stars   :   1
});
//Logiciel
db.languages.insert({
    title   :   'java',
    level   :   'intermediaire',
    type   :   ['logiciel', 'mobile'],
    image   :   'languages/java.png',
    stars   :   4
});
db.languages.insert({
    title   :   'c++',
    level   :   'base',
    type   :   ['logiciel'],
    image   :   'languages/cpp.png',
    stars   :   2.5
});
db.languages.insert({
    title   :   'c',
    level   :   'base',
    type   :   ['logiciel'],
    image   :   'languages/c.png',
    stars   :   3.5
});
db.languages.insert({
    title   :   'python',
    level   :   'intermediaire',
    type   :   ['logiciel'],
    image   :   'languages/python.png',
    stars   :   2
});
//SQL
db.languages.insert({
    title   :   'mySql',
    level   :   'base',
    type    :   ['SQL'],
    image   :   'languages/mysql.png',
    stars   :   3
});
db.languages.insert({
    title   :   'mongoDB',
    level   :   'intermediaire',
    type    :   ['SQL'],
    image   :   'languages/mongodb.png',
    stars   :   4
});
db.languages.insert({
    title   :   'sqlite',
    level   :   'base',
    type    :   ['SQL'],
    image   :   'languages/sqlite.png',
    stars   :   4
});
db.languages.insert({
    title   :   'postgreSQL',
    level   :   'base',
    type    :   ['SQL'],
    image   :   'languages/postgresql.png',
    stars   :   2
});

var nodeJSId        = db.languages.findOne({title: 'nodeJS'})._id,
    typeScriptId    = db.languages.findOne({title: 'typeScript'})._id,
    cssId           = db.languages.findOne({title: 'css'})._id,
    javascriptId    = db.languages.findOne({title: 'javascript'})._id,
    javaId          = db.languages.findOne({title: 'java'})._id,
    cId             = db.languages.findOne({title: 'c'})._id,
    cppId           = db.languages.findOne({title: 'c++'})._id,
    pythonId        = db.languages.findOne({title: 'python'})._id,
    htmlId          = db.languages.findOne({title: 'html'})._id,
    mongoDBId       = db.languages.findOne({title: 'mongoDB'})._id;

//Framework
db.frameworks.insert({
    title       :   'expressJS',
    level       :   'intermediaire',
    type        :   ['web', 'back-end'],
    languageId  :   nodeJSId,
    image       :   'framework/expressjs.png',
    stars       :   3.5
});

db.frameworks.insert({
    title       :   'bootstrap',
    level       :   'intermediaire',
    type        :   ['web', 'front-end'],
    languageId  :   cssId,
    image       :   'framework/bootstrap.png',
    stars       :   4.5
});
db.frameworks.insert({
    title       :   'angular',
    level       :   'base',
    type        :   ['web', 'front-end'],
    languageId  :   typeScriptId,
    image       :   'framework/angular.png',
    stars       :   2
});
db.frameworks.insert({
    title       :   'angularJS',
    level       :   'intermediaire',
    type        :   ['web', 'front-end'],
    languageId  :   javascriptId,
    image       :   'framework/angularjs.png',
    stars       :   3.5

});
db.frameworks.insert({
    title       :   'mongoose',
    level       :   'intermediaire',
    type        :   ['web', 'back-end'],
    languageId  :   javascriptId,
    image       :   'framework/mongoose.png',
    stars       :   4
});

var angularId       = db.frameworks.findOne({title: 'angular'})._id,
    bootstrapId     = db.frameworks.findOne({title: 'bootstrap'})._id,
    angularjsId     = db.frameworks.findOne({title: 'angularJS'})._id,
    expressId       = db.frameworks.findOne({title: 'expressJS'})._id;

//Award
db.awards.insert({
    title: 'Meilleur prototype de l\'année 2020',
    image:  'awards/prixMeilleurProjet2020.jpg'
});

var bestProjectId = db.awards.findOne()._id;

//Projet
db.projects.insert({
    title       :   'L\'île interdite',
    description :   'Jeux de plateau l\'île interdite en local',
    languages   :   [javaId],
    ranking     :   3,
    github      :   'https://github.com/TarJimmy/IleInterdite',
    startDate   :   new Date('2019-06-03'),
    endDate     :   new Date('2019-06-21'),
    type        :   'school'
});
db.projects.insert({
    title       :   'E-portfolio',
    description :   'Site web de présentation de mon parcours',
    languages   :   [htmlId, cssId, nodeJSId, typeScriptId],
    frameworks  :   [bootstrapId, expressId, angularId],
    ranking     :   1,
    github      :   'https://github.com/TarJimmy/eportfolio2',
    startDate   :   new Date('2020-12-06'),
    type        :   'perso'
});
db.projects.insert({
    title       :   'Application web de management de club sportif',
    awardId     :   bestProjectId,
    description :   'Programmation du jeux de plateau l\'île interdite, multijoueur sur un seule pc',
    languages   :   [htmlId, cssId, nodeJSId, typeScriptId],
    frameworks  :   [bootstrapId, expressId, angularId],
    ranking     :   1,
    github      :   'https://github.com/meloniaxel/SCR',
    startDate   :   new Date('2019-10-01'),
    endDate     :   new Date('2020-01-01'),
    type        :   'school',
    client      :   'Sporting Club Royannais'
});
db.projects.insert({
    title       :   'Simulateur ARM',
    description :   'Programmation du jeux de plateau l\'île interdite, multijoueur sur un seule pc',
    languages   :   [htmlId, cssId, nodeJSId, typeScriptId],
    frameworks  :   [bootstrapId, expressId, angularId],
    ranking     :   3,
    github      :   'https://github.com/TarJimmy/Projet-S5-PROG',
    startDate   :   new Date('2019-05-01'),
    endDate     :   new Date('2019-06-01'),
    type        :   'school'
});
db.projects.insert({
    title       :   'Logiciel de traitement d\'image',
    description :   'Logiciel permettant de modifier une image au niveau du pixel',
    languages   :   [cppId],
    ranking     :   3,
    startDate   :   new Date('2020-03-09'),
    endDate     :   new Date('2020-05-04'),
    type        :   'school'
});
db.projects.insert({
    title       :   'Jeux de parcours sur la pollution',
    description :   'Jeux de saut sur des plateformes où l\'objectif est d\'atteindre un monde non pollué',
    languages   :   [pythonId],
    ranking     :   3,
    github      :   'https://github.com/TarJimmy/gameJam',
    startDate   :   new Date('2020-03-10'),
    endDate     :   new Date('2020-03-14'),
    type        :   'school'
});
db.projects.insert({
    title       :   'Application mobile d\'apprentissage niveau primaire',
    description :   'Application mobile proposant des jeux de maths, d\'histoire-géographie et de francais de niveau élémentaire',
    languages   :   [javaId],
    ranking     :   2,
    startDate   :   new Date('2020-04-06'),
    endDate     :   new Date('2020-05-04'),
    type        :   'school'
});

var ileInterditeId      = db.projects.findOne({title: 'L\'île interdite'})._id,
    eportfolioId        = db.projects.findOne({title: 'E-portfolio'})._id,
    applicationWeb      = db.projects.findOne({title: 'Application web de management de club sportif'})._id,
    armId               = db.projects.findOne({title: 'Simulateur ARM'})._id,
    traitementImageId   = db.projects.findOne({title: 'Logiciel de traitement d\'image'})._id,
    parcoursId          = db.projects.findOne({title: 'Jeux de parcours sur la pollution'})._id,
    appliMobileId      = db.projects.findOne({title: 'Application mobile d\'apprentissage niveau primaire'})._id;

db.schoolProjects.insert({
    projectId   :   ileInterditeId,
    formationId :   dutId,
    nbMembers   :   4
});
db.schoolProjects.insert({
    projectId   :   applicationWeb,
    formationId :   dutId,
    nbMembers   :   5
});
db.schoolProjects.insert({
    projectId   :   armId,
    formationId :   l3Id,
    nbMembers   :   6
});
db.schoolProjects.insert({
    projectId   :   traitementImageId,
    formationId :   dutId,
    nbMembers   :   2
});
db.schoolProjects.insert({
    projectId   :   parcoursId,
    formationId :   dutId,
    nbMembers   :   4
});
db.schoolProjects.insert({
    projectId   :   appliMobileId,
    formationId :   dutId,
    nbMembers   :   1
});


//Job
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'SeasonalFarm',
    startDate       :   new Date('2015-07-06'),
    endDate         :   new Date('2015-07-16'),
    companyId       :   perrinId
});
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'SeasonalFarm',
    startDate       :   new Date('2016-07-04'),
    endDate         :   new Date('2016-07-15'),
    companyId       :   perrinId
});
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'SeasonalFarm',
    startDate       :   new Date('2017-07-06'),
    endDate         :   new Date('2017-07-31'),
    companyId       :   gaecId
});
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'SeasonalFarm',
    startDate       :   new Date('2017-08-21'),
    endDate         :   new Date('2017-08-31'),
    companyId       :   gaecId
});
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'SeasonalFarm',
    startDate       :   new Date('2018-07-04'),
    endDate         :   new Date('2018-07-22'),
    companyId       :   perrinId
});
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'ConstructionWorker',
    startDate       :   new Date('2019-07-08'),
    endDate         :   new Date('2019-07-19'),
    companyId       :   poirotId
});
db.jobs.insert({
    title           :   'summer',
    typeContract    :   'CDD',
    description     :   'CarWasher',
    startDate       :   new Date('2019-07-29'),
    endDate         :   new Date('2019-08-24'),
    companyId       :   espaceFranceAutoId
});
db.jobs.insert({
    title           :   'ComputerProgramming',
    typeContract    :   'Stage',
    description     :   'Webdeveloper',
    environment     :   [htmlId, cssId, javascriptId, bootstrapId, angularjsId, nodeJSId, expressId, mongoDBId],
    startDate       :   new Date('2020-04-17'),
    endDate         :   new Date('2020-07-03'),
    companyId       :   mobiteachId
});
db.jobs.insert({
    title           :   'ComputerProgramming',
    typeContract    :   'CDD',
    description     :   'Webdeveloper',
    environment     :   [htmlId, cssId, javascriptId, bootstrapId, angularjsId, nodeJSId, expressId, mongoDBId],
    startDate       :   new Date('2020-07-06'),
    endDate         :   new Date('2020-08-21'),
    companyId       :   mobiteachId
});
db.jobs.insert({
    title           :   'ComputerProgramming',
    typeContract    :   'CDD',
    description     :   'Webdeveloper',
    environment     :   [htmlId, cssId, javascriptId, bootstrapId, angularjsId, nodeJSId, expressId, mongoDBId],
    startDate       :   new Date('2020-11-01'),
    endDate         :   new Date('2020-11-13'),
    companyId       :   mobiteachId
});
db.jobs.insert({
    title           :   'ComputerProgramming',
    typeContract    :   'CDD',
    description     :   'Webdeveloper',
    environment     :   [htmlId, cssId, javascriptId, bootstrapId, angularjsId, nodeJSId, expressId, mongoDBId],
    startDate       :   new Date('2021-01-21'),
    companyId       :   mobiteachId
});

db.skills.insert({
    title       :   'Office',
    type        :   'BureauticSoftware',
    image       :   'others/office.png',
    stars       :   3.5
});

db.skills.insert({
    title       :   'Git',
    type        :   'VersionManagementSoftware',
    image       :   'others/git.png',
    stars       :   4
});

db.skills.insert({
    title       :   'UML',
    type        :   'ProgrammDesign',
    image       :   'others/uml.png',
    stars       :   4.5
});

db.skills.insert({
    title       :   'Redmine',
    type        :   'ProjectManagementApplication',
    image       :   'others/redmine.png'
    ,
    stars       :   3
});

db.skills.insert({
    title       :   'Slack',
    level       :   'ProjectManagementApplication',
    image       :   'others/slack.png'
    ,
    stars       :   4
});

db.skills.insert({
    title       :   'PhpMyAdmin',
    type        :   'DatabaseManagementSystems',
    image       :   'others/phpmyadmin.png',
    stars       :   2
});

db.skills.insert({
    title       :   'Robo3T',
    type        :   'DatabaseManagementSystems',
    image       :   'others/robo3t.png',
    stars       :   4
});

db.skills.insert({
    title       :   'Nginx',
    type        :   'ReverseProxy',
    image       :   'others/nginx.png',
    stars       :   3
});
