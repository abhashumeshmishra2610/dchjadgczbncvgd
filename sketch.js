var gameState = "storyTelling";
var score = 0;
var collections = 0;

function preload(){
  //Loading Image For The Game
  StoryBG = loadImage("hujk.png");
  GameLogo = loadImage("logo.png");

  //Images of StoryLine
  S1 = loadImage("story1.jpg");
  S2 = loadImage("story2.png");
  S3 = loadImage("story3.png");
  S4 = loadImage("story4.png");
  S5 = loadImage("story5.png");
  S6 = loadImage("story6.png");
  S7 = loadImage("story7.png");
  S8 = loadImage("story8.png");
  S9 = loadImage("story9.png");
  S10 = loadImage("story10.png");
  S11 = loadImage("story11.png");
  S12 = loadImage("story12.png");
  S13 = loadImage("story13.png");
  S14 = loadImage("story14.png");
  S15 = loadImage("story15.png");
  S16 = loadImage("story16.png");
  S17 = loadImage("story17.png");

  //Loading Images For Animation
  S91 = loadAnimation("story91.jpg","story92.jpg","story93.jpg","story94.jpg");
  S95 = loadImage("story95.png");
  GWolf2 = loadImage("motion4.png");
  GWolf3 = loadImage("motion1.png");

  //Loading Images For Wolf Running Animation
  GWolf = loadAnimation("motion1.png","motion2.png","motion3.png","motion4.png","motion5.png","motion6.png","motion7.png","motion8.png","motion9.png","motion10.png","motion11.png","motion12.png");

  //Loading Images For Coin Turning Animation
  COIN = loadAnimation("coin.png","coin copy.png","coin copy 4.png","coin copy 3.png","coin copy 2i.png","coin copy 2.png");

  //Loading Images For The Three Mysterious Magical Objects
  GodZomi2 = loadImage("God Zomi2.png"); 
  TheSword2 = loadImage("The Sword2.png");
  RedDiamond2 = loadImage("Red Diamond2.png");

  //Loading Images For Text which appears in game to inform us for every target
  MainText = loadImage("text1.png");
  MainText3 = loadImage("text3.png");
  MainText4 = loadImage("text4.png");
  MainTexti = loadImage("text.png");

  //Loading Images For Score Text
  SCORE = loadImage("score.png");

  //Loading Images For Lives
  //Live = Green,Excellent
  REFILE1 = loadImage("liveG.png");
  //Live = Yellow,Good
  REFILE3 = loadImage("liveY.png");
  //Live = Orange,fine
  REFILE5 = loadImage("liveO.png");
  //Live = Red.critical
  REFILE8 = loadImage("liveR.png");

  //Loading Images For Stones Text
  Gh = loadImage("GH.png");
  Fh = loadImage("fh.png");
  Eh = loadImage("t.png");
  Hh = loadImage("hh.png");
  Ii = loadImage("ii2.png");
  Ii2 = loadImage("ii.png");
  TEXTNO = loadImage("textno.1.png");

  //Loading Images For Mystery Boxes
  CoinBox = loadImage("Untitled99.png");

  //Loading Images For StoryLine Subtitles(English)
  Line1 = loadImage("line1.png");
  Line2 = loadImage("line2.png");
  Line3 = loadImage("line3.png");
  Line4 = loadImage("line4.png");
  Line5 = loadImage("line5.png");
  Line6 = loadImage("line6.png");
  Line7 = loadImage("line7.png");
  Line8 = loadImage("line8.png");
  Line9 = loadImage("line9.png");
  Line10 = loadImage("line10.png");
  Line11 = loadImage("line11.png");
  Line12 = loadImage("line12.png");
  Line13 = loadImage("line13.png");
  Line14 = loadImage("line14.png");
  Line15 = loadImage("line15.png");
  Line16 = loadImage("line16.png");
  Skip = loadImage("line18.png");

  //Loading Images For Zomi Land Portal
  ZomiPORTAL = loadImage("ZomiPortal4.png");
  ZomiPORTAL2 = loadImage("ZomiPortal.png");
  ZomiPORTAL3 = loadImage("ZomiPortali.png");

  //Loading Sounds For Effects and Background Music
  BGSound = loadSound("hiphop.mp3");
  BG2 = loadSound("bg.mp3");

  //Loading Sounds For StoryLine Voice(English)
  Sound1 = loadSound("so2.mp3");
  Sound2 = loadSound("so3.mp3");
  Sound3 = loadSound("so4.mp3");
  Sound4 = loadSound("so7.mp3");
  Sound5 = loadSound("so5.mp3");
  Sound6 = loadSound("so6.mp3");
  Sound7 = loadSound("so8.mp3");
  Sound8 = loadSound("so14.mp3");
  Sound9 = loadSound("so9.mp3");
  Sound10 = loadSound("so11.mp3");
  Sound11 = loadSound("so10.mp3");
  Sound12 = loadSound("so12.mp3");
  Sound13 = loadSound("so13.mp3");
  Sound14 = loadSound("so15.mp3");
  Sound15 = loadSound("so16.mp3");
  Sound16 = loadSound("so17.mp3");

  //Loading Images for Background
  BG3 = loadImage("e.jpg");
  BG4 = loadImage("303.jpg");

  //Loading Images For Text which appears in game to inform us for every target
  Text6 = loadImage("Text6.png");
  Text7 = loadImage("Text7.png");
  TEXT5 = loadImage("text5.png");

  //Loading Images For Destinations
  DESTINATION = loadImage("San.png");

  //Loading Images For Blast Animation
  Blast1 = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png");

  //Loading Images For Meteor Falls
  meteor = loadImage("meteor.png");

  //Loading Images For Surprising Three Boxes
  SURPRISE = loadImage("SURPRISE.png");
  surprise1 = loadImage("surprise1.png");
  surprise2 = loadImage("surprise2.png");
  surprise3 = loadImage("surprise3.png");

  //Loading Sounds For Blast Effect
  WY = loadSound("jklk.mpeg");
  WY2 = loadSound("audio1.mpeg");

  //Loading Images for Thunder Lightning Animation
  Thunder1 = loadAnimation("ghj.png","ghj2.png","ghj.png","ghj2.png");

  //Loading Images for God Of Thunder
  GOT = loadImage("ghjkl.png");
  Clouds = loadImage("ghjkl2.png");

  //Loading Images for opening Animation of messages
  message = loadAnimation("ty2.png","ty2.png","ty2.png","ty2.png","ty2.png");
  message6 = loadAnimation("ty.png","ty.png","ty.png","ty.png","ty.png");
  message2 = loadAnimation("A1.png","A2.png","A1.png","A2.png");
  message3 = loadImage("ty3.png");
  message5 = loadImage("ty2.png");

  //Loading Images for Zomi Land Safety Guards
  SafetyGuards = loadImage("hjk.png");

  //Loading Image For Hot Air Balloon
  HAB = loadImage("HAB.png");
} 

function setup() {
  //creating Canvas according to the Monitor Canvas
  createCanvas(windowWidth,windowHeight);

  //Music For Background
  BGSound.loop();
  
  //Creating Sprite For Background(Black)
  BG = createSprite(windowWidth,windowHeight);
  BG.addImage(StoryBG);
  BG.scale = 900;

  //Creating Sprite For Game Main Logo
  gameLogo = createSprite(displayHeight/2+290,displayWidth/2-280,width,50);
  gameLogo.addImage(GameLogo);
  gameLogo.scale = 1.1;

  //Creating Sprite For Gaming Background
  Bg = createSprite(width/2,height-660);
  Bg.addImage(BG3);
  Bg.scale = 1;
  Bg.visible = false; 
  Bg.velocityX = -20;

  //Creating Sprite For Zomi Land Background
  Bg2 = createSprite(width/1,height-500);
  Bg2.addImage(BG4);
  Bg2.scale = 0.500;
  Bg2.visible = false; 

  //Creating Sprites For StoryLine Appearings 
  line2 = createSprite(height/2+1300,width/2-280,10,90000);
  line2.velocityX = -22;
  line2.visible = false;

  l2 = createSprite(height/2-400,width/2-280,10,90000);
  l2.visible = false;

  line3 = createSprite(height/2+1300,width/2-280,10,90000);
  line3.velocityX = 0;
  line3.visible = false;

  l3 = createSprite(height/2-400,width/2-280,10,90000);
  l3.visible = false;

  line4 = createSprite(height/2+1300,width/2-280,10,90000);
  line4.velocityX = 0;
  line4.visible = false;

  l4 = createSprite(height/2-400,width/2-280,10,90000);
  l4.visible = false;

  line5 = createSprite(height/2+1300,width/2-280,10,90000);
  line5.velocityX = 0;
  line5.visible = false;

  l5 = createSprite(height/2-400,width/2-280,10,90000);
  l5.visible = false;

  line6 = createSprite(height/2+1300,width/2-280,10,90000);
  line6.velocityX = 0;
  line6.visible = false;

  l6 = createSprite(height/2-400,width/2-280,10,90000);
  l6.visible = false;

  line7 = createSprite(height/2+1300,width/2-280,10,90000);
  line7.velocityX = 0;
  line7.visible = false;

  l7 = createSprite(height/2-400,width/2-280,10,90000);
  l7.visible = false;

  line8 = createSprite(height/2+1300,width/2-280,10,90000);
  line8.velocityX = 0;
  line8.visible = false;

  l8 = createSprite(height/2-400,width/2-280,10,90000);
  l8.visible = false;

  line9 = createSprite(height/2+1300,width/2-280,10,90000);
  line9.velocityX = 0;
  line9.visible = false;

  l9 = createSprite(height/2-400,width/2-280,10,90000);
  l9.visible = false;

  line10 = createSprite(height/2+1300,width/2-280,10,90000);
  line10.velocityX = 0;
  line10.visible = false;

  l10 = createSprite(height/2-400,width/2-280,10,90000);
  l10.visible = false;
   
  line11 = createSprite(height/2+1300,width/2-280,10,90000);
  line11.velocityX = 0;
  line11.visible = false;

  l11 = createSprite(height/2-400,width/2-280,10,90000);
  l11.visible = false;

  line12 = createSprite(height/2+1300,width/2-280,10,90000);
  line12.velocityX = 0;
  line12.visible = false;

  l12 = createSprite(height/2-400,width/2-280,10,90000);
  l12.visible = false;

  line13 = createSprite(height/2+1300,width/2-280,10,90000);
  line13.velocityX = 0;
  line13.visible = false;

  l13 = createSprite(height/2-400,width/2-280,10,90000);
  l13.visible = false;

  line14 = createSprite(height/2+1300,width/2-280,10,90000);
  line14.velocityX = 0;
  line14.visible = false;

  l14 = createSprite(height/2-400,width/2-280,10,90000);
  l14.visible = false;

  line15 = createSprite(height/2+1300,width/2-280,10,90000);
  line15.velocityX = 0;
  line15.visible = false;

  l15 = createSprite(height/2-400,width/2-280,10,90000);
  l15.visible = false;

  line16 = createSprite(height/2+1300,width/2-280,10,90000);
  line16.velocityX = 0;
  line16.visible = false;

  l16 = createSprite(height/2-400,width/2-280,10,90000);
  l16.visible = false;

  line17 = createSprite(height/2+1300,width/2-280,10,90000);
  line17.velocityX = 0;
  line17.visible = false;

  l17 = createSprite(height/2-400,width/2-280,10,90000);
  l17.visible = false;

  line18 = createSprite(height/2+1300,width/2-280,10,90000);
  line18.velocityX = 0;
  line18.visible = false;

  l18 = createSprite(height/2-400,width/2-280,10,90000);
  l18.visible = false;

  line19 = createSprite(height/2+1300,width/2-280,10,90000);
  line19.velocityX = 0;
  line19.visible = false;

  l19 = createSprite(height/2-400,width/2-280,10,90000);
  l19.visible = false;

  line20 = createSprite(height/2+1300,width/2-280,10,90000);
  line20.velocityX = 0;
  line20.visible = false;

  l20 = createSprite(height/2-400,width/2-280,10,90000);
  l20.visible = false;

  line21 = createSprite(height/2+1300,width/2-280,10,90000);
  line21.velocityX = 0;
  line21.visible = false;

  l21 = createSprite(height/2-400,width/2-280,10,90000);
  l21.visible = false;

  line22 = createSprite(height/2+1300,width/2-280,10,90000);
  line22.velocityX = 0;
  line22.visible = false;

  l22 = createSprite(height/2-400,width/2-280,10,90000);
  l22.visible = false;

  line23 = createSprite(height/2+1300,width/2-280,10,90000);
  line23.velocityX = 0;
  line23.visible = false;

  l23 = createSprite(height/2-400,width/2-280,10,90000);
  l23.visible = false;

  line24 = createSprite(height/2+1300,width/2-280,10,90000);
  line24.velocityX = 0;
  line24.visible = false;

  l24 = createSprite(height/2-400,width/2-280,10,90000);
  l24.visible = false;

  line25 = createSprite(height/2+1300,width/2-280,10,90000);
  line25.velocityX = 0;
  line25.visible = false;

  l25 = createSprite(height/2-400,width/2-280,10,90000);
  l25.visible = false;

  line33 = createSprite(height/2+1300,width/2-280,10,90000);
  line33.velocityX = 0;
  line33.visible = false;

  l33 = createSprite(height/2-400,width/2-280,10,90000);
  l33.visible = false;



  //Creating Sprite For StoryLine Subtitles(English)
  LINE1 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE1.addImage(Line1);
  LINE1.scale = 0.5;
  LINE1.visible = false;

  LINE2 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE2.addImage(Line2);
  LINE2.scale = 0.5;
  LINE2.visible = false;

  LINE3 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE3.addImage(Line3);
  LINE3.scale = 0.5;
  LINE3.visible = false;

  LINE4 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE4.addImage(Line4);
  LINE4.scale = 0.5;
  LINE4.visible = false;

  LINE5 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE5.addImage(Line5);
  LINE5.scale = 0.5;
  LINE5.visible = false;

  LINE6 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE6.addImage(Line6);
  LINE6.scale = 0.5;
  LINE6.visible = false;

  LINE7 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE7.addImage(Line7);
  LINE7.scale = 0.5;
  LINE7.visible = false;

  LINE9 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE9.addImage(Line9);
  LINE9.scale = 0.5;
  LINE9.visible = false;

  LINE10 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE10.addImage(Line10);
  LINE10.scale = 0.5;
  LINE10.visible = false;

  LINE11 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE11.addImage(Line11);
  LINE11.scale = 0.5;
  LINE11.visible = false;

  LINE12 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE12.addImage(Line12);
  LINE12.scale = 0.5;
  LINE12.visible = false;

  LINE13 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE13.addImage(Line13);
  LINE13.scale = 0.5;
  LINE13.visible = false;

  LINE14 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE14.addImage(Line14);
  LINE14.scale = 0.5;
  LINE14.visible = false;
  
  LINE15 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE15.addImage(Line15);
  LINE15.scale = 0.5;
  LINE15.visible = false;

  LINE16 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE16.addImage(Line16);
  LINE16.scale = 0.5;
  LINE16.visible = false;



  
  //Creating Sprite For StoryLine Images
  ST1 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST1.addImage(S1);
  ST1.scale = 0.33;
  ST1.visible = false;

  ST2 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST2.addImage(S2);
  ST2.scale = 1.1;
  ST2.visible = false;

  ST3 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST3.addImage(S3);
  ST3.scale = 1.1;
  ST3.visible = false;

  ST4 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST4.addImage(S4);
  ST4.scale = 1.1;
  ST4.visible = false;

  ST5 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST5.addImage(S5);
  ST5.scale = 1.1;
  ST5.visible = false;

  ST6 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST6.addImage(S6);
  ST6.scale = 1.1;
  ST6.visible = false;

  LINE8 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE8.addImage(Line8);
  LINE8.scale = 0.5;
  LINE8.visible = false;

  ST7 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST7.addImage(S7);
  ST7.scale = 1.1;
  ST7.visible = false;

  ST8 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST8.addImage(S8);
  ST8.scale = 1.1;
  ST8.visible = false;

  ST9 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST9.addImage(S9);
  ST9.scale = 1.1;
  ST9.visible = false;

  ST10 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST10.addImage(S95);
  ST10.scale = 1.1;
  ST10.visible = false;

  ST11 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST11.addAnimation("Wolf Jumping",S91);
  ST11.scale = 0.2;
  ST11.visible = false;
  
  ST12 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST12.addImage(S10);
  ST12.scale = 1.1;
  ST12.visible = false;

  ST13 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST13.addImage(S11);
  ST13.scale = 1.1;
  ST13.visible = false;
 
  ST14 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST14.addImage(S12);
  ST14.scale = 1.1;
  ST14.visible = false;

  ST15 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST15.addImage(S13);
  ST15.scale = 1.1;
  ST15.visible = false;

  ST16 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST16.addImage(S14);
  ST16.scale = 1.1;
  ST16.visible = false;

  ST17 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST17.addImage(S15);
  ST17.scale = 1.1;
  ST17.visible = false;

  ST18 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST18.addImage(S16);
  ST18.scale = 1.1;
  ST18.visible = false;

  ST19 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST19.addImage(S17);
  ST19.scale = 1.1;
  ST19.visible = false;

  SKIP = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  SKIP.addImage(Skip);
  SKIP.scale = 0.7;

  //Creating Sprite For Wolf Animation
  GoodWolf = createSprite(displayHeight/2-180,displayWidth/2+20,width,50);
  GoodWolf.addAnimation("Running Good Wolf",GWolf);
  GoodWolf.addAnimation("Jumping Good Wolf",GWolf2);
  GoodWolf.addAnimation("Stopped Good Wolf",GWolf3);
  GoodWolf.scale = 1.4;
  GoodWolf.visible = false;

  //Creating Sprite For Ground with which Wolf collides and can't be able to go down
  invisibleGround = createSprite(displayWidth/2,displayHeight-40,width,125);
  invisibleGround.visible = false;

  MT = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT.addImage(MainText);
  MT.scale = 0.7;
  MT.visible = false;

  S = createSprite(displayWidth/2-630,displayHeight-860,width,125);
  S.addImage(SCORE);
  S.scale = 0.1;
  S.visible = false;

  GZ = createSprite(displayWidth/2-590,displayHeight-800,width,125);
  GZ.addImage(MainText3);
  GZ.scale = 0.5;
  GZ.visible = false;

  TS = createSprite(displayWidth/2-603,displayHeight-730,width,125);
  TS.addImage(MainText4);
  TS.scale = 0.4;
  TS.visible = false;

  RD = createSprite(displayWidth/2-603,displayHeight-655,width,125);
  RD.addImage(MainTexti);
  RD.scale = 0.4;
  RD.visible = false;

  GZi = createSprite(displayWidth/2-590,displayHeight-800,width,125);
  GZi.addImage(MainText3);
  GZi.scale = 0.5;
  GZi.visible = false;

  TSi = createSprite(displayWidth/2-603,displayHeight-730,width,125);
  TSi.addImage(MainText4);
  TSi.scale = 0.4;
  TSi.visible = false;

  RDi = createSprite(displayWidth/2-603,displayHeight-655,width,125);
  RDi.addImage(MainTexti);
  RDi.scale = 0.4;
  RDi.visible = false;


  //Creating Sprite For Wolf Lives 
  //Creating Sprite For Green Lives
  Refile = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refile.addImage(REFILE1);
  Refile.scale = 0.5;
  Refile.visible = false;

  Refile2 = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2.addImage(REFILE1);
  Refile2.scale = 0.5;
  Refile2.visible = false;


  //Creating Sprite For Yellow Lives
  Refile3 = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3.addImage(REFILE3);
  Refile3.scale = 0.5;
  Refile3.visible = false;

  Refile4 = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4.addImage(REFILE3);
  Refile4.scale = 0.5;
  Refile4.visible = false;


  //Creating Sprite For Orange Lives
  Refile5 = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5.addImage(REFILE5);
  Refile5.scale = 0.5;
  Refile5.visible = false;

  Refile6 = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6.addImage(REFILE5);
  Refile6.scale = 0.5;
  Refile6.visible = false;


  //Creating Sprite For Red Lives
  Refile7 = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7.addImage(REFILE8);
  Refile7.scale = 0.5;
  Refile7.visible = false;

  Refile8 = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8.addImage(REFILE8);
  Refile8.scale = 0.5;
  Refile8.visible = false;


  //Creating Sprite For Wolf Lives For Zomi Land
  //Creating Sprite For Green Lives
  Refilei = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refilei.addImage(REFILE1);
  Refilei.scale = 0.5;
  Refilei.visible = false;

  Refile2i = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2i.addImage(REFILE1);
  Refile2i.scale = 0.5;
  Refile2i.visible = false;


  //Creating Sprite For Yellow Lives
  Refile3i = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3i.addImage(REFILE3);
  Refile3i.scale = 0.5;
  Refile3i.visible = false;

  Refile4i = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4i.addImage(REFILE3);
  Refile4i.scale = 0.5;
  Refile4i.visible = false;


  //Creating Sprite For Orange Lives
  Refile5i = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5i.addImage(REFILE5);
  Refile5i.scale = 0.5;
  Refile5i.visible = false;

  Refile6i = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6i.addImage(REFILE5);
  Refile6i.scale = 0.5;
  Refile6i.visible = false;


  //Creating Sprite For Red Lives
  Refile7i = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7i.addImage(REFILE8);
  Refile7i.scale = 0.5;
  Refile7i.visible = false;

  Refile8i = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8i.addImage(REFILE8);
  Refile8i.scale = 0.5;
  Refile8i.visible = false;


  GZ2 = createSprite(displayWidth/2-455,displayHeight-800,width,125);
  GZ2.addImage(GodZomi2);
  GZ2.scale = 0.3;
  GZ2.visible = false;

  TS2 = createSprite(displayWidth/2-485,displayHeight-730,width,125);
  TS2.addImage(TheSword2);
  TS2.scale = -0.27;
  TS2.visible = false;

  RD2 = createSprite(displayWidth/2-470,displayHeight-655,width,125);
  RD2.addImage(RedDiamond2);
  RD2.scale = 0.2;
  RD2.visible = false;

  GZ2i = createSprite(displayWidth/2-455,displayHeight-800,width,125);
  GZ2i.addImage(GodZomi2);
  GZ2i.scale = 0.3;
  GZ2i.visible = false;

  TS2i = createSprite(displayWidth/2-485,displayHeight-730,width,125);
  TS2i.addImage(TheSword2);
  TS2i.scale = -0.27;
  TS2i.visible = false;

  RD2i = createSprite(displayWidth/2-470,displayHeight-655,width,125);
  RD2i.addImage(RedDiamond2);
  RD2i.scale = 0.2;
  RD2i.visible = false;

  line26 = createSprite(height/2+1300,width/2-280,10,90000);
  line26.velocityX = 0;
  line26.visible = false;

  l26 = createSprite(height/2-400,width/2-280,10,90000);
  l26.visible = false;

  line27 = createSprite(height/2+1300,width/2-280,10,90000);
  line27.velocityX = 0;
  line27.visible = false;

  l27 = createSprite(height/2-400,width/2-280,10,90000);
  l27.visible = false;

  line28 = createSprite(height/2+1300,width/2-280,10,90000);
  line28.velocityX = 0;
  line28.visible = false;

  l28 = createSprite(height/2-400,width/2-280,10,90000);
  l28.visible = false;

  line29 = createSprite(height/2+1300,width/2-280,10,90000);
  line29.velocityX = 0;
  line29.visible = false;

  l29 = createSprite(height/2-400,width/2-280,10,90000);
  l29.visible = false;

  line31 = createSprite(height/2+1300,width/2-280,10,90000);
  line31.velocityX = 0;
  line31.visible = false;

  l31 = createSprite(height/2-400,width/2-280,10,90000);
  l31.visible = false;

  line34 = createSprite(height/2+1300,width/2-280,10,90000);
  line34.velocityX = 0;
  line34.visible = false;

  l34 = createSprite(height/2-400,width/2-280,10,90000);
  l34.visible = false;

  CoinsGroup = new Group();
  CoinBOXGroup = new Group();
  CoinBOX2Group = new Group();
  AlertGroup = new Group();
  Alert2Group = new Group();

  GH = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  GH.addImage(Gh);
  GH.scale = 0.4;
  GH.visible = false;

  FH = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  FH.addImage(Fh);
  FH.scale = 0.4;
  FH.visible = false;

  FH2 = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  FH2.addImage(Eh);
  FH2.scale = 0.4;
  FH2.visible = false;

  EH = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  EH.addImage(Eh);
  EH.scale = 0.4;
  EH.visible = false;

  HH = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  HH.addImage(Hh);
  HH.scale = 0.4;
  HH.visible = false;

  line30 = createSprite(displayHeight/2+49330,displayWidth/2-280,10,90000);
  line30.velocityX = 0;
  line30.visible = false;

  line30i = createSprite(displayHeight/2+47000,displayWidth/2-280,10,90000);
  line30i.velocityX = 0;
  line30i.visible = false;

  ZP = createSprite(displayHeight/2+50000,displayWidth/2-280,width,50);
  ZP.addImage(ZomiPORTAL);   
  ZP.velocityX = 0;
  ZP.scale = 0.78;

  ZP2 = createSprite(displayHeight/2+50600,displayWidth/2-260,width,50);
  ZP2.addImage(ZomiPORTAL2);   
  ZP2.velocityX = -20;
  ZP2.visible = false;
  ZP2.scale = 0.22;

  ZP3 = createSprite(displayHeight/2+50050,displayWidth/2+22,width,50);
  ZP3.addImage(ZomiPORTAL3);   
  ZP3.velocityX = -20;
  ZP3.visible = false;
  ZP3.scale = 0.22;

  ZP4 = createSprite(displayHeight/2-50100,displayWidth/2+22,width,50);
  ZP4.addImage(ZomiPORTAL3);   
  ZP4.velocityX = -20;
  ZP4.visible = false;
  ZP4.scale = 0.22;

  ZP5 = createSprite(displayHeight/2-50250,displayWidth/2+22,width,50);
  ZP5.addImage(ZomiPORTAL3);   
  ZP5.velocityX = -20;
  ZP5.visible = false;
  ZP5.scale = 0.22;

  ZP6 = createSprite(displayHeight/2-50300,displayWidth/2+22,width,50);
  ZP6.addImage(ZomiPORTAL3);   
  ZP6.velocityX = -20;
  ZP6.visible = false;
  ZP6.scale = 0.22;

  GZ3 = createSprite(displayWidth/2+50100,displayHeight-250,width,125);
  GZ3.addImage(GodZomi2);
  GZ3.velocityX = 0;
  GZ3.scale = 0.3;
  GZ3.visible = false;

  II = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  II.addImage(Ii);
  II.scale = 0.4;
  II.visible = false;

  MT2 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT2.addImage(Text6);
  MT2.scale = 0.5;
  MT2.visible = false;

  MT3 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT3.addImage(Text7);
  MT3.scale = 0.5;
  MT3.visible = false;

  DEST = createSprite(displayWidth/2-530,displayHeight-765,width,125);
  DEST.addImage(DESTINATION);
  DEST.scale = 0.4;
  DEST.visible = false;

  //push();
  Meteor = createSprite(displayHeight/2+1000,displayWidth/2-1000,width,50);
  Meteor.addImage(meteor);
  Meteor.scale = 0.2;
  Meteor.velocityX = 0;
  Meteor.velocityY = 0;
  Meteor.depth = Refile.depth+1;
  Meteor.depth = Refile2.depth+1;
  Meteor.depth = Refile3.depth+1;
  Meteor.depth = Refile4.depth+1;
  Meteor.depth = Refile5.depth+1;
  Meteor.depth = Refile6.depth+1;
  Meteor.depth = Refile7.depth+1;
  Meteor.depth = Refile8.depth+1;
  Meteor.depth = GH.depth + 1;
  Meteor.depth = FH.depth + 1;
  Meteor.depth = EH.depth + 1;
  Meteor.depth = HH.depth + 1;
  Meteor.depth = GZ.depth + 1;
  Meteor.depth = TS.depth + 1;
  Meteor.depth = RD.depth + 1;
  Meteor.depth = GZ2.depth + 1;
  Meteor.depth = TS2.depth + 1;
  Meteor.depth = RD2.depth + 1;
  Meteor.depth = FH2.depth + 1;
  Meteor.depth = II.depth + 1;
  Meteor.depth = ZP.depth + 1;
  //pop();

  //push();
  BLAST2 = createSprite(displayHeight/2+400,displayWidth/2-30,width,50);
  BLAST2.addAnimation("blast",Blast1);
  BLAST2.scale = 10;
  BLAST2.visible = false;
  BLAST2.depth = Meteor.depth+1;
  BLAST2.depth = GH.depth + 1;
  BLAST2.depth = FH.depth + 1;
  BLAST2.depth = EH.depth + 1;
  BLAST2.depth = HH.depth + 1;
  BLAST2.depth = GZ.depth + 1;
  BLAST2.depth = TS.depth + 1;
  BLAST2.depth = RD.depth + 1;
  BLAST2.depth = GZ2.depth + 1;
  BLAST2.depth = TS2.depth + 1;
  BLAST2.depth = RD2.depth + 1;
  BLAST2.depth = FH2.depth + 1;
  BLAST2.depth = II.depth + 1;
  BLAST2.depth = ZP.depth + 1;
  //pop();
  
  Thunder = createSprite(displayWidth/2+20,displayHeight/2-10,width,50);
  Thunder.addAnimation("Thunder Lightning",Thunder1);
  Thunder.velocityX = 0;
  Thunder.scale = 0.2;
  Thunder.visible = false;

  line302 = createSprite(displayHeight/2+400,displayWidth/2-280,10,90000);
  line302.velocityX = 0;
  line302.visible = false;

  line303 = createSprite(displayHeight/2+4000,displayWidth/2-280,10,90000);
  line303.velocityX = 0;
  line303.visible = false;

  line3p2 = createSprite(displayHeight/2-1220,displayWidth/2-480,width,50);
  line3p2.addImage(Clouds);
  line3p2.scale = 0.4;
  line3p2.velocityX = 0;
  line3p2.visible = true;
  
  line3p3 = createSprite(displayHeight/2-1420,displayWidth/2-460,width,50);
  line3p3.addImage(Clouds);
  line3p3.scale = 0.3;
  line3p3.velocityX = 0;
  line3p3.visible = true;

  line3p = createSprite(displayHeight/2-1300,displayWidth/2-550,width,50);
  line3p.addImage(GOT);
  line3p.scale = 0.15;
  line3p.velocityX = 0;
  line3p.visible = true;

  Message = createSprite(displayHeight/2+200,displayWidth/2-550,width,50);
  Message.addAnimation("Message",message);
  Message.scale = 0.4;
  Message.visible = false;

  Meteor2 = createSprite(displayHeight/2+1000,displayWidth/2-1000,width,50);
  Meteor2.addImage(meteor);
  Meteor2.scale = 0.2;
  Meteor2.velocityX = 0;
  Meteor2.velocityY = 0;

  Meteor3 = createSprite(displayHeight/2+700,displayWidth/2-1000,width,50);
  Meteor3.addImage(meteor);
  Meteor3.scale = 0.2;
  Meteor3.velocityX = 0;
  Meteor3.velocityY = 0;

  Meteor4 = createSprite(displayHeight/2+400,displayWidth/2-1000,width,50);
  Meteor4.addImage(meteor);
  Meteor4.scale = 0.2;
  Meteor4.velocityX = 0;
  Meteor4.velocityY = 0;

  BLAST3 = createSprite(displayHeight/2+500,displayWidth/2-30,width,50);
  BLAST3.addAnimation("blast",Blast1);
  BLAST3.scale = 60;
  BLAST3.visible = false;BLAST2.depth = Meteor.depth+1;
  BLAST3.depth = GH.depth + 1;
  BLAST3.depth = FH.depth + 1;
  BLAST3.depth = EH.depth + 1;
  BLAST3.depth = HH.depth + 1;
  BLAST3.depth = GZ.depth + 1;
  BLAST3.depth = TS.depth + 1;
  BLAST3.depth = RD.depth + 1;
  BLAST3.depth = GZ2.depth + 1;
  BLAST3.depth = TS2.depth + 1;
  BLAST3.depth = RD2.depth + 1;
  BLAST3.depth = FH2.depth + 1;
  BLAST3.depth = II.depth + 1;
  BLAST3.depth = ZP.depth + 1;

  HotAirBalloons = createSprite(displayWidth/2+3500,displayHeight/2-300,width,50);
  HotAirBalloons.addImage(HAB);
  HotAirBalloons.scale = 0.15;
  HotAirBalloons.visible = true;

  Message4 = createSprite(displayHeight/2+3800,displayWidth/2-400,width,50);
  Message4.addImage(message3);
  Message4.scale = 0.1;
  Message4.visible = true;

  line305 = createSprite(displayHeight/2+400,displayWidth/2-600,90000,10);
  line305.velocityX = 0;
  line305.visible = false;

  line100 = createSprite(height/2+1300,width/2-280,10,90000);
  line100.velocityX = 0;
  line100.visible = false;

  l100 = createSprite(height/2-400,width/2-280,10,90000);
  l100.visible = false;

  line101 = createSprite(height/2+1300,width/2-280,10,90000);
  line101.velocityX = 0;
  line101.visible = false;

  l101 = createSprite(height/2-400,width/2-280,10,90000);
  l101.visible = false;

  surprisebox = createSprite(displayHeight/2+10,displayWidth/2-500,width,50);
  surprisebox.addImage(SURPRISE);
  surprisebox.scale = 0.15;
  surprisebox.visible = false;

  surprisebox2 = createSprite(displayHeight/2+195,displayWidth/2-500,width,50);
  surprisebox2.addImage(SURPRISE);
  surprisebox2.scale = 0.15;
  surprisebox2.visible = false;

  surprisebox3 = createSprite(displayHeight/2+380,displayWidth/2-500,width,50);
  surprisebox3.addImage(SURPRISE);
  surprisebox3.scale = 0.15;
  surprisebox3.visible = false;

  Message7 = createSprite(displayHeight/2+200,displayWidth/2-550,width,50);
  Message7.addAnimation("Message",message6);
  Message7.scale = 0.4;
  Message7.visible = false;

  line306 = createSprite(displayHeight/2+400,displayWidth/2-350,90000,10);
  line306.velocityX = 0;
  line306.visible = false;

  line102 = createSprite(height/2+1300,width/2-280,10,90000);
  line102.velocityX = 0;
  line102.visible = false;

  l102 = createSprite(height/2-400,width/2-280,10,90000);
  l102.visible = false;

  line103 = createSprite(height/2+1300,width/2-280,10,90000);
  line103.velocityX = 0;
  line103.visible = false;

  l103 = createSprite(height/2-400,width/2-280,10,90000);
  l103.visible = false;

  Text1 = createSprite(displayHeight/2+195,displayWidth/2-650,width,50);
  Text1.addImage(TEXTNO);
  Text1.scale = 0.6;
  Text1.visible = false;

  sno1 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno1.addImage(surprise1);
  sno1.scale = 0.6;
  sno1.visible = false;

  sno2 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno2.addImage(surprise2);
  sno2.scale = 0.6;
  sno2.visible = false;

  sno3 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno3.addImage(surprise3);
  sno3.scale = 0.6;
  sno3.visible = false;

  line104 = createSprite(height/2+1300,width/2-280,10,90000);
  line104.velocityX = 0;
  line104.visible = false;

  l104 = createSprite(height/2-400,width/2-280,10,90000);
  l104.visible = false;
}

function draw() {  
  background(0);

if(gameState === "storyTelling"){
  if(line2.isTouching(l2)){
    gameLogo.destroy();
    LINE1.visible = true;
    SKIP.velocityX = -50000;
    Sound1.play();
    line3.velocityX = -6;
    line2.destroy();
    l2.destroy();
 }

 if(line3.isTouching(l3)){
    Sound1.stop();
    LINE2.visible = true;
    LINE1.destroy();
    Sound2.play();
    line4.velocityX = -10;
    line3.destroy();
    l3.destroy();
 }

 if(line4.isTouching(l4)){
    LINE3.visible = true;
    Sound2.stop();
    ST1.visible = true;
    LINE2.destroy();
    Sound3.play();
    line5.velocityX = -9;
    line4.destroy();
    l4.destroy();
 }

 if(line5.isTouching(l5)){
    ST1.destroy();
    LINE3.destroy();
    ST2.visible = true;
    LINE4.visible = true;
    line6.velocityX = -9;
    Sound4.play();
    line5.destroy();
    l5.destroy();
 }

 if(line6.isTouching(l6)){
    ST2.destroy();
    Sound4.stop();
    LINE4.destroy();
    LINE5.visible = true;
    ST3.visible = true;
    line6.destroy();
    line7.velocityX = -5;
    l6.destroy();
    Sound5.play();
 }

 if(line7.isTouching(l7)){
    LINE5.destroy();
    ST3.destroy();
    LINE6.visible = true;
    ST4.visible = true;
    line7.destroy();
    l7.destroy();
    line8.velocityX = -6;
    Sound5.stop();
    Sound6.play();
 }

 if(line8.isTouching(l8)){
   line8.destroy();
   l8.destroy();
   Sound6.stop();
   LINE6.destroy();
   ST4.destroy();
   LINE7.visible = true;
   ST5.visible = true;
   BGSound.stop();
   line9.velocityX = -10;
   BG2.loop();
   Sound7.play();
 }

 if(line9.isTouching(l9)){
   line9.destroy();
   l9.destroy();
   LINE7.destroy();
   ST5.destroy();
   LINE8.visible = true;
   ST6.visible = true;
   line10.velocityX = -10;
   Sound7.stop();
   Sound8.play();
 }

 if(line10.isTouching(l10)){
   line10.destroy();
   l10.destroy();
   LINE9.visible = true;
   ST7.visible = true;
   LINE8.destroy();
   ST6.destroy();
   line11.velocityX = -9;
   Sound8.stop();
   Sound9.play();
 }
    
 if(line11.isTouching(l11)){
   line11.destroy();
   l11.destroy();
   LINE9.destroy();
   Sound9.stop();
   line12.velocityX = -9;
   Sound10.play();
   LINE10.visible = true;
 }

 if(line12.isTouching(l12)){
   line12.destroy();
   l12.destroy();
   ST7.destroy();
   LINE10.destroy();
   ST8.visible = true;
   line13.velocityX = -9;
   LINE11.visible = true;
   Sound11.play();
   Sound10.stop();
 }
   
 if(line13.isTouching(l13)){
   line13.destroy();
   l13.destroy();
   ST8.destroy();
   LINE11.destroy();
   LINE12.visible = true;
   line14.velocityX = -16;
   ST9.visible = true;
   Sound11.stop();
   Sound12.play();
 }

 if(line14.isTouching(l14)){
   line14.destroy();
   l14.destroy();
   ST9.destroy();
   LINE12.destroy();
   ST10.visible = true;
   LINE13.visible = true;
   line15.velocityX = -12;
   Sound12.stop();
   Sound13.play();
 }

 if(line15.isTouching(l15)){
   line15.destroy();
   l15.destroy();
   ST10.destroy();
   LINE13.destroy();
   line16.velocityX = -12;
   ST11.visible = true;
 }
 
 if(line16.isTouching(l16)){
   line16.destroy();
   l16.destroy();
   ST11.destroy();
   ST12.visible = true;
   line17.velocityX = -13;
   LINE14.visible = true;
   Sound14.play();
 }

 if(line17.isTouching(l17)){
   line17.destroy();
   l17.destroy();
   LINE14.destroy();
   LINE15.visible = true;
   line18.velocityX = -13;
   Sound14.stop();
   Sound15.play();
 }

 if(line18.isTouching(l18)){
    line18.destroy();
    l18.destroy();
    LINE15.destroy();
    ST12.destroy();
    LINE16.visible = true;
    line19.velocityX = -13;
    ST13.visible = true;
    Sound15.stop();
    Sound16.play();
 }
   
 if(line19.isTouching(l19)){
   line19.destroy();
   l19.destroy();
   ST14.visible = true;
   ST13.destroy();
   line20.velocityX = -30;
   LINE16.destroy();
 }

 if(line20.isTouching(l20)){
    line20.destroy();
    l20.destroy();
    ST14.destroy();
    line21.velocityX = -30;
    ST15.visible = true;
 }

 if(line21.isTouching(l21)){
   line21.destroy();
   l21.destroy();
   ST15.destroy();
   line22.velocityX = -30;
   ST16.visible = true;
 }

 if(line22.isTouching(l22)){
   line22.destroy();
   l22.destroy();
   ST16.destroy();
   line23.velocityX = -30;
   ST17.visible = true;
 }

 if(line23.isTouching(l23)){
   line23.destroy();
   l23.destroy();
   ST17.destroy();
   line24.velocityX = -30;
   ST18.visible = true;
 }

 if(line24.isTouching(l24)){
   line24.destroy();
   l24.destroy();
   ST18.destroy();
   line25.velocityX = -30;
   ST19.visible = true;
 }

 if(line25.isTouching(l25)){
  line25.destroy();
  l25.destroy();
  line26.velocityX = -15;
  ST19.destroy();
  Message4.velocityX = -20;
  HotAirBalloons.velocityX = -20;
  GZ3.velocityX = -20;
  ZP.velocityX = -20;
  MT.visible = true;
  line303.velocityX = -20;
  line30.velocityX = -20;
  line30i.velocityX = -20;
  gameState = "level1";
}

if(mousePressedOver(SKIP)){
  gameState = "level1";
  BGSound.stop();
  line303.velocityX = -20;
  Message4.velocityX = -20;
  HotAirBalloons.velocityX = -20;
  line26.velocityX = -15;
  line30.velocityX = -20;
  GZ3.velocityX = -20;
  line30i.velocityX = -20;
  ZP.velocityX = -20;
  MT.visible = true;
  gameLogo.destroy();
  SKIP.destroy();
  LINE1.destroy();
  LINE2.destroy();
  LINE3.destroy();
  LINE4.destroy();
  LINE5.destroy();
  LINE6.destroy();
  LINE7.destroy();
  LINE8.destroy();
  LINE9.destroy();
  LINE10.destroy();
  LINE11.destroy();
  LINE12.destroy();
  LINE13.destroy();
  LINE14.destroy();
  LINE15.destroy();
  LINE16.destroy();

  ST1.destroy();
  ST2.destroy();
  ST3.destroy();
  ST4.destroy();
  ST5.destroy();
  ST6.destroy();
  ST7.destroy();
  ST8.destroy();
  ST9.destroy();
  ST10.destroy();
  ST11.destroy();
  ST12.destroy();
  ST13.destroy();
  ST14.destroy();
  ST15.destroy();
  ST16.destroy();
  ST17.destroy();
  ST18.destroy();
  ST19.destroy();

}



}
  

if(gameState === "level1"){
   GoodWolf.visible = true;
   //Coin.velocityX = -20;
   Bg.visible = true; 
   Refile.visible = true;
   Refile2.visible = true;
   Refile3.visible = true;
   Refile4.visible = true;
   Refile5.visible = true;
   Refile6.visible = true;
   Refile7.visible = true;
   Refile8.visible = true;
   GZ2.visible = true;
   GZ.visible = true;
   TS2.visible = true;
   TS.visible = true;
   RD2.visible = true;
   RD.visible = true;
   S.visible = true;
   if(Bg.x<0){
      Bg.x = width/2+300;
   }

   if(keyWentDown("space")&& GoodWolf.y >= 100) {
    GoodWolf.changeAnimation("Jumping Good Wolf",GWolf2);
    GoodWolf.velocityY = -12; 
  } 

  if(keyWentUp("space")){
     GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  }

  GoodWolf.velocityY = GoodWolf.velocityY + 0.8;

  spawnCoins();
  spawnCoinBox();
  spawnCoinBox2();
  spawnAlert();
  spawnAlert2();

}

  

  if(CoinsGroup.isTouching(GoodWolf)){
     CoinsGroup.destroyEach();
     score = score+5;
  }

  if(CoinBOXGroup.isTouching(GoodWolf)){
    CoinBOXGroup.destroyEach();
    score = score+500;
 }

 if(CoinBOX2Group.isTouching(GoodWolf)){
  CoinBOX2Group.destroyEach();
  score = score+500;
}

  

GoodWolf.collide(invisibleGround);
drawSprites();

 fill("White"); 
 strokeWeight(1);
 stroke("White");
 textSize(33);
 text(" "+score,displayWidth/2-555,displayHeight/2-398);


if(line26.isTouching(l26)){
  line26.destroy();
  l26.destroy();
  MT.destroy();
  line27.velocityX = -20;
}

if(line27.isTouching(l27)){
  line27.destroy();
  l27.destroy();
  GH.visible = true;
  line28.velocityX = -20;
}

if(line28.isTouching(l28)){
  line28.destroy();
  line29.velocityX = -9;
  l28.destroy();
  FH.visible = true;
}

if(line29.isTouching(l29)){
  line29.destroy();
  l29.destroy();
  GH.destroy();
  line31.velocityX = -5;
  FH2.visible = true;
  FH.destroy();
  II.visible = true;
}

if(line31.isTouching(l31)){
  line31.destroy();
  l31.destroy();
  FH2.destroy();
  II.destroy();
  EH.visible = true;
  HH.visible = true;
}

if(GoodWolf.isTouching(AlertGroup)){
   AlertGroup.destroyEach();
   Meteor.velocityX = -35;
   Meteor.velocityY = 35;
}

if(Meteor.isTouching(invisibleGround)){
   WY.play();
   Meteor.destroy();
   BLAST2.visible = true;
   BLAST2.velocityX = -20;
   Refile.destroy();
   Refile2.destroy();
   Refile3.destroy();
   Refile4.destroy();
}

if(GoodWolf.isTouching(line30i)){
  DEST.visible = true;
  GZ.destroy();
  GZ2.destroy();
  TS.destroy();
  TS2.destroy();
  RD.destroy();
  RD2.destroy();
  Refile.destroy();
  Refile2.destroy();
  Refile3.destroy();
  Refile4.destroy();
  Refile5.destroy();
  Refile6.destroy();
  Refile7.destroy();
  Refile8.destroy();
  GH.destroy();
  FH.destroy();
  EH.destroy();
  HH.destroy();
  II.destroy();
  FH2.destroy();
  CoinBOXGroup.destroyEach();
  CoinsGroup.destroyEach();
  CoinBOX2Group.destroyEach();
  AlertGroup.destroyEach();
}


if(GoodWolf.isTouching(line30)){
   gameState = "Portal1";
   Bg.velocityX = 0;
   ZP.velocityX = 0;
   GZ3.velocityX = 0;
   line33.velocityX = -10;
   GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
   GoodWolf.velocityX = 0;
   GoodWolf.velocityY = 0;
   MT2.visible = true;
   MT2.depth = ZP.depth + 1;
   GZ.destroy();
   GZ2.destroy();
   TS.destroy();
   TS2.destroy();
   RD.destroy();
   RD2.destroy();
   Refile.destroy();
   Refile2.destroy();
   Refile3.destroy();
   Refile4.destroy();
   Refile5.destroy();
   Refile6.destroy();
   Refile7.destroy();
   Refile8.destroy();
   GH.destroy();
   FH.destroy();
   EH.destroy();
   HH.destroy();
   II.destroy();
   FH2.destroy();
   CoinBOXGroup.destroyEach();
   CoinsGroup.destroyEach();
   CoinBOX2Group.destroyEach();
   AlertGroup.destroyEach();
}

if(line33.isTouching(l33)){
   line33.destroy();
   l33.destroy();
   MT2.destroy();
   line34.velocityX = -12;
   MT3.visible = true;
   MT3.depth = ZP.depth + 1;
}

if(line34.isTouching(l34)){
  line34.destroy();
  l34.destroy();
  MT3.destroy();
  GoodWolf.velocityX = 20;
  GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  GoodWolf.depth = ZP.depth+1;
}

if(GoodWolf.isTouching(Alert2Group)){
   Alert2Group.destroyEach();
   Refile.destroy();
}

//if(line303.isTouching(GoodWolf)){
   //line303.destroy();
   //line3p.velocityX = 20;
   //line3p2.velocityX = 20;
   //line3p3.velocityX = 20;
//}


if(HotAirBalloons.isTouching(line302)){
   Message4.scale = 0.2;
   Message4.velocityX = 0;
   Message4.velocityY = 8;
}

if(Message4.isTouching(invisibleGround)){
   Message4.velocityX = -20;
   Message4.velocityY = 0;
}

if(Message4.isTouching(GoodWolf)){
   Message4.scale = -0.2;
   Message4.velocityX = 5.1;
   Message4.velocityY = -15;
}

if(line3p.isTouching(line302)){
   line302.destroy();
   Thunder.visible = true;
   line3p.velocityX = 0;
   line3p2.velocityX = 0;
   line3p3.velocityX = 0;
}

if(Message4.isTouching(line305)){
   line305.destroy();
   Message4.destroy();
   Message.visible = true;
   line100.velocityX = -80;
}

if(line100.isTouching(l100)){
   line100.destroy();
   l100.destroy();
   Message.visible = false;
   line101.velocityX = -4;
   Message7.visible = true;
}

if(line101.isTouching(l101)){
  line101.destroy();
  l101.destroy();
  surprisebox.visible = true;
  surprisebox2.visible = true;
  surprisebox3.visible = true;
  surprisebox.velocityY = 80;
  surprisebox2.velocityY = 80;
  surprisebox3.velocityY = 80;
}

if(surprisebox.isTouching(line306)){
  line306.destroy();
  surprisebox.velocityX = 0;
  surprisebox2.velocityX = 0;
  surprisebox3.velocityX = 0;
  surprisebox.velocityY = 0;
  surprisebox2.velocityY = 0;
  surprisebox3.velocityY = 0;
  line102.velocityX = -12;
}

if(line102.isTouching(l102)){
  line102.destroy();
  l102.destroy();
  Message7.destroy();
  Message.visible = true;
  line103.velocityX = -80;
}

if(line103.isTouching(l103)){
  line103.destroy();
  l103.destroy();
  Message.destroy();
  surprisebox.y = displayHeight/2-300;
  surprisebox2.y = displayHeight/2-300;
  surprisebox3.y = displayHeight/2-300;
  Text1.visible = true;
}

if(mousePressedOver(surprisebox)){
   sno1.visible = true;
   Message.destroy();
   Message7.destroy();
   sno2.destroy();
   sno3.destroy();
   surprisebox.velocityX = 1000000;
   surprisebox2.velocityX = 1000000;
   surprisebox3.velocityX = 1000000;
   line104.velocityX = -12;
   Text1.destroy();
   Meteor2.velocityX = -35;
   Meteor2.velocityY = 35;

   Meteor3.velocityX = -35;
   Meteor3.velocityY = 35;

   Meteor4.velocityX = -35;
   Meteor4.velocityY = 35;
}

if(Meteor2.isTouching(invisibleGround)){
  Meteor2.destroy();
  Meteor3.destroy();
  Meteor4.destroy();
  BLAST3.visible = true;
  BLAST3.velocityX = -20;
  Refile.destroy();
  Refile2.destroy();
  Refile3.destroy();
  Refile4.destroy();
  Refile5.destroy();
  Refile6.destroy();
  Refile7.destroy();
  Refile8.destroy();
  WY.play();
  WY2.play();
} 

if(mousePressedOver(surprisebox2)){
  sno1.destroy();
  sno2.visible = true;
  sno3.destroy();
  Message.destroy();
  Message7.destroy();
  line104.velocityX = -12;
  surprisebox.velocityX = 1000000;
  surprisebox2.velocityX = 1000000;
  surprisebox3.velocityX = 1000000;
  Text1.destroy();
}

if(mousePressedOver(surprisebox3)){
  sno1.destroy();
  sno2.destroy();
  sno3.visible = true;
  Message.destroy();
  Message7.destroy();
  line104.velocityX = -12;
  score = score+2500;
  surprisebox.velocityX = 1000000;
  surprisebox2.velocityX = 1000000;
  surprisebox3.velocityX = 1000000;
  Text1.destroy();
}

if(line104.isTouching(l104)){
   line104.destroy();
   l104.destroy();
   sno1.destroy();
   sno2.destroy();
   sno3.destroy();
}


if(gameState === "Portal1"){
   Bg2.velocityX = -20;
   GoodWolf.y = displayWidth/2+20;
   if(Bg2.x<0){
    Bg2.x = width/2+300;
 }
   if(keyWentDown("space")){
      GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
      GoodWolf.velocityY = 0;
   }

   if(keyWentUp("space")){
      GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
  }

}
  
if(GoodWolf.isTouching(GZ3)){
  gameState = "ZomiLand";
  GoodWolf.x = displayHeight/2-180;
  GoodWolf.velocityX = 0;
  //GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  Bg2.visible = true;
  Bg.destroy();
  ZP.destroy();
  GZ3.destroy();
  DEST.destroy();
}

if(gameState === "ZomiLand"){
  Bg2.velocityX = -20;
  if(Bg2.x<0){
   Bg2.x = width/2+300;
}
   Refilei.visible = true;
   Refile2i.visible = true;
   Refile3i.visible = true;
   Refile4i.visible = true;
   Refile5i.visible = true;
   Refile6i.visible = true;
   Refile7i.visible = true;
   Refile8i.visible = true;
   GZ2i.visible = true;
   GZi.visible = true;
   TS2i.visible = true;
   TSi.visible = true;
   RD2i.visible = true;
   RDi.visible = true;

  if(keyWentDown("space")&& GoodWolf.y >= 100) {
    GoodWolf.changeAnimation("Jumping Good Wolf",GWolf2);
    GoodWolf.velocityY = -12; 
  } 

  if(keyWentUp("space")){
     GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  }

  GoodWolf.velocityY = GoodWolf.velocityY + 0.8;

}




}















function spawnCoins(){
   if(frameCount%170 === 0){
    var Coin = createSprite(width,height/2);
    Coin.addAnimation("coins",COIN);
    Coin.scale = 0.7;
    Coin.visible = true;
    GH.depth = Coin.depth + 1;
    FH.depth = Coin.depth + 1;
    EH.depth = Coin.depth + 1;
    HH.depth = Coin.depth + 1;
    GZ.depth = Coin.depth + 1;
    TS.depth = Coin.depth + 1;
    RD.depth = Coin.depth + 1;
    GZ2.depth = Coin.depth + 1;
    TS2.depth = Coin.depth + 1;
    RD2.depth = Coin.depth + 1;
    FH2.depth = Coin.depth + 1;
    II.depth = Coin.depth + 1;
    ZP.depth = Coin.depth + 1;
    line3p.depth = Meteor.depth+1;
    line3p.depth = GH.depth + 1;
    line3p.depth = FH.depth + 1;
    line3p.depth = EH.depth + 1;
    line3p.depth = HH.depth + 1;
    line3p.depth = GZ.depth + 1;
    line3p.depth = TS.depth + 1;
    line3p.depth = RD.depth + 1;
    line3p.depth = GZ2.depth + 1;
    line3p.depth = TS2.depth + 1;
    line3p.depth = RD2.depth + 1;
    line3p.depth = FH2.depth + 1;
    line3p.depth = II.depth + 1;
    line3p.depth = ZP.depth + 1;
    Meteor.depth = Coin.depth + 1;
    BLAST2.depth = Coin.depth + 1;
    BLAST3.depth = Coin.depth + 1;
    Message.depth = Coin.depth + 1;
    Message7.depth = Coin.depth + 1;
    surprisebox.depth = Coin.depth + 1;
    surprisebox2.depth = Coin.depth + 1;
    surprisebox3.depth = Coin.depth + 1;
    HotAirBalloons.depth = Coin.depth + 1;
    Coin.velocityX = -12;
    Coin.y = Math.round(random(height/2-200,height-150));

    Coin.lifetime = width/9;

    CoinsGroup.add(Coin);
   }

}

function spawnCoinBox(){
  if(frameCount%500 === 0){
     var CoinBOX = createSprite(width,height/2);
     CoinBOX.addImage(CoinBox);
     CoinBOX.scale = 0.27;
     CoinBOX.visible = true;
     GH.depth = CoinBOX.depth + 1;
     FH.depth = CoinBOX.depth + 1;
     EH.depth = CoinBOX.depth + 1;
     HH.depth = CoinBOX.depth + 1;
     GZ.depth = CoinBOX.depth + 1;
     TS.depth = CoinBOX.depth + 1;
     RD.depth = CoinBOX.depth + 1;
     GZ2.depth = CoinBOX.depth + 1;
     TS2.depth = CoinBOX.depth + 1;
     RD2.depth = CoinBOX.depth + 1;
     FH2.depth = CoinBOX.depth + 1;
     II.depth = CoinBOX.depth + 1;
     ZP.depth = CoinBOX.depth + 1;
     line3p2.depth = Meteor.depth+1;
     line3p2.depth = GH.depth + 1;
     line3p2.depth = FH.depth + 1;
     line3p2.depth = EH.depth + 1;
     line3p2.depth = HH.depth + 1;
     line3p2.depth = GZ.depth + 1;
     line3p2.depth = TS.depth + 1;
     line3p2.depth = RD.depth + 1;
     line3p2.depth = GZ2.depth + 1;
     line3p2.depth = TS2.depth + 1;
     line3p2.depth = RD2.depth + 1;
     line3p2.depth = FH2.depth + 1;
     line3p2.depth = II.depth + 1;
     line3p2.depth = ZP.depth + 1;
     Meteor.depth = CoinBOX.depth + 1;
     BLAST2.depth = CoinBOX.depth + 1;
     BLAST3.depth = CoinBOX.depth + 1;
     Message.depth = CoinBOX.depth + 1;
     Message7.depth = CoinBOX.depth + 1;
     surprisebox.depth = CoinBOX.depth + 1;
     surprisebox2.depth = CoinBOX.depth + 1;
     surprisebox3.depth = CoinBOX.depth + 1;
     HotAirBalloons.depth = CoinBOX.depth + 1;
     CoinBOX.velocityX = -12;
     CoinBOX.y = Math.round(random(height/2-300,height-180));

     CoinBOX.lifetime = width/9;

     CoinBOXGroup.add(CoinBOX);
  }

}

function spawnCoinBox2(){
  if(frameCount%600 === 0){
   var CoinBOX2 = createSprite(width,height/2);
   CoinBOX2.addImage(CoinBox);
   CoinBOX2.scale = 0.27;
   CoinBOX2.visible = true;
   GH.depth = CoinBOX2.depth + 1;
   FH.depth = CoinBOX2.depth + 1;
   EH.depth = CoinBOX2.depth + 1;
   HH.depth = CoinBOX2.depth + 1;
   GZ.depth = CoinBOX2.depth + 1;
   TS.depth = CoinBOX2.depth + 1;
   RD.depth = CoinBOX2.depth + 1;
   GZ2.depth = CoinBOX2.depth + 1;
   TS2.depth = CoinBOX2.depth + 1;
   RD2.depth = CoinBOX2.depth + 1;
   FH2.depth = CoinBOX2.depth + 1;
   II.depth = CoinBOX2.depth + 1;
   ZP.depth = CoinBOX2.depth + 1;
   line3p3.depth = Meteor.depth+1;
   line3p3.depth = GH.depth + 1;
   line3p3.depth = FH.depth + 1;
   line3p3.depth = EH.depth + 1;
   line3p3.depth = HH.depth + 1;
   line3p3.depth = GZ.depth + 1;
   line3p3.depth = TS.depth + 1;
   line3p3.depth = RD.depth + 1;
   line3p3.depth = GZ2.depth + 1;
   line3p3.depth = TS2.depth + 1;
   line3p3.depth = RD2.depth + 1;
   line3p3.depth = FH2.depth + 1;
   line3p3.depth = II.depth + 1;
   line3p3.depth = ZP.depth + 1;
   Meteor.depth = CoinBOX2.depth + 1;
   BLAST2.depth = CoinBOX2.depth + 1;
   BLAST3.depth = CoinBOX2.depth + 1;
   Message.depth = CoinBOX2.depth + 1;
   Message7.depth = CoinBOX2.depth + 1;
   surprisebox.depth = CoinBOX2.depth + 1;
   surprisebox2.depth = CoinBOX2.depth + 1;
   surprisebox3.depth = CoinBOX2.depth + 1;
   HotAirBalloons.depth = CoinBOX2.depth + 1;
   CoinBOX2.velocityX = -12;
   CoinBOX2.y = Math.round(random(height/2-300,height-180));

   CoinBOX2.lifetime = width/9;

   CoinBOX2Group.add(CoinBOX2);
  }

}

function spawnAlert(){
  if(frameCount%550 === 0){
   var Alert = createSprite(width,height/2);
   Alert.addImage(Ii2);
   Alert.scale = 0.09;
   Alert.visible = true;
   GH.depth = Alert.depth + 1;
   FH.depth = Alert.depth + 1;
   EH.depth = Alert.depth + 1;
   HH.depth = Alert.depth + 1;
   GZ.depth = Alert.depth + 1;
   TS.depth = Alert.depth + 1;
   RD.depth = Alert.depth + 1;
   GZ2.depth = Alert.depth + 1;
   TS2.depth = Alert.depth + 1;
   RD2.depth = Alert.depth + 1;
   FH2.depth = Alert.depth + 1;
   II.depth = Alert.depth + 1;
   ZP.depth = Alert.depth + 1;
   Meteor.depth = Alert.depth + 1;
   BLAST2.depth = Alert.depth + 1;
   BLAST3.depth = Alert.depth + 1;
   Message.depth = Alert.depth + 1;
   surprisebox.depth = Alert.depth + 1;
   surprisebox2.depth = Alert.depth + 1;
   surprisebox3.depth = Alert.depth + 1;
   Message7.depth = Alert.depth + 1;
   HotAirBalloons.depth = Alert.depth + 1;
   Alert.velocityX = -12;
   Alert.y = Math.round(random(height/2-300,height-180));

   Alert.lifetime = width/9;

   AlertGroup.add(Alert);
  }

}

function spawnAlert2(){
  if(frameCount%900 === 0){
   var Alert2 = createSprite(width,height/2);
   Alert2.addImage(Ii2);
   Alert2.scale = 0.09;
   Alert2.visible = true;
   GH.depth = Alert2.depth + 1;
   FH.depth = Alert2.depth + 1;
   EH.depth = Alert2.depth + 1;
   HH.depth = Alert2.depth + 1;
   GZ.depth = Alert2.depth + 1;
   TS.depth = Alert2.depth + 1;
   RD.depth = Alert2.depth + 1;
   GZ2.depth = Alert2.depth + 1;
   TS2.depth = Alert2.depth + 1;
   RD2.depth = Alert2.depth + 1;
   FH2.depth = Alert2.depth + 1;
   II.depth = Alert2.depth + 1;
   ZP.depth = Alert2.depth + 1;
   Meteor.depth = Alert2.depth + 1;
   BLAST2.depth = Alert2.depth + 1;
   BLAST3.depth = Alert2.depth + 1;
   Message.depth = Alert2.depth + 1;
   Message7.depth = Alert2.depth + 1;
   surprisebox.depth = Alert2.depth + 1;
   surprisebox2.depth = Alert2.depth + 1;
   surprisebox3.depth = Alert2.depth + 1;
   HotAirBalloons.depth = Alert2.depth + 1;
   Alert2.velocityX = -12;
   Alert2.y = Math.round(random(height/2-300,height-180));
  
   Alert2.lifetime = width/9;

   Alert2Group.add(Alert2);
  }

}